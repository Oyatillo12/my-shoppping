import './App.css'
import Form from './components/Form'
import List from './components/List'
import Navbar from './components/Navbar'
import CustomRoutes from './routes'
import { useFetchProductsQuery } from './store/produtsApi'

function App() {


  return (
    <>
      <Navbar />
      <CustomRoutes />
    </>
  )
}

export default App
