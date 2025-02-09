import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/common/MainLayout';
import MainPage from './pages/MainPage';
import StoryUploadPage from './pages/StoryUploadPage';
import Header from './components/common/Header';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import StoryListPage from './pages/StoryListPage';
import StoryDetailPage from './pages/StoryDetailPage';
import EpisodeDetailPage from './pages/EpisodeDetailPage';
import ErrorPage from './pages/ErrorPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import CharacterUploadPage from './pages/CharacterUploadPage';
import EpisodeUploadPage from './pages/EpisodeUploadPage';

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
            <Route path='/stories/upload' element={<StoryUploadPage />} />
            <Route path='/stories/detail/:storyId' element={<StoryDetailPage />} />
            <Route path='/episodes/detail/:episodeId' element={<EpisodeDetailPage />} />
            <Route path='/episodes/upload' element={<EpisodeUploadPage />} />
            <Route path='/characters/detail/:characterId' element={<CharacterDetailPage />} />
            <Route path='/characters/upload' element={<CharacterUploadPage />} />
            <Route path='/*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;