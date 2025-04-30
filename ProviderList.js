// src/components/ProviderList.js
import React from 'react';
import { getDistance } from '../utils/distance'; // Import the distance function

const ProviderList = ({ providers, customerLocation }) => {
    return (
        <div>
            <h2>Nearby Providers</h2>
            <ul>
                {providers.map((provider) => {
                    const distance = getDistance(
                        customerLocation[0], // customer latitude
                        customerLocation[1], // customer longitude
                        provider.lat,        // provider latitude
                        provider.lng         // provider longitude
                    );

                    return (
                        <li key={provider.id}>
                            {provider.name} - {provider.location} ({distance.toFixed(2)} km away)
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProviderList;