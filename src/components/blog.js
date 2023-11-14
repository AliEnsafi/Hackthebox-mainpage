import React from 'react'

import { RiArrowDropRightLine } from "react-icons/ri";
import blog from "./../data1.json";


const Blog = () => {
    return (
        <section className='blog pt-28 bg-gray-800'>
            <div className='blog-title space-y-3'>
                <h1 className='blog-head text-4xl font-bold text-white block text-center'>Latest from our blog</h1>
                <div className='blog-link flex justify-center items-center text-btns'>
                    <a className='text-lg cursor-pointer'>Read customer stories</a><RiArrowDropRightLine />
                </div>
            </div>
            <div className='blog-cards lg:grid lg:grid-cols-3 lg:gap-4 p-20 space-y-20 lg:space-y-0'>
                {
                    blog.Blog.map(item => (
                        <div className='blog-card space-y-4 cursor-pointer' id={item.id}>
                            <div className='blog-img'><img src={item.image} /></div>
                            <p className='blog-title text-gray-400 text-sm'>{item.title}</p>
                            <p className='blog-text text-xl text-white'>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Blog;