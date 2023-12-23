import './App.css'
import AdList from './components/AdList'
import CategoryCard from './components/CategoryCard'
import CategoryList from './components/CategoryList'
import NavBar from './components/NavBar'
import Login from './components/login'
import Register from './components/register'
import { categoryList } from './constants'
import { Category } from './utils/types'


function App() {
  return (
    <>
      {/*<Login/> */ }
      {/*<Register/> */ }
      <div className="app">
      <h1>ads</h1>
      <AdList />
    </div>   


    </>
  )
}

export default App