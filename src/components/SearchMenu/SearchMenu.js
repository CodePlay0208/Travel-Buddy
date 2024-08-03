import React, {useContext, useEffect} from 'react';
import './SearchMenu.css';
import SearchBar from '../SearchBar/SearchBar';
import DatePicker from '../DatePicker/DatePicker';
import { InputValuesContext } from '../../Utils/Context/InputValuesContext';

const SearchMenu = () => {
  const { inputValues, setInputValues } = useContext(InputValuesContext);

  useEffect(()=>{
    console.log("the input values are", inputValues);
  }, [inputValues])

  return (
    <div className="SearchBar-Container">
      <SearchBar/>
     <DatePicker inputValues={inputValues.startDate} setInputValues={setInputValues} onValue={'startDate'} placeholderValue={"Select Travel date"}/>
      <div className="SearchBar-Searchbutton">
        <div className="SearchBar-button">Search</div>
      </div>
    </div>
  );
};

export default SearchMenu;
