import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faLocationDot,faCoffee,faLeaf,faAngleLeft,faStar,faVoteYea  } from '@fortawesome/free-solid-svg-icons';


const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </TouchableOpacity>
        <Text style={styles.time}>7:11</Text>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' }}
              style={styles.visaLogo}
            />
          </View>
          <Text style={styles.cardNumber}>3897 8923 6745 4638</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardHolder}>Robert Evans</Text>
            <Text style={styles.expiryDate}>02/30</Text>
          </View>
        </View>
      </View>

      <View style={styles.paymentMethods}>
        <View style={styles.method}>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          <Text style={styles.methodText}>Wallet</Text>
          <Text style={styles.amount}>$100.50</Text>
        </View>
        <TouchableOpacity style={styles.method}>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          <Text style={styles.methodText}>Google Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.method}>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          <Text style={styles.methodText}>Apple Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.method}>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          <Text style={styles.methodText}>Amazon Pay</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>$4.20</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay from Credit Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#2c2c2e',
    borderRadius: 15,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  visaLogo: {
    width: 50,
    height: 20,
    resizeMode: 'contain',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 20,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardHolder: {
    color: '#fff',
  },
  expiryDate: {
    color: '#fff',
  },
  paymentMethods: {
    marginBottom: 20,
  },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    marginVertical: 5,
  },
  methodText: {
    color: '#fff',
    fontSize: 18,
  },
  amount: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#ff9500',
    fontSize: 24,
  },
  payButton: {
    backgroundColor: '#ff9500',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PaymentScreen;
