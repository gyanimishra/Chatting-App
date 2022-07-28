

import {Routes,Route} from 'react-router-dom'
import Chatroom from './components/Chatroom';
import MainForm from './components/MainForm';

function App() {
  return (
    <div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
     
     <Routes>
      <Route path='/' element={<MainForm/>}></Route>
      <Route path='/chat/:roomname'  element={<Chatroom/>}></Route>
      <Route path='*' element={<h1>404 Not found</h1>} ></Route>




     </Routes>


    </div>
  );
}

export default App;
