import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  return (
    <>
    <Header></Header>
    <main className='flex flex-col gap-10 md:flex-row container mx-auto px-5 md:px-10 mt-10'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    </>
  )
}

export default App
