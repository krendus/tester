import React, { useEffect, useState } from 'react'
interface DynamicType {
    [key: string]: boolean
}
const FAQ = () => {
  const [openDropdown, setOpenDropdown] = useState<DynamicType>({})
  const faqs: {
    question: string;
    answer: string;
    }[] = [
        {
            question: "What is",
            answer: "Ndovu is an online investment platform that provides easy and affordable access to financial markets. Buy a slice of your favourite international companies, right from the comfort of your home. We recognise that investing can be daunting, so if you don't know how to get started, we guide you"
         },
         {
            question: "What is",
            answer: "Ndovu is an online investment platform that provides easy and affordable access to financial markets. Buy a slice of your favourite international companies, right from the comfort of your home. We recognise that investing can be daunting, so if you don't know how to get started, we guide you"
         },
         {
            question: "What is",
            answer: "Ndovu is an online investment platform that provides easy and affordable access to financial markets. Buy a slice of your favourite international companies, right from the comfort of your home. We recognise that investing can be daunting, so if you don't know how to get started, we guide you"
         },
         {
            question: "What is",
            answer: "Ndovu is an online investment platform that provides easy and affordable access to financial markets. Buy a slice of your favourite international companies, right from the comfort of your home. We recognise that investing can be daunting, so if you don't know how to get started, we guide you"
         },
    ]

    const handleDropdownToggle = (i: number) => {
        setOpenDropdown((prevState) => {

            let updated: DynamicType = {...prevState }
            for(let i = 0; i < faqs.length; i ++) {
                updated[i] = false;
            }
            updated = {...updated, [i]: !prevState[i] }
            return updated
        })
    }
    useEffect(() => {
      const initialState: DynamicType = {}
      for(let i = 0; i < faqs.length; i ++) {
        initialState[i] = false;
      }
      setOpenDropdown(initialState)
    }, [])
    

  return (
    <div>
        <h2 className='text-[30px] my-3 text-blue-500 font-bold text-center'>FAQs</h2>
        <div>
            {
                faqs.map((data, i) => (
                    <div key={i} className="border-b-[1px] border-blue-500 overflow-hidden w-4/5 mx-auto box-border">
                        <div onClick={() => handleDropdownToggle(i)} className="cursor-pointer pt-5 pb-2 flex justify-between">
                            <h3 className='text-xl text-[#222] font-semibold'>{data.question}</h3>
                            <div className='flex h-8 w-8 justify-center items-center'>
                                <span className='block absolute h-[2px] w-4 bg-black'></span>
                                <span className={`block absolute h-[2px] w-4 bg-black transition-all ease-linear duration-300 ${!openDropdown[i]  ? "rotate-90" : "rotate-0"}`}></span>
                            </div>
                        </div>
                        <div style={{ maxHeight: `${!openDropdown[i]  ? "0" : "500px"}`, height: "0 !important",  transition: `${openDropdown[i]  ? "max-height linear 2s" : ""} `}}> 
                            <p className="pb-2 text-lg text-[#444]">{data.answer}</p>
                        </div>
                    </div>
                ))
               
            }
        </div>
    </div>
  )
}

export default FAQ