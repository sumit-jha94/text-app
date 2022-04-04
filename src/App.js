import './App.css';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';

function App() {
  return (
    <>
    <Alert alert = " This is alert" style={{height:'30px'}}/>
    <div className="container" >
      <TextForm Desc = "Hi There"/>
    </div>
    < About />
    </>
  );
}

export default App;
