import { Link } from 'react-router-dom';
import '../styles/sidebar.css'
import 'boxicons'
// import { useEffect } from 'react';

const Sidebar = () => {


    return (<div className="sidebar-comp" >
        <img src="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2020/04/17/omtc.jpg?itok=k5LqY7FI" alt="" />
        <div className='nav-links'>
            <Link to="/"><span><box-icon className="nav-a" type='solid' name='home' color="white"></box-icon></span> Home</Link>
            <Link to="/search"><span><box-icon className="nav-a" name='search-alt-2' color="white" ></box-icon></span>     Search</Link>
            <Link to="/add"><span><box-icon className="nav-a" name='camera-movie' type='solid' color="white"></box-icon></span>Addmovies</Link>
            <Link to="/profile"><span><box-icon className="nav-a" name='user-circle' color="white"></box-icon> </span>     Profile</Link>
        </div>
    </div>);
}

export default Sidebar;