import React from 'react';
import driveLogo from '../../media/Google-Drive-Logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import '../../styles/Header.css'

const index = ({photo}) => {
  return (
    <div className='header'>
    
    {/* this is left top portion of file representing logo */}
      <div className="header_logo">
          <img src={driveLogo} alt="" />
          <span>Drive</span>
      </div>
      
     {/* this section for search bar and its icons */}
      <div className="header_searchContainer">
        <div className="header_searchBar">
            <SearchIcon />
            <input type="text" placeholder='Search in Drive' />
            <ExpandMoreIcon />      
        </div>
      </div>

      {/* this section for header icons of right top side */}
      <div className="header_icons">
          <span>
             <HelpOutlineIcon />
             <SettingsIcon />
          </span>

          <AppsIcon/>  
          <img src={photo} alt="" />
          
      </div>
    </div>
  );
}

export default index; 
