import Bookmark from "../Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-full md:w-1/3">
            <div className="p-5 mb-5 bg-blue-100 border-2 border-blue-400 rounded-xl">
                <h1 className="text-blue-500 text-lg font-bold text-center">Spent time on read: {readingTime} min</h1>
            </div>
            <div className="bg-slate-100 p-5 rounded-2xl">
                <h1 className="text-center text-xl font-bold pb-5">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.id}
                        bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;