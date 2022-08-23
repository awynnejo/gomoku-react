import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import './index.css';



export default function App() {
  return (
    <>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/game'>Game</Link></li>
          <li><Link to='/gamelog'>GameLog</Link></li>
          <li><Link to='/games'>Games</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <hr />
        <Main />
      </div>
    </>
  )
};




/* class Main extends Component {
 *   render() {
 *     return (
 *       <Router>
 *         <div className="flex-column app-frame">
 *           <div className='flex-row align-center header container'>
 *             <Link to="/">Gomoku</Link>
 *           </div>
 *         </div>
 *         <div className="flex flex-row app-main">
 *           <div className="flex-column sidebar container">
 *             <Link to="/login">Login</Link>
 *             <Link to="/game">Game</Link>
 *             <Link to="/games">Games</Link>
 *             <Link to="/game-log">GameLog</Link>
 *           </div>
 *           <div className="app-body flex">
 *             <Switch>
 *               <Route path='/' component={Home} />
 *             </Switch>
 *         </div>
 *       </Router>
 *
 *     );
 *   }
 * }
 *  */
