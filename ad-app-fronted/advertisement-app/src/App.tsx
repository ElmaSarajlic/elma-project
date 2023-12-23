import './App.css'
import CategoryList from './components/CategoryList'
import Login from './components/login'
import Register from './components/register'
import { categoryList } from './constants'
import { Category } from './utils/types'

function App() {
  return (
    <>
      {/*<Login/> */ }
      <CategoryList category={categoryList} />      

    </>
  )
}

export default App