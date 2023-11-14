import React from 'react'

import { RiBox3Line } from "react-icons/ri"

const Options = () => {
    return (
        <>
            <section className='options mt-28'>
                <div className='options-texts w-full text-center'>
                    <RiBox3Line size={40} className='w-full text-center text-btns' />
                    <h1 className='text-3xl font-bold text-white pt-6'>Why Hack The Box?</h1>
                    <p className='text-xl text-gray-400 pt-2'>Upskilling cyber superhumans since 2017.</p>
                </div>
                <div className='flex md:w-full justify-center text-center mt-14'>
                    <div className='options-cards block md:flex md:justify-center space-y-4 lg:space-y-0 md:space-x-8 w-5/6'>
                        <div className='options-card bg-gray-800 rounded-md text-center md:w-1/3 pb-8'>
                            <img className='options-img block justify-center' src='./images/why-1.png' />
                            <h1 className='options-head text-2xl text-white font-bold pt-6'>Top-quality content</h1>
                            <p className='options-p text-gray-400 text-lg pt-3'>Created by hackers for hackers</p>
                        </div>
                        <div className='options-card bg-gray-800 rounded-md text-center md:w-1/3 pb-8'>
                            <img className='options-img block justify-center' src='./images/why-2.png' />
                            <h1 className='options-head text-2xl text-white font-bold pt-6'>Engaging & gamified</h1>
                            <p className='options-p text-gray-400 text-lg pt-3'>Learn by doing, learn by playing</p>
                        </div>
                        <div className='options-card bg-gray-800 rounded-md text-center md:w-1/3 pb-8'>
                            <img className='options-img block justify-center' src='./images/why-3.png' />
                            <h1 className='options-head text-2xl text-white font-bold pt-6'>Hacking community</h1>
                            <p className='options-p text-gray-400 text-lg pt-3'>Anyone can learn, from zero to hero</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-center text-center mt-8'>
                    <div className='options-box w-5/6 border border-gray-800 py-5'>
                        <h1 className='box-head block text-center text-4xl font-bold py-3 text-btns'>2.3m members!</h1>
                        <p className='text-white text-lg'>
                            Be part of the <a className='text-btns underline'>HTB community.</a>  Get involved.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Options