import { Main } from './Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ChicagoCitationForm } from './Citation';
import { Search, Resumes, Assistance } from './Search';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/cites/manual' element={<ChicagoCitationForm/>}/>
        <Route path='/search/engine' element={<Search/>}/>
        <Route path='/search/resumes' element={<Resumes/>}/>
        <Route path='/search/assistance' element= {<Assistance/>}/>
      </Routes>
  </div>
  );
}

export default App;
 