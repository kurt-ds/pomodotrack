import './App.css';
import Nav from './components/Nav.js';
import Task from './components/Task.js';
import Timer from './components/Timer.js';

function App() {
  return (
    <div className="App font-custom bg-indigo-400 h-screen">
      <Nav/>
      <Task/>
      <Timer/>
    </div>
  );
}

export default App;
