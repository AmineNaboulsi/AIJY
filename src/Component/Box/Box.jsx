import React , {useState} from 'react'
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
function createData(
   NameProduct , Price, DateBuying
) {
  return { NameProduct, Price, DateBuying };
}

const rows = [
  createData('ker machwi', 159, '12/03/20224'),
  createData('Sowa 7lowa', 237, '02/03/20224'),
  createData('Trma bida', 262, '22/03/20224'),
];
/* ------------------------------------------------------------------------ */
function Box() {

    // State for toggling each section
    const [showConstraints, setShowConstraints] = useState(false);

    // Toggle functions
    const toggleConstraints = () => setShowConstraints(!showConstraints);
  return (
    <div>
    <div className='BoxContainer '>

       <div className='BoxList'>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='Head'>Product Name  </TableCell>
            <TableCell className='Head'>Price</TableCell>
            <TableCell className='Head'>Date Buying</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.NameProduct}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.NameProduct}
              </TableCell>
              <TableCell>{row.Price}</TableCell>
              <TableCell >{row.DateBuying}</TableCell>
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
                      <input type="text" name="" id="Product" />
                  </div>
                  <div className='InputInfo'>
                      <label htmlFor="Price">Product Price</label>
                      <input type="number" name="" id="Price" />
                  </div>
                  <div style={{textAlign:"right"}}>
                      <button className='SubmitBtn'>Submit</button>
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