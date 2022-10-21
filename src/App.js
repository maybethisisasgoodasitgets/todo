import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import AddBar from './components/addbar';
import Todolist from './components/todolist';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddBar/>
      <Todolist/>


    </div>
  );
}

export default App;
