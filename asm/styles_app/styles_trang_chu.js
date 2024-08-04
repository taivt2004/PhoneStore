import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
      width: 141,
      height: 245,
      margin: 5,
      borderRadius: 23,
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
      borderRadius: 20,
      width: 120,
      height: 120,
      margin: 10
    },
    textStyle_name: {
      color: 'white',
      fontSize: 11,
      width: 90,
      height: 25,
      margin: 5,
    },
    textStyle_name: {
      color: 'white',
      fontSize: 9,
      width: 125,
      margin: 5,
      paddingLeft: 5,
    },
    textStyle_price: {
      fontWeight: '600',
      color: 'white',
      fontSize: 15,
      width: 90,
      margin: 5
    },
    view_btn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
  ratingView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10, // Adjust as needed
    right: 10.9, // Adjust as needed
    zIndex: 1,
    width: 53,
    height: 22,
    justifyContent: 'center',
    paddingRight: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  icon_rating: {
    color: '#D17842',
  }
  });
  export default styles;