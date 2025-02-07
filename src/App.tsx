import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/common/MainLayout';
import MainPage from './pages/MainPage';
import UploadStory from './pages/UploadStory';
import Header from './components/common/Header';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import StoryListPage from './pages/StoryListPage';
import StoryDetailPage from './pages/StoryDetailPage';
import EpisodeDetailPage from './pages/EpisodeDetailPage';

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
            <Route path='/stories' element={<StoryListPage />} />
            <Route path='/stories/upload' element={<UploadStory />} />
            <Route path='/stories/:storyId' element={<StoryDetailPage />} />
            <Route path='/episodes/detail/:episodeId' element={<EpisodeDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;