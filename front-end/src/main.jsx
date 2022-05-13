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
import { CreatePoll } from './components/createPoll/createPoll';
import { RegisterCandidate } from './components/registerCandidate/registerCandidate';
import { ResultPoll } from './components/resultPoll/resultPoll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/accessPoll' element={<AccessPoll />}></Route>
      <Route path='/createPoll' element={<CreatePoll />}></Route>
      <Route path='/registerCandidate' element={<RegisterCandidate />}></Route>
      <Route path='/resultPoll' element={<ResultPoll />}></Route>
    </Routes>
  </BrowserRouter>
)
