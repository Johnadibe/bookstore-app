import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Routes/Books';
import Categories from './components/Routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
