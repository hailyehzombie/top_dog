import AllWork from "@/components/AdminMenu/allwork/AllWork";
import React, { useEffect, useState } from "react";

const WorkContext = React.createContext({
   
    allWork: [],
    haveWork: true
});

export const WorkContextProvider = (props)=>{

    const [toDayWork, setToDayWork] = useState([]);
    const [allWork, setAllWork] = useState([]);
    const [haveWork, setHaveWork] = useState(true);

    useEffect(()=>{

        fetch('api/work')
        .then(responce=> responce.json())
        .then(result=>{
            // console.log(result.workData);
            if(result.workData.length === 0){
                setHaveWork(false);
            }else{
                setHaveWork(true);
                setAllWork(result.workData);
            }
        })
        .catch(err=> console.log(err));

    },[])

    return(
        <WorkContext.Provider value={{
            
            allWork,
            haveWork,
        }}>
            {props.children}
        </WorkContext.Provider>
    )


}


export default WorkContext;