import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Sidebar from "./components/Sidebar"
import Mainpage from "./components/Mainpage"

function App() {
  return (
    <body>
      <div className="mainBox">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="mainContent">
        <Mainpage />
        </div>
      </div>
    </body>
  );
}

export default App;
