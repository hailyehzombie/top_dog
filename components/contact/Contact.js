import React, { useRef } from 'react'

const Contact = () => {

    const nameRef = useRef('');
    const numberRef = useRef('');
    const msgRef = useRef('');

    const formHandler = (e) =>{
        e.preventDefault();
        // console.log(nameRef.current.value)
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const msg = msgRef.current.value;
        const userInput = {
            name, number, msg
        }
        // console.log(userInput);

        fetch('/api/msg',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(userInput)
        })
        .then(responce=> responce.json())
        .then(result=> console.log(result))
        .catch(err=>console.log(err));

    }



    return (
        <div className='contact-main' onSubmit={formHandler}>

            <div className='contact-wrapper'>

                <h2 className='main-heading'>Contact Us</h2>

                <div className='contact-card'>

                    <div className='contact-img-div'>
                        <img src="/contact.png" alt="contact-img" />
                    </div>


                    <form className='contact-form'>
                        <input type="text" placeholder='Enter your Name' ref={nameRef} />
                        <input type="number" placeholder='Enter your Contact Number' ref={numberRef} />
                        <textarea placeholder='Enter your Message' ref={msgRef}></textarea>
                        <input type="submit" vlaue='Submit' />
                    </form>

                </div>

            </div>


        </div>
    )
}

export default Contact