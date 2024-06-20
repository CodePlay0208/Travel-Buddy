import React from "react";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import "./SearchBar.css";

async function fetchAPIResponse(url, inputValueForSearchBar) {
  if (
    inputValueForSearchBar == undefined ||
    inputValueForSearchBar == "" ||
    inputValueForSearchBar == null
  ) {
    return [];
  }
  const Locations = ["delhi", "dehradun", "dhaka", "bangalore", "goa"];
  const apiResponseToJson = Locations.filter((string) =>
    string.includes(inputValueForSearchBar)
  );
  return apiResponseToJson;
}



const SearchBar = (props) => {
  const { setInputValueFunction, setInputValueVariable, placeholder, id } = props;
  const [dropDownData, setDropDownData] = useState([]);
  const [showDropDownList, setShowDropDownList] = useState(false);
  const [inputValueForSearchBar, setInputValueForSearchBar] = useState("");
  const [debouncedValues] = useDebounce(inputValueForSearchBar, 500);
  useEffect(() => {
    fetchAPIResponse("", inputValueForSearchBar).then((data) =>
      setDropDownData(data)
    );
  }, [debouncedValues]);

  useEffect(() => {
    const storedInputValues = localStorage.getItem("inputValues");
    if (storedInputValues) {
      const parsedInputValues = JSON.parse(storedInputValues);
      setInputValueForSearchBar(parsedInputValues.destination);
    }

    const selectDefaultValuesForSearchBar = () =>{
      if(dropDownData != null && dropDownData!= undefined && dropDownData.length > 0){
        setShowDropDownList(false);
        setInputValueForSearchBar(dropDownData[0]);
        setInputValueFunction((currentInputValues) => {
          const newInputValues = currentInputValues;
          newInputValues[setInputValueVariable] = dropDownData[0];
          return newInputValues;
        });
        setDropDownData([]);
      }
    }


    document.addEventListener('click', selectDefaultValuesForSearchBar);

    return ()=> document.removeEventListener('click', selectDefaultValuesForSearchBar)

  }, [dropDownData]);



  return (
    <div className="search-bar-container-inSearchMenu">
      <input
        value={inputValueForSearchBar}
        type="text"
        onChange={(event) => {
          setInputValueForSearchBar(event.target.value);
          setShowDropDownList(true);
        }}
        placeholder={placeholder}
        id={id}
        className="location-search-bar"
        autoComplete="off"
      />
     
      {showDropDownList && dropDownData.length != 0 && (
        <div className="dropDownListForSearchBar">
          {dropDownData.map((data, idx) => (
            <li
              key={data}
              className={
                "listItemInDropDownListForSearchBar" +
                idx +
                " listItemInDropDownListForSearchBar"
              }
              onClick={() => {
                setShowDropDownList(false);
                setInputValueForSearchBar(data);
                setInputValueFunction((currentInputValues) => {
                  const newInputValues = currentInputValues;
                  newInputValues[setInputValueVariable] = data;
                  return newInputValues;
                });
                setDropDownData([]);
              }}
            >
              <p className="listItemValue">{data}</p>
            </li>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default SearchBar;
