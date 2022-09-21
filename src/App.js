import logo from './logo.svg';
import './App.css';
import './components/assets/fonts/fontcss.css'
import MainScreen from './components/screens/MainScreen';
import MainRouter from './components/routers/MainRouter';

function App() {
  return (
    <div className="App">
      <MainRouter/>
    </div>
  );
}

export default App;
