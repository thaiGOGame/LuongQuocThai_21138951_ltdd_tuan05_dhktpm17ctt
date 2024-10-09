import { Text, Image, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function ForthScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L"); // Kích thước mặc định
  const [largeImage, setLargeImage] = useState(require('../assets/images/big_donut.png')); // Hình ảnh lớn mặc định
  const sizes = {
    XS: 2.49,
    S: 2.79,
    M: 2.99,
    L: 2.99,
    XL: 3.29,
  };

  const handleDecreaseQuantity = () => {
      setQuantity(0);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const handleImageSelect = (image) => {
    setLargeImage(image);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <TouchableOpacity style={[styles.flex_left, styles.boldtext]} onPress={() => navigation.navigate("First Screen")}>
          &lt; Product name
        </TouchableOpacity>
      </View>
      <Image source={largeImage} style={styles.images} />
      <View style={styles.view4Image}>
        <Image source={require('../assets/images/cherry.png')} style={styles.images} />
        <Image source={require('../assets/images/orange.png')} style={styles.images} />
        <Image source={require('../assets/images/candy.png')} style={styles.images} />
        <Image source={require('../assets/images/donut.png')} style={styles.images} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 20 }}>
        <Text style={styles.colorAquaTitle}>${sizes[selectedSize].toFixed(2)}</Text>
        <View style={styles.flex_center}>
          <Text style={styles.specialPriceTitle}>Buy 1 get 1</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.boldtext}>Product name</Text>
          <Text>Occlakj kasjd oiad uaisy iu</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/images/ratting.png')} />
          <Text style={styles.boldtext}>4.5</Text>
        </View>
      </View>
      <Text>Size</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        {Object.keys(sizes).map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => handleSelectSize(size)}
            style={[styles.sizeButton, selectedSize === size && styles.selectedSizeButton]}
          >
            <Text>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>Quantity</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity onPress={handleDecreaseQuantity} style={{ marginLeft: 15 }} >
            <Image source={require('../assets/images/trash.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <Text style={[{ borderWidth: 1, width: 50, textAlign: 'center' }, styles.boldtext]}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncreaseQuantity} style={{ marginLeft: 15 }} >
            <Image source={require('../assets/images/plus_button.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Total:</Text>
          <Text style={styles.boldtext}>${(quantity * sizes[selectedSize]).toFixed(2)}</Text>
        </View>
      </View>
      <Image source={require('../assets/images/line.png')} style={{ width: "100%" }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.boldtext}>Size guide</Text>
        <TouchableOpacity style={[{ justifyContent: 'flex-end' }, styles.boldtext]} onPress={() => navigation.navigate("First Screen")}>
          &gt;
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/images/line.png')} style={{ width: "100%" }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.boldtext}>Review({quantity})</Text>
        <TouchableOpacity style={[{ justifyContent: 'flex-end' }, styles.boldtext]} onPress={() => navigation.navigate("First Screen")}>
          &gt;
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/images/line.png')} style={{ width: "100%" }} />
      <TouchableOpacity
        style={[styles.colored_button, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}
        onPress={() => navigation.navigate("First Screen")}
      >
        <Image source={require('../assets/images/cart.png')} style={{ width: 10, height: 10 }} />
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  colored_button: {
    backgroundColor: "aqua",
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    padding: 20,
    width: '100%',
    height: 10
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  selectedSizeButton: {
    backgroundColor: 'aqua',
    color: 'white',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    gap: 10
  },
  title: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  boldtext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  images: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  green_button: {
    backgroundColor: 'green',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
  flex_left: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100%'
  },
  view4Image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  colorAquaTitle: {
    color: 'aqua',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specialPriceTitle: {
    color: 'pink',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center',
    padding: 5,
    borderWidth: 1,
  },
  flex_center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
