import AdForm from './components/AdForm'
import './App.css'
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


function App() {
  return (
    <>
      {/*<Login/> */ }
      {/*<Register/> */ }
      {/*<div className="app">
      <h1>Available ads</h1>
      <NavBar />
      <div className="app">
      <AdList />
    </div>
  </div>   */}
  {/*<CategoryList categories={categoryList} />*/}
  {/*<AdForm/>*/  }
  {<UserInfo user={user}/>}


    </>
  )
}

export default App