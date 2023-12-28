import './App.css';
import Addmovie from './component/Addmovie';
import Description from './component/Description';
import Home from './component/Home';
import Profile from './component/Profile';
import Search from './component/Search';
import Sidebar from './component/Sidebar';
import {BrowserRouter , Routes , Route} from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Sidebar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/add' element={<Addmovie/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/description/:id' 
          element={<Description/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;