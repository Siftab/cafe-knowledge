
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
   const [blogs,setBlogs]=useState([]);
   useEffect(()=>{
    fetch('info.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])
//    console.log(blogs);
    return (
        <div className='w-2/3 '>
            <h1 className="text-5xl">blogs: {blogs.length}</h1>
            <div className='space-y-7'>
                {blogs.map((blog,idx)=> <Blog key={idx} handleMarkAsRead={handleMarkAsRead} props={blog} handleAddToBookMark={handleAddToBookMark}></Blog>)}
            </div>
        </div>
    );
};
Blogs.propTypes={
            handleAddToBookMark:PropTypes.func,
            handleMarkAsRead:PropTypes.func
}
export default Blogs;