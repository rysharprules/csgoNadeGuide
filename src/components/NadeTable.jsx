/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from '../data/nades.json'

class NadeTable extends Component {

    getNadesForMapName(mapName) {
        console.log(mapName);
        return data.maps.find(item => item.name === mapName); 
    }

    render() {

        const mapDetails = this.getNadesForMapName(this.props.mapName);

        return (
            <div id={mapDetails.name}>
                <a name={mapDetails.name}></a>
                <h2>{mapDetails.name}</h2>
                <table width="70%">
                    <thead>
                        <tr>
                            <th>Throw</th>
                            <th colSpan="2">64 tick</th>
                            <th colSpan="2">128 tick</th>
                            <th>Throw type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                {mapDetails.title}<br />
                                <a target="_blank" href={mapDetails.nades[0].image}>
                                    <img src={mapDetails.nades[0].thumbnail} />
                                </a>
                            </th>
                            <td colSpan="2">
                                <a target="_blank" href={mapDetails.nades[0].aimImage}>
                                    <img src={mapDetails.nades[0].aimThumbnail} />
                                </a><br />
		{mapDetails.nades[0].description}
	</td>
                            <td colSpan="2">
                                {/* <a target="_blank" href="img/dust2/128/smoke/tSpawnXbox_01_positionAndAim.jpg">
                                    <img src="img/dust2/128/smoke/thumbnail/tSpawnXbox_01_positionAndAim.jpg" />
                                </a><br />
		Line up in corner at T spawn a straight line between the small pilon peaking off the corner (circled) and the top of the small room on the roof to the right. */}
	</td>
                            {/* <td>Jump</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

NadeTable.propTypes = {
    mapName: PropTypes.string,
};

export default NadeTable;