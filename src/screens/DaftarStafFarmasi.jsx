import React from 'react';
import { StafFarmasiRow } from '../components/StafFarmasiRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarStafFarmasi extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaf: []
		}
		Appointment.getStafFarmasi().then(response => {
			this.setState({
				loading: false,
				listStaf: response.result
			})
		})
	}

	render() {
		console.log(this.state.loading)
		console.log(this.state.listStaf)
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
		} 
		else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf', 'Jenis Staf', 'Aksi']}>

                    <StafFarmasiRow listStaf={this.state.listStaf}/>
                </TableContainer>
            )
        }
	}
}