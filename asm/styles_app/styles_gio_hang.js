import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems :'flex-start',
      margin: 5,
      borderRadius: 10,
      overflow: 'hidden',
    },
    gradientBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    image: {
      borderRadius: 10,
      width: 120,
      height: 120,
      margin: 10
    },
    textStyle_hang: {
      color: 'white',
      fontWeight: '500',
      fontSize: 15,
      width: 90,
      margin: 5
    },
    textStyle_name: {
      color: 'white',
      fontSize: 12,
      width: 90,
      margin: 5
    },
    textStyle_price: {
      fontWeight: '600',
      color: 'white',
      fontSize: 15,
      width: 90,
      margin: 5
    },
    view_btn: {
      width: '75%',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    number: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
  },
  square: {
      width: 28.44,
      height: 28.44,
      backgroundColor: '#D17842',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginRight: 10
  },
  text_soLuong:{
    width: 50,
    height: 28.44,
    backgroundColor: '#D17842',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10
  },
  toolbar:{
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn_menu: {
    borderWidth: 1,
    borderColor: '#181717',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#21262E'
  },
  sizeButton: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 30,
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
  },
  sizeButtonText: {
    color: 'white'
  },
  soLuong: {
    alignItems:'center',
    marginTop: 8,
    flexDirection: 'row'
  },
  gia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 15,
  },
  btn_addToCart:{
    width: 240,
    height: 60,
    backgroundColor: '#D17842',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  });
  export default styles;