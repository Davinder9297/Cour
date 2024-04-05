import React from 'react'
import Resume from './Resume'
import Companies from '../Companies'
import './hirefromus.css'
import HireTestimonial from './HireTestimonial'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const CareerServices = () => {
  return (
    <>
        <div className=' px-[5%] py-[5%] bg-gradient-to-r from-[#0F2027] to-[#203A43] backgroundsvg'>
            {/* Mainsection */}
            <div className=' flex justify-between pr-[12%]'>
                <div className='w-[55%] flex flex-col gap-16'>
                    <div>
                        <p className='font-pop font-semibold text-[50px] text-white'>Make your career thrive with <span className='text-[#1DBF73]'>Hoping Minds !</span></p>
                    </div>

                    {/* set the color of the border in gradient */}

                        <div className='text-white pl-8'>
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 3,
                                pagination: false,
                                perMove: 1,
                                wheel: false,
                                arrows: false,
                                autoplay: true,
                                interval: 2000,
                                speed: 1500,
                                delay: 4,
                                pauseOnHover: false,
                                drag: true,
                                gap:'4rem',
                            }}>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10' src="../Icons/hireheadicon1.svg" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px]'>Job Placement Guarantee</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10' src="../Icons/hireheadicon2.svg" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px]'>Tailored Curriculum</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px]'>Experienced Instructors</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px]'>Hands-on Projects</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px]'>Industry Partnerships</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px]'>Continuous Support</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px]'>Flexible Learning Options</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <div className='bg-[#00000033] bw-border rounded-xl p-6 text-white flex flex-col gap-4'>
                        <div>
                            <p className='font-int font-bold'>Connect with us!</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium' htmlFor="name">Name</label>
                                <input id='name' className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px]' type="text" placeholder='Enter Your name' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium' htmlFor="pass">Email</label>
                                <input id='pass' className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px]' type="email" placeholder='Enter Your Email' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium' htmlFor="study">Phone No.</label>
                                <input id='study' className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px]' type="text" placeholder='Enter Your Phone No.' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium' htmlFor="time">Degree</label>
                                <input id='time' className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px]' type="text" placeholder='Enter Your Degree' />
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#1DBF73] border-[1px] border-[#808080] rounded-md py-1 font-int font-medium w-full'>Submit</button>
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-int font-medium text-[14px]'>Have Questions?</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <Companies />
        <div className='px-[5%] py-[4%] bg-gradient-to-r from-[#0F2027] to-[#203A43] bottomsvg '>
            <Resume/> 
            <HireTestimonial/>
        </div>
    </>
  )
}

export default CareerServices