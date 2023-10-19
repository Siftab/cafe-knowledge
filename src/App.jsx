
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookMarks,setBookMarks]=useState([]);
const [readingTime,setReadingTime]=useState(0);

const handleAddToBookMark =blog=>{
  
  const newBookmarks=[...bookMarks,blog];
  setBookMarks(newBookmarks);
  console.log(newBookmarks)
}
const handleMarkAsRead =(time,id)=>{
  setReadingTime(readingTime+parseInt(time));
const newBookMarks = bookMarks.filter(bookmark=> bookmark.id!==id)
  setBookMarks(newBookMarks)
}

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        <Bookmarks props={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
