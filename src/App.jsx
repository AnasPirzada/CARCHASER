
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './app/Login/index.jsx';
import Dashboard from './app/Dashboard/AddCard/index.jsx';
import Stepper from './app/Dashboard/index.jsx';
import PreviewPAge from './app/Dashboard/StepperConfirmatonPage/index.jsx';

function App ()
{


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Login /> } />
          <Route exact path='/Dashboard' element={ <Dashboard /> } />
          <Route exact path='/Stepper' element={ <Stepper /> } />
          <Route exact path='/PreviewPAge' element={ <PreviewPAge /> } />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
