import React from 'react';
import Category from './Category';


function Customizer(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        return (
            
            <Category 
                key={featureHash}
                featureHash={featureHash}
                name={feature}
                options={props.features[feature]}
                updateFeature={props.updateFeature}
                selected={props.selected}
                />
        )
    });
    return <>{features}</>;
}

export default Customizer;