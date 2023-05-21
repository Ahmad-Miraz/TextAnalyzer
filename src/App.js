import './App.css';

import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-5">
    <TextForm  heading="Enter Text Here to Analyze"/>
    </div>
    </>
  );
}

export default App;