import AddNewWork from '@/components/AdminMenu/addnewwork/AddNewWork';
import AllWork from '@/components/AdminMenu/allwork/AllWork';
import Todaywork from '@/components/AdminMenu/todaywork/Todaywork';
import AdminNavbar from '@/components/adminNavbar/AdminNavbar';
import React, { useEffect, useState } from 'react'

const Admin = () => {

  const [menu, setMenu] = useState('1');

  const menuHandler = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {

      case 'today':
        setMenu('1');
        break;

      case 'add-work':
        setMenu('2');
        break;

      case 'all-work':
        setMenu('3');
        break;

      default:
        setMenu('1');
    }
  }

  return (
    <div>

      <AdminNavbar />

      <div className='admin-menu-wrapper'>

        <div className='menu-btn-div'>
          <button className='add-work-btn' id='today' onClick={menuHandler}>
            Today Work
          </button>
        </div>

        <div className='menu-btn-div' >
          <button className='add-work-btn' id='add-work' onClick={menuHandler}>
            Add Work
          </button>
        </div>

        <div className='menu-btn-div' >
          <button className='add-work-btn' id='all-work' onClick={menuHandler}>
            All Work
          </button>
        </div>


      </div>

      {menu === '1' && <Todaywork /> }

      {menu === '2' && <AddNewWork />}

      {menu ==='3' &&    <AllWork />}



    </div>
  )
}

export default Admin