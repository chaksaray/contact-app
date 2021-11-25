import React from 'react';
import './App.css';

import Sidebar from './components/layouts/Sidebar';
import MainHeader from './components/layouts/MainHeader';
import HeaderFilter from './components/layouts/HeaderFilter';
import PeopleWrapper from './components/people/PeopleWrapper';

function App() {
    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">
                <MainHeader />
                <HeaderFilter />
                <PeopleWrapper />
            </div>
        </div>
    );
}

export default App;
