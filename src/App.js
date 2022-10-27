import './App.css';
import CardNews from './components/CardNews';
import HeaderNews from './components/Header';
import NavNews from './components/NavNews';
function App() {
  return (
    <div className="App">
      <NavNews />
      <HeaderNews />
      <CardNews />
    </div>
  );
}
export default App;
