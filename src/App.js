import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Favorite from './pages/Favorite';
import People from './pages/People';
import Company from './pages/Company';
import Setting from './pages/Setting';
import NewPeople from './components/people/NewPeople';
import NotFound from './pages/NotFound';

import Layout from './components/layouts/Layout';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/contacts" element={<Contact />} />
				<Route path="/favorites" element={<Favorite />} />
				<Route path="/people" element={<People />} />
				<Route path="/comapanies" element={<Company />} />
				<Route path="/settings" element={<Setting />} />
				<Route path="people/new-people" element={<NewPeople />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
