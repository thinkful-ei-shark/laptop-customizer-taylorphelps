import React from 'react';
import CartItem from './CartItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function Cart(props) {
  const cart = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <CartItem
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <>
    {cart}
    <div className='summary__total'>
      <div className='summary__total__label'>Total</div>
      <div className='summary__total__value'>
        {USCurrencyFormat.format(total)}
      </div>
    </div>
    </>
  );
}

export default Cart;
