import React from 'react'

import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

import articles from "./../data1.json"

const Carousel = () => {

    return (
        <>
            <section className='carousel mt-16 pt-16 bg-gray-800'>
                <div className='flex w-full justify-center'>
                    <div className='carousel-title flex justify-between w-5/6'>
                        <div className='carousel-head'>
                            <h1 className='text-2xl lg:text-4xl text-white font-bold'>Loved by hackers.</h1>
                            <h1 className='text-2xl lg:text-4xl text-white font-bold'>Trusted by enterprises.</h1>
                        </div>
                        <div className='carousel-icons flex justify-end space-x-3 items-center'>
                            <RiArrowDropLeftLine size={6} className='w-10 h-11 bg-white font-light rounded-md text-gray-600 cursor-pointer' />
                            <RiArrowDropRightLine size={4} className='w-10 h-11 bg-white font-light rounded-md text-gray-600 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='block lg:flex w-full lg:justify-center mt-10'>
                    <div className='carousel-articles px-20 lg:grid lg:grid-cols-3 lg:gap-2 space-y-3 lg:space-y-0'>
                        {
                            articles.articles.map(item => (
                                <div className='w-full'>
                                    <div className='carousel-article border border-gray-800 rounded-md bg-gray-900 p-12' id={item.id}>
                                        <p className='carousel-text text-gray-300 text-justify pb-7'>{item.text}</p>
                                        <img alt={item.alt} src={item.image} className='block w-20 h-14' />
                                        <p className='text-gray-400'><span className='text-white'>Alexis Lingad</span> Information Security Analyst</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carousel;