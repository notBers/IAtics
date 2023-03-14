import { Main } from './Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ChicagoCitationForm } from './Citation';
import { Search } from './Search';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/cites/manual' element={<ChicagoCitationForm/>}/>
        <Route path='/search' element={<Search/>}/>
      
      </Routes>
  </div>
  );
}

export default App;
 