import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

let styles = {
  height: '40%',
  width: '100%',
  background:'hsl(195deg, 20%, 86%)',
  position: 'fixed',
  bottom: '0'
};

function App() {
  return (
    <>
      <div style={styles}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
