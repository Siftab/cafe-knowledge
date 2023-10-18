
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Blogs = () => {
   const [blogs,setBlogs]=useState([]);
   useEffect(()=>{
    fetch('info.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])
   console.log(blogs);
    return (
        <div className='w-2/3'>
            <h1 className="text-5xl">blogs: {blogs.length}</h1>
            <div>
                {}
            </div>
        </div>
    );
};

export default Blogs;