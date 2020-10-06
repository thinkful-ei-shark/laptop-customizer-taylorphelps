import React from 'react';
import CartItem from './CartItem';

function CartItems(props) {
  return Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <CartItem
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      ></CartItem>
    );
  });
}
