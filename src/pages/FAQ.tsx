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
            question: "What is Zen Street?",
            answer: "Zen Street is a business built on the backa of an expert team with a combined 50+ years of experience in stocks and crypto trading, real estate, private funding and block chain technology, to help people with a low startup capital take advantage of opportunities in any of these markets with low risk and reasonable returns."
         },
         {
            question: "What does Zen Street do?",
            answer: "Zen street is a crowd financing platform that enables investors with low capital to reap steady low risk returns in the markets within which Zen Street experts operate. "
         },
         {
            question: "How long has Zen Street  been working?",
            answer: "Zen street has been running for 2 years now within a closed circle of contributors and only recently put up a website to be able to do more than crowd financing and also automate more."
         },
         {
            question: "How do I participate?",
            answer: "You can participate simply by funding your Zenstreet wallet and from there financing projects you feel at home with and then at the end of the term of the project, collect your returns."
         },
         {
            question: "How do I make a deposit?",
            answer: "Simply fund the wallet address provided on the dashboard and it will reflect in your balances a few moments later. From this wallet you can fund projects as you wish."
         },
         {
            question: "How do I make a withdrawal?",
            answer: "Simply make a request for withdrawal and your withdrawal is made to the wallet you funded from."
         },
         {
            question: "Is my money tied down on Zen Street?",
            answer: "No. You always have access to funds on your dashboard and you can withdraw at any time. However, funds that have been used to finance a project remain locked away till the term of the project is complete then you receive your capital and interest."
         },
         {
            question: "Can I sell my stake in a project at any time?",
            answer: "No, for now you can not. You can only wait till the end of the project term. However this feature will be considered along the way so users can sell their positions to other users short of the full interest rate and have their capital back with some interest. But for now, it is not possible."
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
    }, [faqs.length])
    

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
                        <div style={{ maxHeight: `${!openDropdown[i]  ? "0" : "500px"}`, height: "0 !important",  transition: `${openDropdown[i]  ? "max-height linear 1.5s" : "max-height linear 1s"} `}}> 
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