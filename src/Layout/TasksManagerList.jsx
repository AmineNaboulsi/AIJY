import React , {useState} from 'react'


function TasksManagerList({ ApplyChanged }) {
  return (
    <div className="TasksManagement">
        <div className="TitleTaskManager ">
            <h3 className='poppins'>Tasks Management</h3>
        </div>
        <div className="Table">
            <table>
                <thead className='poppins'> 
                    <th></th>
                    <th>Members</th>
                    <th>Tasks</th>
                    <th>Rating</th>
                </thead>
                <tbody>
                    <tr className='special-row'>
                        <td className='MemberImage'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </div>

                                
                        </td>
                        <td className='MemberName'>
                                <h3 >Jawad Boulmal</h3>
                        </td>
                        <td className='MemberTask'>
                            <div>
                                Outside
                            </div>
                        </td>
                        <td className='MemberRate'>
                            10%
                        </td>
                    </tr>

                    <tr>
                        <td className='MemberImage'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </div>

                                
                        </td>
                        <td className='MemberName'>
                                <h3 >Jawad Boulmal</h3>
                        </td>
                        <td className='MemberTask'>
                            <div>
                                Outside
                            </div>
                        </td>
                        <td className='MemberRate'>
                            10%
                        </td>
                    </tr>

                    <tr>
                        <td className='MemberImage'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </div>

                                
                        </td>
                        <td className='MemberName'>
                                <h3 >Jawad Boulmal</h3>
                        </td>
                        <td className='MemberTask'>
                            <div>
                                Outside
                            </div>
                        </td>
                        <td className='MemberRate'>
                            10%
                        </td>
                    </tr>

                    <tr>
                        <td className='MemberImage'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </div>

                                
                        </td>
                        <td className='MemberName'>
                                <h3 >Jawad Boulmal</h3>
                        </td>
                        <td className='MemberTask'>
                            <div>
                                Outside
                            </div>
                        </td>
                        <td className='MemberRate'>
                            10%
                        </td>
                    </tr>

                    
                </tbody>
            </table>
        </div>
      </div>
  )
}

export default TasksManagerList