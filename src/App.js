import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Messages />
    </div>
  );
}

export default App;
