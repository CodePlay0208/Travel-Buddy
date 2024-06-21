import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { SlArrowDown } from "react-icons/sl";
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
const App = ({ inputValues, setInputValues }) => (
  <DatePicker
    defaultValue={dayjs()}
    minDate={dayjs()}
    maxDate={dayjs().add(12, 'month')}
    style={{ border: "grey 2px solid", width: "200px", height: "60px", color: "black" }}
    allowClear={false}
    suffixIcon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" class="_1rks9rr1 ejccx3ic ejccx3u ejccx3ic ejccx3u"><g color="neutralIconDefault"><g color="currentColor"><path fill="currentColor" fill-rule="evenodd" d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2.5h10A2.5 2.5 0 0 1 19.5 7v.75h-15V7A2.5 2.5 0 0 1 7 4.5m12.5 4.75V17a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V9.25z" clip-rule="evenodd"></path><path fill="currentColor" d="M8.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path></g></g></svg>}
    value={dayjs()}
    onChange={(newValue) => {
      const currentDate = dayjs(newValue);
      const formattedDate = currentDate.format('YYYY-MM-DD');
      setInputValues((currentInputValues) => ({
        ...currentInputValues,
        startDate: formattedDate
      }))
    }}
  >{console.log(inputValues)}</DatePicker>
);
export default App;