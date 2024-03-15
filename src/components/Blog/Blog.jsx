import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";
const Blog = ({ blog, handleBookmarks }) => {
    const { cover_img, title, author_img, reading_time, author, posted_time, hashtags } = blog;
    return (
        <div className='border-b-2 pb-6 mb-8'>
            <div className='mb-4 w-full'>
                <img className='w-full' src={cover_img} alt="" />
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                    <div>
                        <img src={author_img} alt={`image from ${title}`} />
                    </div>
                    <div>
                        <h3 className='tex-4xl font-extrabold'>{author}</h3>
                        <p>{posted_time}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p>{reading_time} min read</p>
                    <button onClick={()=> handleBookmarks(blog)} href="" className='text-2xl'>
                        <IoBookmarks></IoBookmarks>
                    </button>
                </div>
            </div>
            <h2 className='mt-4 font-extrabold text-4xl'>{title}</h2>
            <div className='mt-5 text-gray-500'>
                {
                    hashtags.map((hash, idx) => <span className='mr-3' key={idx}><a href="#">#{hash}</a></span>)
                }
            </div>
            <p className='mt-4 text-[blue] font-medium underline'><a href="#">Mark as read</a></p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired
}
export default Blog;