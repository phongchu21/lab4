import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onAddToCart(product)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 10 },
  image: { width: 100, height: 100, resizeMode: 'contain' },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { color: 'green', marginVertical: 5 },
  button: { backgroundColor: '#007bff', padding: 8, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default ProductCard;
