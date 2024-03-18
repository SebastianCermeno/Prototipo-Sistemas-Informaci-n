import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from 'LandingPage';
import SearchPage from 'SearchPage';
import ClubDetails from 'ClubDetails';
import Login from 'Login';
import Register from 'Register';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/Landing" element={<LandingPage />} />
				<Route path="/Search" element={<SearchPage />} />
				<Route path="/Club/:id" element={<ClubDetails />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Register" element={<Register />} />
			</Routes>
		</Router>
	);
}
