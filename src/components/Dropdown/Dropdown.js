import React from 'react';
import { DropdownContainer, DropdownItem } from "./Dropdown.styled.js";
import { useNavigate } from 'react-router-dom'; // If you're using react-router for navigation

const Dropdown = ({ data, selectSuggestion}) => {
  const navigate = useNavigate();


  return (
    <DropdownContainer>
      {data.map((data, index) => (
        <DropdownItem key={index} onClick={() => selectSuggestion(data)}>
          {data.value}
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
