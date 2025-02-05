import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/common/MainLayout';
import MainPage from './pages/MainPage';
import UploadStory from './pages/UploadStory';
import Header from './components/common/Header';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/story/upload' element={<UploadStory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;