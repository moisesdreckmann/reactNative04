import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import logo from './assets/logo.png';

function App() {
  const [selectedImageNumber, setSelectedImageNumber] = useState(1);

  const imagePaths = {
    1: require('./assets/1.png'),
    2: require('./assets/2.png'),
    3: require('./assets/3.png'),
  };

  const prices = {
    1: "$450,000",
    2: "$393,695",
    3: "$493,069"
  }

  const carName = {
    1 : "2015 Huracán GT3",
    2 : "Aventador LP 700-4",
    3 : "Aventador Superveloce",
  }

  function handlePosition1() {
    if (selectedImageNumber < 3) {
      setSelectedImageNumber(selectedImageNumber + 1);
    }
  }
  
  function handlePosition2() {
    if (selectedImageNumber > 1) {
      setSelectedImageNumber(selectedImageNumber - 1);
    }
  }

  return (
    <View style={styles.sectionContainer}>
      <Image source={logo} style={styles.imgLogo} />
      <Text style={styles.TxtStyle}>MODEL {carName[selectedImageNumber]}</Text>
      <Image source={imagePaths[selectedImageNumber]} style={styles.imgCar} />
      <Text style={styles.TxtStyle}>{prices[selectedImageNumber]}</Text>
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={handlePosition2}>
          <Text style={styles.btnText2}>&lt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>COMPRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePosition1}>
          <Text style={styles.btnText2}>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0C0D',
  },
  TxtStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  imgLogo: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  imgCar: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  btnStyle: {
    marginTop: 20,
    backgroundColor: '#8C2E2E',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 150,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 65,
    paddingHorizontal: 10,
  },
  btnText2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 50,
    height: 35,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 30,
    borderRadius: 8,
  },
});

export default App;
