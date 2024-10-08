import React , {useEffect, useState} from 'react'
import "./Style/Tasks.css"

function Tasks() {
  const [Swipe, setSwipe] = useState(false);
  const [Infos, setInfos] = useState([]);
  const [dateNow , setDateNow] = useState(null);  
  const [dayNumber, setDayNumber] = useState(null);
  const [monthName, setMonthName] = useState('');
  useEffect(() => {
    const currentDate = new Date();
    setDayNumber(currentDate.getDate()); 
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    setMonthName(month);
  }, []);
    const url = import.meta.env.VITE_url;
    useEffect(() => {
        fetch(url+'/taskslist')
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          setInfos(result)
          console.log(result);
        })
        .catch((error) => alert("Fetch error: " + error.message));
    }, []);

  return (

    

    <div className='TasksContainer'>
      <div className="TasksContent">

      {Infos&&Infos.map((item , index)=>(
        <>
              <div className={index === 2 ? "Arrow ROTATE2" :
                              index === 1 ? "Arrow ROTATE1" :
                              index === 3 ? "Arrow ROTATE3" :
                              index === 0 ? "Arrow ROTATE0" :
                              console.log("hh")
               }>
                <svg viewBox="0 0 137 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128.242 15.9853L128.026 17.9736L128.242 15.9853ZM135.687 18.217C136.548 17.5249 136.685 16.2659 135.993 15.4051L124.714 1.3765C124.022 0.515634 122.763 0.378812 121.903 1.07091C121.042 1.76299 120.905 3.02191 121.597 3.88277L131.622 16.3526L119.152 26.3777C118.291 27.0698 118.155 28.3287 118.847 29.1896C119.539 30.0505 120.798 30.1873 121.659 29.4952L135.687 18.217ZM128.026 17.9736L134.218 18.6465L134.65 14.6699L128.458 13.997L128.026 17.9736ZM4.89027 119.251C10.2347 56.9333 65.844 11.2156 128.026 17.9736L128.458 13.997C64.0466 6.9967 6.44127 54.3531 0.904898 118.909L4.89027 119.251Z" fill="black"/>
                </svg>
              </div>
              <div className="MemberInfoss">
                <div className="Task">
                  <h1>{item.task}</h1>
                </div>
                <div className="Image">
                  <img src={item.link} alt="" />
                </div>
                <div className="Name">
                  <p>{item.name}</p>
                </div>
              </div>
              
        </>
      ))}

              <div className="DateToday">
              <svg viewBox="0 0 112 110" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_42_1274)"><rect width="112" height="109.745" rx="8" fill="white"></rect><rect width="112" height="41" fill="#4B7BCD"></rect><circle cx="6.5" cy="6.5" r="2.5" fill="#D9D9D9"></circle><circle cx="105.5" cy="6.5" r="2.5" fill="#D9D9D9"></circle><circle cx="55.5" cy="6.5" r="2.5" fill="#D9D9D9"></circle><circle cx="30.5" cy="6.5" r="2.5" fill="#D9D9D9"></circle><circle cx="80.5" cy="6.5" r="2.5" fill="#D9D9D9"></circle></g><defs><clipPath id="clip0_42_1274"><rect width="112" height="109.745" rx="8" fill="white"></rect></clipPath><clipPath id="clip1_42_1274"><rect width="112" height="73" fill="white" transform="translate(0 37)"></rect></clipPath></defs></svg>
                <h1 className='month'>
                  {monthName}
                </h1>
                <h1 className='Day'>
                  {dayNumber}
                </h1>
              </div>

            
             
      </div>
    </div>
  )
}

export default Tasks