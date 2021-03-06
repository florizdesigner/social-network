import React from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {BrowserRouter, Route} from "react-router-dom"
import DialogsComponent from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsComponent />} />
                    {/*    // exact - точное выполнение path, если exact нет, то путь /dialogs/text/text/text/... будет тоже верным*/}
                    {/*//при exact - верный путь только /dialogs, в этом случае только отображатеся компонента Dialogs*/}
                    <Route path='/profile' render={() => <Profile /> } />
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;