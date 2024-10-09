import React , {useState , useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './BoxStyle.css';
import '../../AppMobile.css'
import Cookies from 'js-cookie';

/* ------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------ */
function Box() {
  // State for toggling each section
    const [Data , setData] = useState({
      productname : "" ,
      productPrice : 0
    });
    const [showConstraints, setShowConstraints] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [datalist, setdatalist] = useState([]);
    const url = import.meta.env.VITE_url;

    const HandleClickSubmit = () => {
      fetch(`${url}/P/AddProduct?pname=${Data.productname}&pprice=${Data.productPrice}`)
      .then(res=>res.json())
      .then(data=>{})
    }
    const handleResize = () => {
      // Check if the width has changed
      if (window.innerWidth !== windowWidth) {
        // Update width state
        setWindowWidth(window.innerWidth);
        
        // Only update showConstraints based on width
        if (window.innerWidth <= 1000) {
          setShowConstraints(3);  // Set constraints to 3 when width is <= 1000
        } else {
          if (showConstraints === 3) {
            setShowConstraints(0);  // Reset constraints if it was previously set to 3
          }
        }
        console.log("resizing width");
      }
    };
    useEffect(()=>{
      window.addEventListener("resize", handleResize)
        const fetchData = async () => {
                  fetch(`${url}/P/getProduct`)
              .then(res=>res.json())
              .then(data=>setdatalist(data));
          };
        
        fetchData();
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    } , [windowWidth , HandleClickSubmit]);
    // Toggle functions
    const toggleConstraints = () => {
         if(showConstraints==0)
            setShowConstraints(1)
         else if(showConstraints==1)
          setShowConstraints(0)
         else if(showConstraints==2)
          setShowConstraints(3)
         else if(showConstraints==3)
          setShowConstraints(2)
        
    };
    const FormatDate = (date_) =>{
      const date = new Date(date_);
      return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
    }
   
    return (

    <div>
    <div className='BoxContainer '>

       <div className='BoxList'>
       <TableContainer style={{maxHeight:"80vh"}} component={Paper}>
      <Table className='tablelistatsks' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='Head'>Product Name  </TableCell>
            <TableCell className='Head'>Price</TableCell>
            <TableCell className='Head'>Date Buying</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datalist.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell>{row.productPrice} MAD</TableCell>
              <TableCell style={{width : "150px"}}   >{FormatDate(row.productDate) }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </div>
       {/* --------------------------------------------------------------- */}
       <div className='BoxDevAdd '>
       <div className='UpAll'>
        <div className=
        {showConstraints==0 ? 'AddUpdateClosedV' :
          showConstraints==1 ? 'AddUpdateOpenV':
          showConstraints==2 ? 'AddUpdateClosedH':
          showConstraints==3 ? 'AddUpdateOpenH':''
         }>
          
            <p className={
              showConstraints==0 ? 'ParagraphAddUpdate ' :
              showConstraints==1 ? 'ParagraphAddUpdateOpen':
              showConstraints==2 ? 'ParagraphAddUpdateOpen':
              showConstraints==3 ? 'ParagraphAddUpdateOpen':''
              }> <IoIosAddCircleOutline /> <span>Add</span><span>/</span><span>Update</span>  </p>

            <div onClick={toggleConstraints}>
                {showConstraints ? <IoIosArrowForward /> :<IoIosArrowBack /> }
            </div>
       </div>
            {showConstraints==1 ? (
                <div className="AddCard">
                  <div className='InputInfo'>
                      <label htmlFor="Product">Product name</label>
                      <input 
                      value={Data.productname}
                      onChange={
                        (e) => {
                          setData(p => ({
                            ...p ,
                            productname : e.target.value
                          }));
                          console.log(Data)
                        }
                      } 
                      type="text" 
                      name="" 
                      id="Product"
                      />
                  </div>
                  <div className='InputInfo'>
                      <label htmlFor="Price">Product Price</label>
                      <input 
                      value={Data.productPrice}
                      onChange={
                        (e) => {
                          setData(p => ({
                            ...p ,
                            productPrice : e.target.value
                          }));
                          console.log(Data)
                        }
                      } 
                      type="number" 
                      name="" 
                      id="Price" 
                      />
                  </div>
                  <div style={{textAlign:"right"}}>
                      <button 
                      onClick={
                        HandleClickSubmit
                      }
                      className='SubmitBtn'>Submit</button>
                  </div>
                       
                </div>
                ):showConstraints==2?(<>
                <div className="AddCard">
                  <div className='InputInfo'>
                      <label htmlFor="Product">Product name</label>
                      <input 
                      value={Data.productname}
                      onChange={
                        (e) => {
                          setData(p => ({
                            ...p ,
                            productname : e.target.value
                          }));
                          console.log(Data)
                        }
                      } 
                      type="text" 
                      name="" 
                      id="Product"
                      />
                  </div>
                  <div className='InputInfo'>
                      <label htmlFor="Price">Product Price</label>
                      <input 
                      value={Data.productPrice}
                      onChange={
                        (e) => {
                          setData(p => ({
                            ...p ,
                            productPrice : e.target.value
                          }));
                          console.log(Data)
                        }
                      } 
                      type="number" 
                      name="" 
                      id="Price" 
                      />
                  </div>
                  <div style={{textAlign:"right"}}>
                      <button 
                      onClick={
                        HandleClickSubmit
                      }
                      className='SubmitBtn'>Submit</button>
                  </div>
                       
                </div>
                </>):<></>
}
        </div>
       </div>
      
    </div>
    </div>
  )
}

export default Box