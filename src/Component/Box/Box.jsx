import React , {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
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
/* ------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------ */
function Box() {
  const navigate = useNavigate()
  // State for toggling each section
    const [Data , setData] = useState({
      productname : "" ,
      productPrice : 0
    });
    const [showConstraints, setShowConstraints] = useState(false);
    const [datalist, setdatalist] = useState([]);
    const HandleClickSubmit = () => {
      fetch(`http://localhost:3040/P/AddProduct?pname=${Data.productname}&pprice=${Data.productPrice}`)
      .then(res=>res.json())
      .then(data=>{
      })
    }
    useEffect(()=>{
      fetch("http://localhost:3040/P/getProduct")
      .then(res=>res.json())
      .then(data=>setdatalist(data));
    } , [HandleClickSubmit]);
    // Toggle functions
    const toggleConstraints = () => setShowConstraints(!showConstraints);
    const FormatDate = (date_) =>{
      const date = new Date(date_);
      return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
    }
   
    return (

    <div>
    <div className='BoxContainer '>

       <div className='BoxList'>
       <TableContainer style={{maxHeight:"70vh"}} component={Paper}>
      <Table  aria-label="simple table">
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
              <TableCell>{row.productPrice}</TableCell>
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
        <div className={showConstraints ? 'AddUpdate ' :'AddUpdateClosed' }>
          
            <p className={!showConstraints ? 'ParagraphAddUpdate' :'ParagraphAddUpdateOpen' }> <IoIosAddCircleOutline /> <span>Add</span><span>/</span><span>Update</span>  </p>

            <div onClick={toggleConstraints}>
                {showConstraints ? <IoIosArrowForward /> :<IoIosArrowBack /> }
            </div>
       </div>
            {showConstraints && (
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
                   )}
        </div>
       </div>
      
    </div>
    </div>
  )
}

export default Box