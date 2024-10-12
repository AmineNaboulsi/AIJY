import React , {useEffect, useState} from 'react'
import "./Style/TasksManagerList.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TasksManagerList({ ApplyChanged }) {
    const [TaskList, setTaskList] = useState([]);
    const url = import.meta.env.VITE_url;
    useEffect(() => {
        fetch(url+'/taskslist')
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => setTaskList(result))
        .catch((error) => {
            /*toast.error("Fetch error: " + error.message, {
                position : 'bottom-right'
             });*/
             
        });
    }, []);
    
  return (
    <div className="TasksManagement">
        <div className="Table">
            <table>
                <thead className='poppins'> 
                    <th></th>
                    <th>Members</th>
                    <th>Tasks</th>
                    <th>Rating</th>
                </thead>
                <tbody>
                    {TaskList&&TaskList.map((item , index)=>(
                        <>
                            <tr>
                                <td className='noBorder MemberImage'>
                                <div>
                                    <img src={item.link} alt="" />
                                </div>
                                </td>
                                <td className='noBorder MemberName'>
                                    <h3>{item.name}</h3>
                                </td>
                                <td className={item.task=="Outside" ? "noBorder MemberTaskOutside" : 
                                               item.task=="Washing" ? "noBorder MemberTaskWashing" :
                                               item.task=="Cleaning"? "noBorder MemberTaskCleaning" : "noBorder MemberTaskOther" }>
                                    <div>{item.task}</div>
                                </td>
                                <td className='noBorder MemberRate' >
                                {   item.rate <= 25 ? ( <span className='ratelow'>{item.rate}%</span> ) : 
                                (   item.rate <= 75 ? ( <span className='rateMeduim'>{item.rate}%</span> ) : 
                                (<>{item.rate >= 75 ? ( <span className='rateHigh'>{item.rate}%</span>) : 
                                (<>Nan</>) }</>))}
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
  )
}

export default TasksManagerList