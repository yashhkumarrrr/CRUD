import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Create from './components/create';
import Update from './components/update';
import Feedback from './components/feedback';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/update' element={<Update />}></Route>
            <Route exact path='/create' element={<Create />}></Route>
            <Route exact path='/feedback' element={<Feedback />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;