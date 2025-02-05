import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import MainLayout from './components/common/MainLayout';
import MainPage from './pages/MainPage';
import UploadStory from './pages/UploadStory';
import Header from './components/common/Header';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard'
  },
  palette: {
    primary: {
      main: '#d1b536', // 기본 primary 색상
    },
    // primary: {
    //   main: '#1976d2', // 기본 primary 색상
    // },
    secondary: {
      main: '#dc004e', // 기본 secondary 색상
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className='App'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<MainPage />} />
              <Route path='/story/upload' element={<UploadStory />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </ThemeProvider>
  );
}

export default App;