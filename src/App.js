import { useState } from 'react';
import './styles/index.scss';
import { Header } from './components/header/Header';
import { StartingWindow } from './components/starting/Starting';
import { TypingField } from './components/typingfield/TypingField';


function App() {
  const [ready, setReady] = useState(false);
  
  return (
    <div className="App">
      <Header />
      {ready ? <TypingField/> : <StartingWindow setReady = {setReady}/>}
    </div>
  );
}

export default App;
