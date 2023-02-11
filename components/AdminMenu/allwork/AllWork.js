import WorkContext from '@/context/work-context';
import React, { useContext } from 'react'

const AllWork = () => {


    const {allWork, haveWork} = useContext(WorkContext);
    //    console.log(allWork, haveWork);
    //    console.log(allWork[0].date.Date.getDate())
    
        let workJsx;
    
        if(!haveWork){
            workJsx = <h3 className='text-xl text-center font-bold '>No Work Found!</h3>
        }

        if(allWork.length < 0){
            workJsx = <h3 className='text-3xl text-center font-bold '>Loading</h3>
        }
    
        if(allWork.length > 0 ){
            workJsx = allWork.map( work=>{
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

export default AllWork


