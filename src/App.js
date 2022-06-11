import './App.css';
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Footer from './components/Footer/Footer';
import SideDrawer from './components/SiderDrawer/SideDrawer';
import { useSelector } from 'react-redux';

function App() {
  const sideDrawer = useSelector(state => state.uiReducer.isDrawer)
  return (
    <div className="App">
      {sideDrawer && <SideDrawer />}
      <Navbar />
      <hr className='mb-4' />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='addUser' element={<AddUser />} />
        <Route path='updateUser/:id' element={<UpdateUser />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
