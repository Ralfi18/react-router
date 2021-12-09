import logo from './logo.svg';
// import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LoginPage from "./LoginPage";
import { AuthProvider, RequireAuth } from "./Auth";
import { useAuth, UserConsumer } from "./Auth";
function App() {
	const user = localStorage.getItem('user');
	return (
		<div className="App">
			<AuthProvider user={user || null} >
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
					<Route path="/login" element={<LoginPage />} />
					{/* <Route path="about" element={<About />} /> */}
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
