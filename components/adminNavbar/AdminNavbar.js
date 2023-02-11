import NotifyContext, { NotifyProvider } from '@/context/notify-context';
import React, { useContext, useEffect, useState } from 'react'



const AdminNavbar = () => {

    const [isNotifyOpen, setIsNotifyOpen] = useState(false);

    const [isMessage, setIsMessage] = useState([]);

    const { msg: notifyContext, haveMsg } = useContext(NotifyContext);



    // console.log(notifyContext, haveMsg);
    
    
    
    let notifyLength = ''; 
    let notifyJsx;

    if(notifyContext.length<=0){
        notifyJsx = <div className='no-message'>
       <h3>Loading</h3>
   </div>
   }
    

    if(!haveMsg){
        notifyLength = '';
         notifyJsx = <div className='no-message'>
            <h3>No Messages</h3>
        </div>
    }

    

    if(notifyContext.length>0){
        notifyLength = notifyContext.length;
         notifyJsx = notifyContext.map(msg => {
            return (
                <div className='notify-card' key={msg._id}>
                    <div className='client-detail'>
                        <h3>{msg.name}</h3>
                        <h3>{msg.number}</h3>
                    </div>
                    <div className='client-msg'>
                        <p>{msg.msg}</p>
                    </div>
                </div>
            )
        })

    }




    const notifyHandler = () => {
        setIsNotifyOpen(!isNotifyOpen);
    }




    return (


        <div className='admin-nav-main'>

            <div className='admin-nav-wrapper'>

                <h1 className='admin-nav-heading'>TopDog</h1>

                <div className='notify-main'>
                    <button onClick={notifyHandler}>
                        <i className="fa-sharp fa-solid fa-bell"></i>
                        <h3 >{notifyLength}</h3>
                    </button>
                </div>



                <div className={isNotifyOpen ? 'notify-backdrop-show' : 'notify-backdrop-hide'}>

                    <div className='notify-card-wrapper'>

                        {notifyJsx}

                    </div>



                </div>


            </div>

        </div>


    )
}

export default AdminNavbar