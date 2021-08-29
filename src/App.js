import React, {useState} from 'react'
import Header from './components/header'
import './App.css';
import Sidebar from './components/sidebar'
import FilesView from './components/FilesView/FilesView';
import SideIcons from './components/sideIcons';
import GDriveLogo from './media/Google-Drive-Logo.png'
import {auth, provider} from './firebase'

function App() {

  const [user, setUser] = useState();

  // const handleLogin = () => {
  //   if(!user){
  //     auth.signInWithPopup(provider).then((result) => {
  //       setUser(result.user)
  //       console.log(result.user)
  //     })
  //   }
  // }

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="App">
     {
       user ? (
         <>
            <Header photo={user.photo}/>
                <div className="app_main">
                    <Sidebar/>
                    <FilesView/>
                    <SideIcons/>
                </div>
          </>
       ) :(
        <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
       )
     }
    </div>
  );
}

export default App;
