import React, { useEffect, useState } from "react";

const NotifyContext = React.createContext({
    msg: [],
    haveMsg: true
})

export const NotifyProvider = (props) => {

    const [isMsg, setIsMsg] = useState([]);
    const [isNotification, setIsNotification] = useState(true);

    useEffect(() => {

        fetch('api/msg')
            .then(responce => responce.json())
            .then(result =>{
                // console.log(result.msgData.length);
                if(result.msgData.length<=0){
                    setIsNotification(false);
                    setIsMsg([]);
                }else{
                    setIsNotification(true);
                    setIsMsg(result.msgData);
                }
            } )
            .catch(err => console.log(err));
    }, [])


    // console.log(isMsg.msgData)

    return (
        <NotifyContext.Provider value={{
            msg: isMsg,
            haveMsg: isNotification
        }}>
            {props.children}
        </NotifyContext.Provider>
    )


}



export default NotifyContext;