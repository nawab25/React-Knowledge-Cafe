import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
//state for making bookmarks
const [bookmarks, setBookmarks] = useState([])
const [readingTime, setreadingTime] = useState(0)

//handle bookmarks
const handleBookmarks = blog => {
  const newBlogs = [...bookmarks, blog]
  setBookmarks(newBlogs)
}
//handle reading time
const handleReadingTime = (time, id) => {
  setreadingTime(readingTime + time)
  //remove bookmarks
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks)
}

  return (
    <>
    <Header></Header>
    <main className='flex flex-col gap-10 md:flex-row container mx-auto px-5 md:px-10 mt-10'>
    <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </main>
    </>
  )
}

export default App
