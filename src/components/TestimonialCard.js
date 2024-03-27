import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const TestimonialCard = (props) => {
    let review = props.review;
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=' relative md:absolute md:left-7 md:-top-[5rem]'>
                <img src={review?.image?.url} alt="" className='aspect-square rounded-full object-cover w-[140px] h-[140px] z-40 sticky' />
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-30 left-[10px]'>
                </div>
            </div>
            <div className='font-bold text-lg md:text-2xl tracking-wider capitalize'>
                {review?.name}
            </div>
            <div className='text-violet-300 uppercase text-sm'>
                {review?.position}
            </div>
            <div className='text-violet-400 w-fit mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='text-center text-slate-500 mt-4 '>
                {review?.review}
            </div>
            <div className='text-violet-400 w-fit mx-auto mt-5'>
                <FaQuoteRight />
            </div>

        </div>
    )
}

export default TestimonialCard;
