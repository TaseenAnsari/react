import './App.css';
import Header from './form';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {
  return (
    <>
      <Header name={props.time} />
    </>
    
  );
}

export default App;
