import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import EditBookPage from './components/EditBookPage/EditBookPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='contentPaper'>
        <Header />
        <Routes>
          {/* <Route path='/' element={
            <MainComponent />
          } /> */}
          {/* <Route path='/sign-in' element={<SignIn />} /> */}
          {/* <Route path='/sign-up' element={<SignUp />} /> */}
          {/* <Route path='/profile' element={<AuthGuard><Profile /></AuthGuard>} /> */}
          {/* <Route path='/admin-panel' element={<AuthGuard><AdminPage /></AuthGuard>} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/edit-book/:id' element={<EditBookPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
