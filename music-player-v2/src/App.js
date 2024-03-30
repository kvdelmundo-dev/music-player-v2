import { useState } from 'react';
import Nav from './components/Nav';
import './css/app.css';

function App() {
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
    </div>
  );
}

export default App;
