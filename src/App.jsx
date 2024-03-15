import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
//state for making bookmarks
const [bookmarks, setBookmarks] = useState([])
//handle bookmarks
const handleBookmarks = blog => {
  const newBlogs = [...bookmarks, blog]
  setBookmarks(newBlogs)
}
  return (
    <>
    <Header></Header>
    <main className='flex flex-col gap-10 md:flex-row container mx-auto px-5 md:px-10 mt-10'>
    <Blogs handleBookmarks={handleBookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </main>
    </>
  )
}

export default App
