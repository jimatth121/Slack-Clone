import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Hello clever programmer let's build the slack clone </h1>
      {/* Header */}
      <Header />
      <div className='app__body'>
      {/* Sidebar */}
      <Sidebar />
      {/* React-Router => Chat Screen */}

      </div>
    </div>
  );
}

export default App;
