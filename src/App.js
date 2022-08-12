import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Tour from "./Pages/Tour";
import Over from "./Pages/Over";
function App() {
  return (
  <div>
    <Router>
    <Routes>
      <Route path ="/" element ={<Main/>}></Route>
      <Route path="/Tour" element={<Tour />}></Route>
      <Route path="/Over" element={<Over />}></Route>
    </Routes>
    </Router>
  </div> 

  );
}

export default App;