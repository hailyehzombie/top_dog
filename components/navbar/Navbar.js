import React, { useEffect, useState } from 'react'
import { FaBone } from 'react-icons/fa'
import { BiBone } from 'react-icons/bi'



const Navbar = () => {

    const [nav, setNav] = useState(false);

    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 10) {
                setColor('black');
                setTextColor('white')
            } else {
                setColor('transparent');
                setTextColor('white');
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])



    return (
        <div
            style={{
                backgroundColor: `${color}`,
                color: `${textColor}`
            }}
            className=' flex justify-between w-full h-[80px]  items-center fixed top-0 left-0 z-[100] transition-all duration-200 ease-linear '>

            <h1 className='navbar-heading mx-6'>Dog Expert</h1>

            <nav
                style={{}}
                className='navbar hidden md:flex justify-between w-[60%] '>
                <a href="/">Home</a>
                <a href="#training">Training</a>
                <a href="#grooming">Grooming</a>
                <a href="#contactus">Contact Us</a>
                <a href="#aboutus">About Us</a>

            </nav>


            <div onClick={handleNav} className='mx-4 block md:hidden '>
                {!nav ? <FaBone size={50}/> : <BiBone size={50} /> }
            </div>


            <nav
                className={nav ? 'w-full h-screen absolute top-[80px] left-0 bg-black/80 text-white flex flex-col items-center justify-around text-2xl font-bold transition-all duration-300 '  :
                'w-full h-screen absolute top-[80px] left-[-150%] bg-black/80 text-white flex flex-col items-center justify-around text-2xl font-bold  transition-all duration-300'
            }
            >
                
                <a href="/">Home</a>
                <a href="#training">Training</a>
                <a href="#grooming">Grooming</a>
                <a href="#contactus">Contact Us</a>
                <a href="#aboutus">About Us</a>

            </nav>




        </div>


    )
}

export default Navbar