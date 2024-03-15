import Bookmark from "../Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="w-full md:w-1/3 bg-slate-100 p-5 rounded-2xl">
            <h1 className="text-center text-xl font-bold pb-5">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default Bookmarks;