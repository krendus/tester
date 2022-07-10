import React, { useState } from 'react'
import userIcon from '../assets/user.svg'
import { DocIcon, ReferIcon, SecurityIcon, SettingsIcon, SubscribeIcon, TransactionIcon } from '../assets/icons'
const TopNav = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='h-[70px] w-full bg-[#f2f8fd] fixed top-0 flex justify-end items-center px-8 pt-[70px]'>
        <div className='flex items-center cursor-pointer h-16 absolute top-0' onClick={() => setShow(true)}>
            <span className='text-[#0071ce] pr-1 font-medium'>Username</span>
            <img src={userIcon} alt="user" />
        </div>
        <div className={`max-w-sm min-w-[250px] shadow w-screen absolute min-h-screen max-h-screen bg-white pt-16 py-6 top-0 ${show ? "right-0" : "-right-[400px]"} transition-all ease-linear duration-300 overflow-y-scroll`}>
            <div className='flex justify-between h-14 items-center px-7 fixed max-w-sm min-w-[250px] w-screen top-0 bg-white'>
                <span className='text-[#0071ce] font-medium text-lg'>Username</span>
                <span onClick={() => setShow(false)} className='cursor-pointer'>close</span>
            </div>
            <div className='flex mt-2 items-center px-7'>
                <img src={userIcon} alt="" className='h-[90px]'/>
                <div className='pl-2 w-full flex flex-col items-center'>
                    <p className='text-sm text-[#3f4254] text-center'>Investor style: <strong>Conservative</strong></p>
                    <button className='rounded-[5px] bg-[#0071ce] font-bold w-4/5 h-12 text-white mt-1'>Sign Out</button>
                </div>
            </div>
            <div className='pt-8'>
                <a href="/" className="group flex px-7 items-center text-[#ff7f30] py-3 hover:bg-[#0071ce] hover:text-white">
                    <SettingsIcon/>
                    <span className='pl-2 text-[#434658] group-hover:text-white'>Settings</span>
                </a>
                <a href="/" className="group flex px-7 items-center text-[#ff7f30] py-3 hover:bg-[#0071ce] hover:text-white">
                    <SecurityIcon/>
                    <span className='pl-2 text-[#434658] group-hover:text-white'>Security</span>
                </a>
                <a href="/" className="group flex px-7 items-center text-[#ff7f30] py-3 hover:bg-[#0071ce] hover:text-white">
                    <DocIcon/>
                    <span className='pl-2 text-[#434658] group-hover:text-white'>Investor Information</span>
                </a>
                <a href="/" className="group flex px-7 items-center text-[#ff7f30] py-3 hover:bg-[#0071ce] hover:text-white">
                    <ReferIcon/>
                    <span className='pl-2 text-[#434658] group-hover:text-white'>Referal Promo</span>
                </a>
                <a href="/" className="group flex px-7 items-center text-[#ff7f30] py-3 hover:bg-[#0071ce] hover:text-white">
                    <SubscribeIcon/>
                    <span className='pl-2 text-[#434658] group-hover:text-white'>Subscription</span>
                </a>
                <a href="/" className="group flex px-7 items-center text-[#ff7f30] py-3 hover:bg-[#0071ce] hover:text-white">
                    <TransactionIcon/>
                    <span className='pl-2 text-[#434658] group-hover:text-white'>Transactions</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopNav