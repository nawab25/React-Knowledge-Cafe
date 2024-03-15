
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const {title} = bookmark;
    return (
        <div className='bg-white p-4 rounded-lg mb-4'>
            <h2 className='font-bold'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;