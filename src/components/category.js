import React from 'react'

import { RiArrowDropRightLine } from "react-icons/ri";

const Category = () => {

    return (
        <>
            <section className='categories'>
                <div className='lg:grid lg:grid-cols-3'>
                    <div className='category border border-gray-700 text-center cursor-pointer'>
                        <h1 className='category-head text-white hover:text-btns text-4xl font-bold pt-28'>For Business</h1>
                        <p className='text-gray-400 pb-24 pt-3'>1K+ teams upskilled</p>
                        <div className='text-white hover:text-btns text-lg font-bold flex justify-center items-center pb-20'>
                            <a > Get a demo</a>
                            <RiArrowDropRightLine className='hover:text-btns' />
                        </div>
                    </div>
                    <div className='category border border-gray-700 text-center cursor-pointer'>
                        <h1 className='category-head text-white hover:text-btns text-4xl font-bold pt-28'>For Hackers</h1>
                        <p className='text-gray-400 pb-24 pt-3'>2.3m+ hackers trained</p>
                        <div className='text-white hover:text-btns text-lg font-bold flex justify-center items-center pb-20'>
                            <a >Join for Free</a>
                            <RiArrowDropRightLine className='hover:text-btns' />
                        </div>
                    </div>
                    <div className='category border border-gray-700 text-center cursor-pointer'>
                        <h1 className='category-head text-white hover:text-btns text-4xl font-bold pt-28'>For Academia</h1>
                        <p className='text-gray-400 pb-24 pt-3'>961 universities enrolled</p>
                        <div className='text-white hover:text-btns text-lg font-bold flex justify-center items-center pb-20'>
                            <a >Enroll for Free</a>
                            <RiArrowDropRightLine className='hover:text-btns' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category