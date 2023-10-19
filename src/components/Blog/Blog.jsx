import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa'
const Blog = ({ props, handleAddToBookMark,handleMarkAsRead }) => {
    // console.log(props);
    const { title, cover_img, author_img, read_time, author_name, posted_date, hashtags ,id} = props;
    // console.log(id)
    return (
        <div>
            <img className='w-full h-[500px]' src={cover_img} alt="" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <img className='h-[80px] w-[80px] rounded-full' src={author_img} alt="" />
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold '>{author_name}</h1>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex items-center'>
                    <p>{read_time} minutes</p>
                    <button onClick={()=>handleAddToBookMark(props)} className='ml-2 focus:text-red-700'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>{
                hashtags.map((tag, idx) => <span key={idx} className='mx-1'><a href="">{tag}</a></span>)
            }</p>
            <button onClick={()=>handleMarkAsRead(read_time,id)} className='mt-10 text-indigo-600  font-bold border-b-2 border-indigo-600'>mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    props: PropTypes.object.isRequired,
    title: PropTypes.any,
    cover_img: PropTypes.any,
    author_img: PropTypes.any,
    read_time: PropTypes.any,
    author_name: PropTypes.any,
    posted_date: PropTypes.any,
    hashtags: PropTypes.any,
    tag: PropTypes.any,
    handleAddToBookMark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,
    id:PropTypes.number
}
export default Blog;