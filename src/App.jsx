import './App.css';

import ClickAndCollect from './Pages/ClickAndCollect/ClickAndCollect'
import NosBurgers from './Pages/NosBurgers/NosBurgers'
import NosAccompagnements from './Pages/NosAccompagnements/NosAccompagnements'
import NosBoissons from './Pages/NosBoissons/NosBoissons'
import NosDesserts from './Pages/NosDesserts/NosDesserts'
import Recapitulatif from './Pages/Recapitulatif/Recapitulatif'
import Final from './Pages/Final/Final'
import Home from './Pages/Home/Home'
import Template from './Partials/Template/Template'


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
           <Route exact path="/" element={<Home />} />
          <Route exact path="/ClickAndCollect" element={<ClickAndCollect />} />
          <Route exact path="/NosBurgers" element={<NosBurgers />} />
        <Route exact path="/NosAccompagnements" element={<NosAccompagnements />} /> 
        <Route exact path="/NosBoissons" element={<NosBoissons />} /> 
        <Route exact path="/NosDesserts" element={<NosDesserts />} /> 
        <Route exact path="/Recapitulatif" element={<Recapitulatif />} /> 
        <Route exact path="/Final" element={<Final />} /> 
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
