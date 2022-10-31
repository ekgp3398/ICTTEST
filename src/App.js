import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Question from './components/Option/Option'
import Result from './components/Result/Result'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/Question" element={<Question />}/>
                <Route exact path="/result/:club" element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
