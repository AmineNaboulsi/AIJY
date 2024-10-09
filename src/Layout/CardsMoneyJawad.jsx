import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import './Style/CardsMoneyJawad.css';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'; // Added useTheme import
import { IoCloudDoneSharp } from "react-icons/io5";

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};


function CardsMoneyJawad({ message }) {
  const [allamonth, setAllamonth] = useState();
  const [reportview, setreportview] = useState(false);
  const [rows, setrows] = useState([]);
  const [Amonthdeposit, setAmonthdeposit] = useState("");
  const [Addedshow, setAddedshow] = useState(false);
  const HandleAddpososit = ()=>{
    const url = import.meta.env.VITE_url;
    if(Amonthdeposit===""){
      alert("Required amount");
      return ;
    }
    fetch(`${url}/c/depo?mdeposed=${Amonthdeposit}`)
    .then(res=>res.json())
    .then(data=>{
      setAddedshow(true)
        setTimeout(() => {
          setAddedshow(false);
          setAmonthdeposit("");
        }, 2000);
    })
  }
  useEffect(() => {
    const url = import.meta.env.VITE_url; 
    fetch(`${url}/c/getdepolist`)
      .then(res => res.json())
      .then(data => setrows(data));
      fetch(`${url}/c/getcamonth`)
      .then(res => res.json())
      .then(data => setAllamonth(data));
  }, [HandleAddpososit]);

  const HandledReport = () => {
    setreportview(!reportview);
  };

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {},
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'cdscsd',
    }
   
  ];
  const FormatDate = (date_) =>{
    const date = new Date(date_);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }
  return (
    <div className='TodayYesterdaySpend'>
      <div className="Today">
        <div className='titleCard'>Today</div>
        <div className="price">
        {allamonth ? <h2> {allamonth.amonth} MAD</h2> :
        <>
          
        </> }
          
          <span className="reset">- Reset</span>
        </div>
        <div className="amonthspend">For now (- {allamonth&&allamonth.todayamonth} MAD)</div>
        <div  className="viewrep">
          <div onClick={HandledReport} className="ViewPort">
            <p>View Report</p>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>

      <div className="Yesterday">
        <div className="titlle1"><p>Yesterday</p></div>
        <div className="payment"><p>-{allamonth&&allamonth.yestrdayamonth} MAD</p></div>
        <div className="Percentage">
          <div style={{ display: "flex", alignItems: "center", fontWeight: "100" }} className='Pers'>
            <MdArrowOutward />
            <p>15%</p>
          </div>
          <p className='minus'>- 190 MAD</p>
        </div>
      </div>

      <div className={reportview?'cardcaisse':'cardcaisseclosed'}>
        <div className="cardpanel">
          <div className="paneltitle">
            <span>Caisse</span>
            <button onClick={HandledReport}>x</button>
          </div>
          <Box
            sx={{
              bgcolor: 'background.paper',
              minWidth: 500,
              position: 'relative',
              minHeight: 300,
            }}
          >
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label="History Deposit" {...a11yProps(0)} />
                <Tab label="Depose" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Made with ❤️ by amine</caption>
        <TableHead>
          <TableRow>
            <TableCell>Amonth deposed</TableCell>
            <TableCell sx={{ minWidth: 350 }} align="left">Deposed date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell  component="th" scope="row">
                {row.amonthDeposed} MAD
              </TableCell>
              <TableCell align="left">{FormatDate(row.deposed_date)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <Box
                  component="form"
                  sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
                  noValidate
                  autoComplete="off"
            >
              <div className="itemdepose">
                <span>Deposit</span>
                    <TextField
                          id="outlined-multiline-flexible"
                          label="Amount"
                          type='number'
                          value={Amonthdeposit}
                          onChange={
                            (e)=>{
                              setAmonthdeposit(e.target.value);
                            }
                          }
                          maxRows={1}
                    />
                    {Addedshow?<>
                      <div className="deposetmsg">
                      <IoCloudDoneSharp /><>Deposit successfuly</>
                    </div></>:<></>}
                    
              </div>
              
            </Box>
            </TabPanel>
            {fabs.map((fab, index) => (
              index === 1 && (
                <Zoom
                  key={fab.color}
                  in={value === index}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                  }}
                  unmountOnExit
                  onClick={HandleAddpososit}
                >
                  <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                    {fab.icon}
                  </Fab>
                </Zoom>
              )
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default CardsMoneyJawad;
