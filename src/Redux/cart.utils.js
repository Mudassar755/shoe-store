export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, qty: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.qty === 1) {
    return cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id);
  }

  return cartItems.map(cartItem =>
    cartItem._id === cartItemToRemove._id
      ? { ...cartItem, qty: cartItem.qty - 1 }
      : cartItem
  );
};
