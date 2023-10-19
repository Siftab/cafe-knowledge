import PropTypes from 'prop-types'

const Bookmark = ({props}) => {
    const {title}=props;
    
  return (
    <>
        <div className='bg-slate-200 p-4 m-4 rounded-md'>
            <h3 className='text-2xl '>{title}</h3>
        </div>


    </>
  )
}

Bookmark.propTypes = {
    props:PropTypes.object,
    title:PropTypes.any
}

export default Bookmark