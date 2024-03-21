import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './Componentes/NavigationBar.jsx';
import LandingPage from './Páginas/LandingPage.jsx';
// import SearchPage from 'SearchPage';
// import ClubDetails from 'ClubDetails';
// import Login from 'Login';
// import Register from 'Register';

function App() {
	return (
		<Router>
			<NavigationBar/>
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</Router>
	);
}

// Una vez que las páginas estén hechas, reincorporar las Rutas de Nicola
/* 				<Route path="/Search" element={<SearchPage />} />
				<Route path="/Club/:id" element={<ClubDetails />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Register" element={<Register />} /> 
*/

export default App