import React from 'react'
import TopNav from '../components/TopNav'
import moneyIcon from '../assets/money.svg'
import coinIcon from '../assets/coin.svg'
import arrowIcon from '../assets/arrow.svg'
import elephantOne from '../assets/elephant-1.svg'
import elephantTwo from '../assets/elephant-2.svg'
import elephantThree from '../assets/elephant-3.svg'
import elephantFour from '../assets/elephant-4.svg'
// import rImage from '../assets/ICIFA.svg'
// import rImage2 from '../assets/CapitalMarketAuthority.svg'
// import rImage3 from '../assets/CommunicationAuthorityOfKenya.svg'
// import rImage4 from '../assets/NairobiSecurityExchange.svg'
const Dashboard = () => {
  return (
    <div className='bg-[#f2f8fd] min-h-screen max-h-screen pt-24 overflow-y-scroll'>
        <TopNav/>
        <div className='px-7'>
          <div className='px-2 py-4 my-2 rounded-md bg-white flex justify-between items-center'>
              <div>
                <h3 className='text-2xl'>Username,</h3>
                <p className='text-[#0071ce]'>Hello and Welcome</p>
              </div>
              <button className='px-5 py-2 bg-[#ff7f30] rounded-md text-white flex cursor-pointer'><img src={moneyIcon} alt="" className='mr-2' /> <span>Invest</span></button>
          </div>
          <div className='flex flex-wrap justify-between'>
            <a href="/" className='flex bg-white rounded-md p-8 flex-auto mr-3 my-3  justify-between'>
              <div>
                <h2 className='text-lg'>Total Portfolio Value</h2>
                <p className='text-[25px] font-medium text-[#0071ce]'>0.0 KES</p>
                <p className='text-sm text-[#0071ce]'>0% profit</p>
              </div>
              <img src={coinIcon} alt="" />
            </a>
            <a href="/" className='flex bg-white rounded-md p-8 flex-auto mr-3 my-3 justify-between'>
              <div>
                <h2 className='text-lg'>Recurring Goal</h2>
                <h2 className='text-lg'>Investment</h2>
                <p className='text-[25px] font-medium text-[#0071ce]'>0.0 KES</p>
                <p className='text-sm text-[#0071ce]'>0% profit</p>
              </div>
              <img src={arrowIcon} alt="" />
            </a>
            <a href='/' className='flex bg-[#0071ce] items-center rounded-md p-8 flex-auto mr-3 my-3 justify-between'>
              <div>
                <h2 className='text-white text-2xl'>Complete</h2>
                <h2 className='text-white text-2xl'>Download</h2>
              </div>
              <img src={elephantOne} alt="" />
            </a>
            <a href='/' className='flex bg-[#0071ce] items-center rounded-md p-8 flex-auto mr-3 my-3 justify-between'>
              <div>
                <h2 className='text-white text-2xl'>Upgrade to</h2>
                <h2 className='text-white text-2xl'>Premium</h2>
                <p className='text-white text-xs'>Planning to save</p>
                <p className='text-white text-xs'>Sh. 100k or more, this is</p>
                <p className='text-white text-xs'>The best plan for you</p>
              </div>
              <img src={elephantTwo} alt="" />
            </a>
            <a href='/' className='flex bg-[#0071ce] items-center rounded-md p-8 flex-auto mr-3 my-3 justify-between'>
              <div>
                <h2 className='text-white text-2xl'>Security</h2>
                <p className='text-white text-xs'>Turn on additional</p>
                <p className='text-white text-xs'>security</p>
              </div>
              <img src={elephantThree} alt="" />
            </a>
            <a href='/' className='flex bg-[#545454] items-center rounded-md p-8 flex-auto mr-3 my-3 justify-between'>
              <div>
                <h2 className='text-white text-2xl'>ZenStreet Learning</h2>
                <h2 className='text-white text-2xl'>Academy</h2>
              </div>
              <img src={elephantFour} alt="" />
            </a>
          </div>
          <div className='pt-11 pb-8 border-t-blue-500 border-t mt-12'>
            <p className='text-[#3f4254]'>ZenStreet is an online platform owned and run by Waanzilishi Capital Limited ("Waanzilishi"). Waanzilishi is licensed by the Capital Markets Authority of Kenya, Institute of Certified Investment and Financial Analysts as an Investment Adviser, and by the Communications Authority as a Business Process Outsourcing firm.</p>
          </div>
          <div className='p-5 border rounded-md mb-10'>
            <h2 className='text-2xl text-[#3f4254] text-center'>Regulated by</h2>
            <div className='flex justify-between py-3 flex-wrap'>
              {/* <img src={rImage} alt="" className='h-[25px] sm:h-[40px] md:h-[75px]'/>
              <img src="" alt="regulator" className='h-[25px] sm:h-[40px] md:h-[75px]'/>
              <img src={rImage3} alt="" className='h-[25px] sm:h-[40px] md:h-[75px]'/>
              <img src={rImage4} alt="" className='h-[25px] sm:h-[40px] md:h-[75px]'/> */}
            </div>
          </div>
          <div className='pb-2'>
            <p className='text-[#0071ce] text-sm sm:text-base'>
              <span className='pr-1'>&copy; 2022 ZenStreet</span>
              |
              <a href="/" className='p-1'>Privacy</a>
              |
              <a href="/" className='p-1'>Legal</a>
              |
              <a href="/" className='p-1'>Contact</a>
            </p>
          </div>
        </div>
    </div>
  )
}

export default Dashboard