import './App.css';
import Nav from './components/Nav.js';
import Task from './components/Task.js';
import Timer from './components/Timer.js';

function App() {
  return (
    <div className="App font-custom bg-indigo-400">
      <Nav/>
      <div className="h-screen w-screen flex flex-col items-center" >
        <Timer/>
        <Task/>
      </div>
    </div>
  );
}

export default App;
