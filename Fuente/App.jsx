import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './Componentes/NavigationBar.jsx';
import LandingPage from './Páginas/LandingPage.jsx';
import SearchPage from './Páginas/SearchPage.jsx';
import ArcaUNIMET from './Páginas/Agrupaciones/ArcaUNIMET.jsx';
import CHEMECar from './Páginas/Agrupaciones/Chem-E-Car.jsx';
import MetroMUN from './Páginas/Agrupaciones/MetroMUN.jsx';
// import ClubDetails from 'ClubDetails';
// import Login from 'Login';
// import Register from 'Register';

function App() {
	return (
		<Router>
			<NavigationBar/>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/Search" element={<SearchPage />} />
				<Route path='/ARCA_Unimet' element={<ArcaUNIMET/>} />
				<Route path='/CHEM-E-Car' element={<CHEMECar/>} />
				<Route path='/MetroMUN' element={<MetroMUN/>} />
			</Routes>
		</Router>
	);
}

// Una vez que las páginas estén hechas, reincorporar las Rutas de Nicola
/*  			<Route path="/Club/:id" element={<ClubDetails />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Register" element={<Register />} /> 
*/

export default App