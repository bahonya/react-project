import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Messages from './components/Messages'

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
