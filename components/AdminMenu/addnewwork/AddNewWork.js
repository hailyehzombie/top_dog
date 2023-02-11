import React, { useRef } from 'react'

const AddNewWork = () => {

    const inputWorkRef = useRef('');
    const inputDateRef = useRef('');

    const workFormHandler = (e) =>{
        e.preventDefault();
        const workName = inputWorkRef.current.value;
        const workDate = inputDateRef.current.value;

        const workFormData = {
            workName, workDate, status: true
        }
        // console.log(workFormData);
        fetch('/api/work',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(workFormData)
        })
        .then(responce=> responce.json())
        .then(result=> console.log(result))
        .catch(err=>console.log(err));

    }
    




    return (
        <div className='admin-form-main' onSubmit={workFormHandler}>

            <h2 className='admin-heading'>Add New Work</h2>

            <form className='admin-form'>
                <input type="text" placeholder='Work Name' ref={inputWorkRef} />
                <div>
                    <input type="date" ref={inputDateRef} />
                </div>
                <input type="submit" />
            </form>

        </div>
    )
}

export default AddNewWork