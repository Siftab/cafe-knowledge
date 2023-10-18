import Profile from '../../images/profile.png'

const Header = () => {
    return (
      <>  <div className='flex  items-center justify-between border-b-2 border-gray-800 p-4 mx-5'>
      <h1 className='text-4xl font-bold'>Knowladge cafe</h1>
      <div><img className='' src={Profile} alt="" /></div>
     
  </div>
  </>
    );
};

export default Header;