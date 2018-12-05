import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import './App.css';
import { DaftarPasien } from './screens/DaftarPasien';
import { DaftarStafFarmasi } from './screens/DaftarStafFarmasi';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';
import { UpdatePasien } from './screens/UpdatePasien';
import { TambahLabResult } from './screens/TambahLabResult';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
						<NavLink to="#" className="navbar-brand">
							<img src="/favicon.ico" alt="#" width="30" height="30"/>
						</NavLink>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className='nav-item'>
									<NavLink to="/" exact className="nav-link" activeClassName="active" >Home</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to="/all-pasien" exact className="nav-link" activeClassName="active">Daftar Pasien</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to="/all-staf-farmasi" exact className="nav-link" activeClassName="active">Staf Farmasi</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				
					<div className="container">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/all-pasien" exact component={DaftarPasien} />
							<Route path="/all-staf-farmasi" exact component={DaftarStafFarmasi} />
							<Route path="/update-pasien/:id" exact component={UpdatePasien} />
							<Route path="/not-found" exact component={NotFound} />
							<Route path="/add-lab-result/:id" exact component={TambahLabResult} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}