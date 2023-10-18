import PropTypes from 'prop-types';

const Blog = ({props}) => {
    // console.log(props);
    const {title,cover_img,author_img,read_time,author_name,posted_date,hashtags}= props;
    console.log(title)
    return (
        <div>
            <img className='w-full h-[500px]' src={cover_img} alt="" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <img className='h-[100px] w-[100px] rounded-full' src={author_img} alt="" />
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold '>{author_name}</h1>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <p>{read_time}</p>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>{hashtags}</p>
        </div>
    );
};
Blog.propTypes={
    props:PropTypes.object.isRequired,
    title:PropTypes.any
}
export default Blog;