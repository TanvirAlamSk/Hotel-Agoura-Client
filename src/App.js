import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Carousel from './component/Carousel/Carousel';
import WelcomeSection from './component/WelcomeSection/WelcomeSection';
import Rooms from './pages/Rooms/Rooms';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
