import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App container-fluid d-flex row justify-content-start align-content-center">
      <Header />
      <div className="card m-5 col-6" style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
            height: 200
            
        }}>
        <div className="card-body d-flex justify-content-start">
          <h3 className="card-title">Card title</h3>
          
        </div>
      </div>
    </div>
  );
}

export default App;
