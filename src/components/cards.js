import React from 'react'

import { RiArrowDropRightLine } from "react-icons/ri"

const Cards = () => {
    return (
        <>
            <div className='flex w-full justify-center mt-10'>
                <div className='intro-cards-one mt-7 block lg:flex space-y-5 lg:space-y-0 lg:space-x-5 lg:w-1/2'>
                    <div className='intro-card bg-gray-800 cursor-pointer'>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
                            <img alt='bg-hero2' className="w-full" src="/images/bg-hero.png" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-2 text-white">For Business</div>
                                <p className="text-gray-400 text-base">One solution for Developing cybersecurity skills across your entire IT team</p>
                            </div>
                            <div className='flex justify-center text-center items-center text-white hover:text-btns'>
                                <button className='px-4 py-4 rounded-lg text-center text-xl font-bold'>Get a Demo</button>
                                <span><RiArrowDropRightLine size={20} /></span>
                            </div>
                        </div>
                    </div>
                    <div className='intro-card bg-gray-800 cursor-pointer'>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
                            <img alt='bg-hero2' className="w-full" src="/images/bg-hero.png" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-2 text-white">For Hackers</div>
                                <p className="text-gray-400 text-base">A unified suite of hacking experiences - from beginners to seasoned professionals</p>
                            </div>
                            <div className='flex justify-center text-center items-center text-white hover:text-btns'>
                                <button className='px-4 py-4 rounded-lg text-center text-xl font-bold'>Join for free</button>
                                <span><RiArrowDropRightLine size={20} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='intro-cards-two block lg:flex lg:justify-center mt-10'>
                <div class="lg:flex block bg-gray-800 lg:w-1/2 mx-10 lg:mx-0">
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                        <img alt='bg-hero' src='./images/bg-hero.png' />
                    </div>
                    <div class="rounded-b p-4 flex flex-col justify-between">
                        <div class="mb-8">
                            <div class="text-white font-bold text-3xl mb-2">For Universities</div>
                            <p class="text-gray-400 text-base">A hug library of educational content to help your students put theory into practice</p>
                        </div>
                        <div className='flex justify-start items-center text-white hover:text-btns'>
                            <button className='py-2 rounded-lg text-center text-xl font-bold'>Enroll for free</button>
                            <span><RiArrowDropRightLine size={20} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards