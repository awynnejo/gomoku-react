import { Routes, Route } from 'react-router-dom';

import Game from './components/Game';
import GameLog from './components/GameLog';
import Games from './components/Games';
import Home from './components/Home';
import Login from './components/Login';
import UserProvider from './components/UserProvider';

const Main = () => {
    return (
        <UserProvider>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/game' element={<Game/>} />
            <Route path='/gamelog' element={<GameLog/>} />
            <Route path='/games' element={<Games/>} />
            <Route path='/login' element={<Login/>} />
            </Routes>
        </UserProvider>
    );
}
export default Main;
