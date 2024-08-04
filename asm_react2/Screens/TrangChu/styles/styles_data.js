import { StyleSheet } from "react-native";

  const styles = StyleSheet.create({
    container: {
      flex: 1, // Đảm bảo chiếm toàn bộ chiều cao
      paddingVertical: 15,
    },
    text: {
      paddingHorizontal: 10,
      fontSize: 20,
      fontWeight: '600',
      color: 'black',
      marginVertical: 10,
    },
    footer: {
      paddingHorizontal: 10,
      marginVertical: 25,
    },
    brandButton: {
      fontFamily: 'serif',
      padding: 8,
      margin: 5,
      borderRadius: 10,
      backgroundColor: 'white',
    },
    selectedBrandButton: {
      fontFamily: 'serif',
      backgroundColor: '#ec672b',
    },
    brandText: {
      fontSize: 16,
      color: '#828282',
    },
    selectedBrandText: {
      color: '#fff',
    },
    productContainer: {
      flex: 1, 
    },
    noProductsText: {
      textAlign: 'center',
      marginVertical: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  });

export default styles;