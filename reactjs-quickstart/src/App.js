// import logo from './logo.svg';
// import './App.css';
import PageNavbar from './components/PageNavbar';
import ListFacts from './components/ListFacts';

function App() {
  return (
    <div>
      <PageNavbar/>
      <ListFacts limit={2}/>
    </div>
  );
}

export default App;
