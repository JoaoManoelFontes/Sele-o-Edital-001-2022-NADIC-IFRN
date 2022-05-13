import './App.css';
import { Form } from './components/homeForm/form';

function App() {
  
  return (
      <main className="main">
        <div className='title'>
          <h1 className="display-3">Eleições <br/> Nadic</h1>
        </div>
        <div>
          <Form />
        </div>
      </main>
  )
}

export default App
