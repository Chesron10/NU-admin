import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import SignIn from './pages/SignIn'
import Home from './pages/home'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout/>} >
          <Route path={'/'} element={<Home/>} />
          <Route path={'/signIn'} element={<SignIn/>} />
          <Route path={'/dashboard'} element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App