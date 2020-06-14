/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from '../data/nades.json';
import * as constants from '../constants';

class NadeTable extends Component {

    getNadesForMapName(mapName) {
        console.log(mapName);
        return data.mapData.find(item => item.name === mapName);
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
                        {mapDetails.nades.map((nade, index) => 
                            <tr key={index}>
                                <th>
                                    {nade.title}<br />
                                    <a target="_blank" href={nade.image}>
                                        <img src={nade.ticks[0].thumbnail} />
                                    </a>
                                </th>
                                <td colSpan="2">
                                    <a target="_blank" href={nade.aimImage}>
                                        <img src={nade.aimThumbnail} />
                                    </a><br />
                                    {nade.description}
                                </td>
                                <td colSpan="2">
                                    {/* <a target="_blank" href="img/dust2/128/smoke/tSpawnXbox_01_positionAndAim.jpg">
                                                        <img src="img/dust2/128/smoke/thumbnail/tSpawnXbox_01_positionAndAim.jpg" />
                                                    </a><br />
                            Line up in corner at T spawn a straight line between the small pilon peaking off the corner (circled) and the top of the small room on the roof to the right. */}
                                </td>
                                {/* <td>Jump</td> */}
                            </tr>
                        )}
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