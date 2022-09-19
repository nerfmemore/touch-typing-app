import { useState } from 'react';
import './styles/index.scss';
import { Header } from './components/header/Header';
import { StartingWindow } from './components/starting/Starting';
import { TypingField } from './components/typingfield/TypingField';
import { Footer } from './components/footer/Footer';


function App() {
  const [ready, setReady] = useState(false);

  return (
    <div className="App">
      <Header />
      {ready ? <TypingField setReady = {setReady}/> : <StartingWindow setReady = {setReady}/>}
      <Footer />
    </div>
  );
}

export default App;
