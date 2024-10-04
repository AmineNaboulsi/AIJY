import React , {useState} from 'react'


function TasksManagerList({ ApplyChanged }) {
  return (
    <div className="TasksManagement">
        <div className="TitleTaskManager">
            <h5>Tasks Management</h5>
        </div>
        <div className="Table">
            <table>
                <thead>
                    <th>Members</th>
                    <th>Tasks</th>
                    <th>Rating</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img width={120} src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="" />
                            <h3>Jawad Boulmal</h3>
                        </td>
                        <td><div>Outside</div></td>
                        <td>10%</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
  )
}

export default TasksManagerList