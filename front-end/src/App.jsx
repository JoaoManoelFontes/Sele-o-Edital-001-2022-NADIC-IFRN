import './App.css';
import { Form } from './components/homeForm/form';

function App() {
  
  return (
      <main className="main">
        <div className='title'>
          <h1 className="display-3">Eleições</h1>
          <h1 className="display-3">Nadic</h1>
        </div>
        <div>
          <Form />
        </div>
      </main>
  )
}

export default App
