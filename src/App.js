import { Routes, Route, Link } from 'react-router-dom'
import { Pricing } from './components/Pricing'
import { About } from './components/About'
import { Features } from './components/Features'
import { Product } from './components/Product'
import './App.css'
function App() {
  return (
    <>
    <div className='content-header'>
      <div className='menu-list'>
        <div>
          <h3>SNGR</h3>
        </div>
        <div>
          <nav>
            <ul style={{display:"flex"}}>
              <li>
                <Link style={{color:'black', fontSize:'15px'}} to='/'>Product</Link>
              </li>
              <li>
                <Link style={{color:'black', fontSize:'15px'}} to='/features'>Features</Link>
              </li>
              <li>
                <Link style={{color:'black', fontSize:'15px'}} to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link style={{color:'black', fontSize:'15px'}} to='/about'>About us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='btn-group'>
        <div className='box-login'>
          <button>Login</button>
        </div>
        <div className='box-get'>
          <button>Get started for free</button>
        </div>
      </div>
    </div>
      <Routes>
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  )
}

export default App