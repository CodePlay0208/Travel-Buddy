import * as React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function ClearableProp() {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DemoItem>
          <DatePicker
            sx={{ width: 260 ,backgroundColor:'white', borderRadius:'7px'}}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </DemoItem>

        
    </LocalizationProvider>
  );
}