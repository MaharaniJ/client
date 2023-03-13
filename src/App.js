import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header/Header";
import AddQuestion from "./Components/AddQuestion/AddQuestion";
//import ViewQuestion from "./Components";
import ViewQuestion from './Components/Homepage';
import Auth from "./Components/Auth";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout, selectUser } from "./feature/userSlice";
// import { useEffect } from "react";
// import { auth } from "./firebase"; Navigate,

function App() {
 
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route  path="/auth" element={<Auth />} />
          <Route  path="/" element={<Homepage />} />
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route  path="/question" element={<ViewQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
