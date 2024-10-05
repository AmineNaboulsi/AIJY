import React , {useEffect, useState} from 'react'


function TasksManagerList({ ApplyChanged }) {

    const [TaskList, setTaskList] = useState([]);


    useEffect(() => {
        fetch("https://aijyss.onrender.com/taskslist")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => setTaskList(result))
        .catch((error) => alert("Fetch error: " + error.message));
    }, []);
    
  return (
    <div className="TasksManagement">
        {/* <div className="TitleTaskManager ">
            <h3 className='poppins'>Tasks Management</h3>
        </div> */}
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
                                {item.rate <= 25 ? (
                                        <span className='ratelow'>{item.rate}%</span>
                                    ) : (
                                        item.rate <= 75 ? (
                                            <span className='rateMeduim'>{item.rate}%</span>
                                        ) : (<>{item.rate >= 75 ? (<span className='rateHigh'>{item.rate}%</span>) : (<>Nan</>) }</>)
                                    )}
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