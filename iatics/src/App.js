import { Main } from './Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ChicagoCitationForm, Googlecitation } from './Citation';
import { Search, Resumes, Assistance } from './Search';
import {ChartGenerator} from './Graphs';
import { Searchmenu } from './SearchMenu';
import { Checker } from './Checker';
import { Citesmenu } from './Citesmenu';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/checker' element={<Checker/>}/>
        <Route path="/search" element={<Searchmenu/>}/>
        <Route path="/cites" element={<Citesmenu/>}/>
        <Route path="/charts" element={<ChartGenerator/>}/>
        <Route path='/cites/manual' element={<ChicagoCitationForm/>}/>
        <Route path='/cites/engine' element={<Googlecitation/>}/>
        <Route path='/search/engine' element={<Search/>}/>
        <Route path='/search/summaries' element={<Resumes/>}/>
        <Route path='/search/assistance' element= {<Assistance/>}/>
      </Routes>
  </div>
  );
}

export default App;
 