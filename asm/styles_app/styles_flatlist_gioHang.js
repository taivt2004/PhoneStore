import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#151313',
      paddingVertical: 15, // Thêm khoảng cách bên trên và bên dưới
    },
    scrollView: {
      paddingVertical: 10,
    },
    title_text: {
      fontWeight: '600',
      margin: 5,
      color: 'white',
      fontSize: 28,
      width: 195,
    },
    toolbar:{
      flexDirection: 'row',
      margin: 5,
      justifyContent: 'space-between'
    },
    btn_menu: {
      borderWidth: 1,
      borderColor: '#181717',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'gray',
      width: 30,
      height: 30,
      borderRadius: 10,
      backgroundColor: '#21262E'
    },
    text_input:{
      color: '#828282',
      backgroundColor: '#21262E',
      margin: 5,
      height: 40,
      borderRadius: 15,
      paddingHorizontal: 5
    },
    searchSection: {
      flexDirection: 'row',
      backgroundColor: '#21262E',
      borderRadius: 15,
      margin: 10,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    searchIcon: {
      color: '#828282',
      padding: 10,
    },
  });
  export default styles;