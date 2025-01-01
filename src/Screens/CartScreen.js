import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty!</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Text>${item.price} x {item.quantity}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 18 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  remove: { color: 'red', marginTop: 5 },
});

export default CartScreen;
