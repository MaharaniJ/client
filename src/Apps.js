import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Sidebar from './Components/Stacksidebar/Sidebar';
import Homepage from './Components/Homepage'
//import Sidebar from './Components/Homepage/Sidebar';
import Index from './Components/Homepage/index.jsx';
import AddQuestion from './Components/AddQuestion';



function App() {
  return (
    <div className="App">
     
      
      {/* <Sidebar></Sidebar>  */}
         <Router>
         <Header />
         <Index /> 
    <Routes>
          <Route path='./' element={<Homepage />} />
          <Route path='/add-question' element={<AddQuestion />}></Route>
            
          
        </Routes>
      </Router>  
      
    
    </div>
  );
}

export default App;








  

    
