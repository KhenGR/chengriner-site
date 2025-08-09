import { Route,Routes } from 'react-router-dom';
import About from './Pages/About';
import Publications from './Pages/Publications';
import Blog from './Pages/Blog';
import Teaching from './Pages/Teaching';
import ScienceComm from './Pages/ScienceComm';
import PledgetoOpenScience from './Pages/PledgetoOpenScience';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import ConnectionDetails from './Components/ConnectionDetails';
import './Style/App.css';
import './Style/TopBar.css';
import './Style/MainGrid.css';
import { HashRouter as Router} from "react-router-dom";
import "./googlec150876af9e76abe.html"

function App() {
  return (
    <Router>
    <div className="App">
      <TopBar />
      <main className="main-grid">
        <div className="left-section">
          <ConnectionDetails />
        </div>
        <div className="right-section">
        <Routes>
        <Route path='/' element={<About/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/Teaching" element={<Teaching />} />
        {/*<Route path="/Sciencecomm" element={<ScienceComm />} />*/}
       {/*<Route path="/PledgetoOpenScience" element={<PledgetoOpenScience />} />*/}  
       {/*<Route path="/Blog" element={<Blog />} /> */} 
      </Routes>
        </div>
      </main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
