import './App.css'
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
      <div>
      <NavBar />
      {/* Rest of my app components */}
    </div> 
      {/*<CategoryList category={categoryList} /> */ }


    </>
  )
}

export default App