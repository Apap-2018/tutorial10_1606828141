import React from 'react';
import { Link } from "react-router-dom";

export const StafFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaf.map(staf => {
                return (
                    <tr key={staf.id}>
                        <td>{staf.nama}</td>
                        <td>{staf.jenis}</td>
                        <td>
                            <Link to={`/update-pasien/${staf.id}`} className="btn btn-info">Update</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}