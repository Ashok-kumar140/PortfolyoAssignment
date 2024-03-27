import React, {useState } from 'react'
import TestimonialCard from './TestimonialCard';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const Testimonial = (props) => {

    let reviews = props.testimonial;
    const [index, setIndex] = useState(0);

    const handleLeftbtn = () => {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }

    }

    // useEffect(() => {

    // setInterval(() => {
    //     handleRightbtn();
    // }, 3000)
    // }, [index])


    const handleRightbtn = () => {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    return (

        <div className="flex flex-col min-w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200">
            <div className='text-center '>
                <h1 className='text-4xl font-bold'>
                    Our Testimonials
                </h1>
                <div className='bg-violet-400 h-[4px] w-1/2 mt-1 mx-auto'></div>

            </div>

            <div>
                <div className='w-[85vw] md:w-[700px] bg-white mt-10 shadow-md hover:shadow-xl rounded-md transition-all duration-700 flex flex-col justify-center items-center p-10 relative'>
                    <TestimonialCard review={reviews[index]} />
                    <div>

                        <div className='flex text-3xl mt-5 gap-3 text-violet-400  font-bold  justify-center items-center'>
                            <FaAngleLeft className='cursor-pointer hover:text-violet-500' onClick={handleLeftbtn} />
                            <FaAngleRight className='cursor-pointer hover:text-violet-500' onClick={handleRightbtn} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Testimonial;
