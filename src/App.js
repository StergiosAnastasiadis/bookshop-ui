import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className='contentPaper'>
        {/* <Header /> */}
        <Routes>
          {/* <Route path='/' element={
            <MainComponent />
          } /> */}
          {/* <Route path='/sign-in' element={<SignIn />} /> */}
          {/* <Route path='/sign-up' element={<SignUp />} /> */}
          {/* <Route path='/profile' element={<AuthGuard><Profile /></AuthGuard>} /> */}
          {/* <Route path='/admin-panel' element={<AuthGuard><AdminPage /></AuthGuard>} /> */}
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
