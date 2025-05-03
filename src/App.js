import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <main className="content-grid">
        <ConnectionDetails />
        <AcademicHistory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
