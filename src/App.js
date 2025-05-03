import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import ConnectionDetails from './Components/ConnectionDetails';
import AcademicHistory from './Components/AcademicHistory';
import './Style/App.css';
import './Style/TopBar.css';
import './Style/MainGrid.css';
import './Style/TopBar.css';

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
