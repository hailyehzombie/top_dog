import WorkContext from '@/context/work-context'
import React, { useContext } from 'react'

const Todaywork = () => {


   const {allWork, haveWork} = useContext(WorkContext);

    console.log(haveWork);
   
    let workJsx;

    if(!haveWork){
        workJsx = <h3 className='text-xl text-center font-bold '>No Work Found!</h3>
    }

    const workData = allWork.filter( work =>{
    //    console.log(work.date.slice(8,10));
       const workDate = work.date.slice(8,10);
       const toDay = Date();
       const day = toDay.slice(8,10);
    //    console.log(day)
       if(workDate == day){
        return work;
       }

    })

    // console.log(workData);

    

    if(allWork.length > 0 ){
        workJsx = workData.map( work=>{
            return(
                <div className='work-card' key={work._id}>
                <h3>{work.name}e</h3>
                <h4>{work.date}</h4>
                <h5>{work.status ? 'Pending' : 'Done'}</h5>
            </div>
            )
        })
    }






  return (
    <div className='work-main'>

        <div className='work-wrapper'>

            {workJsx}

        </div>



    </div>
  )
}

export default Todaywork