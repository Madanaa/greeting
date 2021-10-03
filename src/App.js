
import './App.css';
import Welcome from './components/welcome';
const App = () => {
  let name = "Madan";
  return (
    <Welcome name={name} />
  )
}

export default App;
