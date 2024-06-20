import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
const App = ({inputValues,setInputValues}) => (
  
  <DatePicker
    defaultValue={dayjs()}
    minDate={dayjs()}
    maxDate={dayjs().add(12,'month')}
    style={{border:"2px solid"}}
    allowClear={false}
    value={inputValues.startDate===''?null:dayjs(inputValues.startDate)}
            onChange={(newValue) => {
              const currentDate = dayjs(newValue);
              const formattedDate = currentDate.format('YYYY-MM-DD');
              setInputValues((currentInputValues) => ({
              ...currentInputValues,
              startDate: formattedDate
            }))}}
  >{console.log(inputValues)}</DatePicker>
);
export default App;