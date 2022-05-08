import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ManageInventories from './components/Manage Inventories/ManageInventories';
import AddNewItem from './components/AddNewItem/AddNewItem';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import MyItems from './components/MyItems/MyItems';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>} />
        <Route path="/product/:productId" element={
          <RequireAuth>
            <ProductDetail />
          </RequireAuth>
        }></Route>
        <Route path="/addItem" element={
          <RequireAuth>
            <AddNewItem />
          </RequireAuth>
        } />
        <Route path="/myItem" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
