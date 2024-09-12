import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Navbar'
import 'flipdown/dist/flipdown.css'
import UserLogin from './pages/UserLogin'
function App() {
  

  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
