import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App'
import AccessPoll from './components/accessPoll/accessPoll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/accessPoll' element={<AccessPoll />}></Route>
    </Routes>
  </BrowserRouter>
)
