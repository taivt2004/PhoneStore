import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5'
    },
    itemContainer: {
      backgroundColor: '#fff',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      shadowColor: '#000',
      shadowRadius: 3,
      elevation: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    infoContainer: {
      flex: 1.5,
      marginRight: 16
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    removeButton: {
      marginVertical: 2,
      padding: 10,
      backgroundColor: '#ec672b',
      borderRadius: 5,
      alignItems: 'center',
      marginLeft: 16
    },
    removeButtonText: {
      color: '#fff',
      fontWeight: '600'
    },
    clearButton: {
      marginTop: 16,
      padding: 15,
      backgroundColor: '#ec672b',
      borderRadius: 5,
      alignItems: 'center'
    },
    clearButtonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16
    },
    emptyText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#888'
    },
    itemImage: {
      width: 100,
      height: 120,
      borderRadius: 5
    },
    thong_tin:{
      fontWeight: '500'
    },
    
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginVertical: 5,
    },
    quantityButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ec672b',
      width: 30,
      height: 30,
      padding: 3,
      borderRadius: 5,
    },
    quantityButtonText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    quantityText: {
      top: 5,
      fontSize: 15,
      marginHorizontal: 10,
    },
  });

  export default styles;