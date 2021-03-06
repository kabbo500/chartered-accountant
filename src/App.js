import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/Navbar/About/About';
import Blogs from './pages/Navbar/Blogs/Blogs';
import Checkout from './pages/Navbar/Checkout/Checkout';
import Login from './pages/Navbar/Login/Login';
import RequireAuth from './pages/Navbar/Login/RequireAuth/RequireAuth';
import Register from './pages/Navbar/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header
      ></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
