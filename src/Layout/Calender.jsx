import React , {useState , useEffect} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar  } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Import the adapter for dayjs
import TextField from '@mui/material/TextField';

function Calender({DateChanged}) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className='Calendar'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar 
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
          DateChanged(selectedDate);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
    
  )
}

export default Calender