import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Main from './Main';
import Tour from "./Pages/Tour";
import Over from "./Pages/Over";
function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Main/>}></Route>
      <Route path="/Tour" element={<Tour />}></Route>
      <Route path="/Over" element={<Over />}></Route>
    </Routes>
    </BrowserRouter>
  </div> 

  );
}

export default App;