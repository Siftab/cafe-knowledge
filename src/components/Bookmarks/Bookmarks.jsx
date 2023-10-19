
import PropTypes from 'prop-types'
import Bookmark from '../../BookMark/Bookmark';
const Bookmarks = ({props,readingTime}) => {
    return (
        <div className='w-1/3 p-5'>
           <div className=''> <h1 className="text-2xl px-12 py-5 text-indigo-700 border-indigo-700 border-2 rounded-3xl bg-indigo-100 font-semibold ">Reading time: {readingTime} min</h1></div>
            <h1 className='text-3xl'>Bookmarks Blog: {props.length}</h1>

            <div className='bg-neutral-400 p-4 rounded-2xl'>
                {
                    props.map((bookmark,idx)=><Bookmark props={bookmark} key={idx}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    props:PropTypes.array.isRequired,
    length:PropTypes.any,
    readingTime:PropTypes.number,map:PropTypes.func
}

export default Bookmarks;