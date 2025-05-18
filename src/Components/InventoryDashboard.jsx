import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InventoryDashboard() {
  const [click, setClick] = useState(false); //summary
  const [click1, setClick1] = useState(false); //PO
  const [click2, setClick2] = useState(false); //register

 // Handles Summary dropdown
 const handleClickSummary = () => {

  setClick(!click  );
  if (!click) {setClick1(false),setClick2(false)};
};

  // Handles PO dropdown
  const handleClickPO = () => {
    setClick1(!click1);
    if (!click1) {setClick2(false),setClick(false)};
  };

  // Handles REGISTER dropdown
  const handleClickRegister = () => {
    setClick2(!click2);
    if (!click2) {setClick(false),setClick1(false)};
  };

  return (
    <div className='font-serif font-bold min-h-screen flex flex-col'>
      {/* Navbar */}
      <nav className='p-2 border border-black flex justify-between items-center bg-white'>
        <h1>MediScripts</h1>
        <div>
          <img
            src='/img/Default.png'
            alt='Default profile'
            className='rounded-full w-12 h-12 object-cover'
          />
        </div>    
      </nav>

      {/* Main Content */}
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='bg-slate-500 w-1/6 md:w-1/12 p-4 text-white text-sm '>
          <ul className='space-y-4'>
            <li className='cursor-pointer hover:underline'><Link to="/inventory/Dashboard">HOME</Link></li>
            <li className='cursor-pointer hover:underline'><Link to="/inventory/stock">STOCK</Link></li>
            <li>
              <div className='flex items-center cursor-pointer' onClick={handleClickSummary}>
                <span className='hover:underline'>Summary</span>
                <span className='ml-2 text-yellow-300'>{click ? '▼' : '▶'}</span>
              </div>
              {click && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'><Link to="/inventory/inward">Inward</Link> </li>
                  <li className='hover:underline cursor-pointer'>Outward</li>
                  <li className='hover:underline cursor-pointer'>Stock</li>
                </ul>
              )}
            </li>

            <li>
              <div className='flex items-center cursor-pointer' onClick={handleClickPO}>
                <span className='hover:underline'>PO</span>
                <span className='ml-2 text-yellow-300'>{click1 ? '▼' : '▶'}</span>
              </div>
              {click1 && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'>PO CREATE</li>
                  <li className='hover:underline cursor-pointer'>PO STATUS</li>
                  <li className='hover:underline cursor-pointer'>PO LIST</li>
                </ul>
              )}
            </li>
         
            <li>
              <div className='flex items-center cursor-pointer' onClick={handleClickRegister}>
                <span className='hover:underline'>REGISTER</span>
                <span className='ml-2 text-yellow-300'>{click2 ? '▼' : '▶'}</span>
              </div>
              {click2 && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'>MEDICINE</li>
                  <li className='hover:underline cursor-pointer'>INVENTORY</li>
                  <li className='hover:underline cursor-pointer'>AGENT</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Main Panel */}
        <div className='flex-1 p-4'>
          <h2 className='text-xl'>Welcome to Inventory Dashboard</h2>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-slate-200 w-full h-8 text-center flex items-center justify-center'>
        <p className='text-sm'>© 2025 MediScripts</p>
      </footer>
    </div>
  );
}
