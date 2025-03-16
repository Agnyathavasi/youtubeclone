import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import TopBar from "./components/topBar";
import LeftBar from "./components/leftBar";
import RightSection from "./components/rightSection";

function App() {
  return (
    <div className="App container-fluid">
      <div className="top">
        <TopBar />
      </div>
      <div className="row mainsection">
        <div className="con left">
          <LeftBar />
        </div>
        <div className="con right">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
