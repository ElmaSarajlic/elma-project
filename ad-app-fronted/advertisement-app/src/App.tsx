/*import './App.css'
import AdForm from './components/AdForm'
import AdList from './components/AdList'
import CategoryCard from './components/CategoryCard'
import CategoryList from './components/CategoryList'
import NavBar from './components/NavBar'
import Login from './components/login'
import Register from './components/register'
import { categoryList } from './constants'
import { Category } from './utils/types'
import AdCard from './components/AdCard'
import UserInfo from './components/UserInfo'
import {user} from './constants'
import ChangeUserInfoCard from './components/ChangeUserInfoCard'
import DeleteBtn from './components/DeleteBtn'
import AddSubcategoryForm from './components/AddSubcategoryForm'
import EditButton from './components/EditButton'
import SuccessCard from './components/SuccessCard'



function App() {

 /* const onSave = () => {
    console.log('Changes saved');
  };

  const onCancel = () => {
    console.log('Changes canceled');
  };*/

  /*const handleButtonClick = () => {
    console.log('Button clicked!');
  };*/


  /*return (
    <>
      {/*<Login/> */ /*}
     /* {/*<Register/> */ /*}
     /* {<div className="app">
      <h1>Available ads</h1>
      <NavBar />
      <div className="app">
      <AdList />
    </div>
  </div>   }
  {/*<CategoryList categories={categoryList} />*//*}
  /*{/*<AdForm/>*//*}
  /*{/*<UserInfo user={user}/>*//*}
  {/*<ChangeUserInfoCard user={user} onSave={onSave} onCancel={onCancel} />*/ /*}
    /*{/*<DeleteBtn onDelete={() => console.log("Delete action")}/> */  /*}
       /*{/*<AddSubcategoryForm/>*/ /*}
       /*{/*<EditButton handleClick={handleButtonClick} />*/ /*}
       /*{/*<SuccessCard/>*/ /*}


   /*  </>
  );
}

/*export default App;*/

import { Route, Routes } from "react-router-dom"
import { Home, Login, Register, UserInfo, Categories } from "./pages"
import NavBar from "./components/NavBar"
//import ProtectedRoute from "./utils/ProtectedRoute"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
          <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </>
  )
}

export default App