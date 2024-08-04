import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#151313',
    },
    image_view: {
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      height: '65%',
    },
    image: {
      width: '100%',
      height: '100%',
      alignItems: 'flex-start',
    },
    icon: {
      bottom: 5
    },
    overlay: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      position: 'absolute',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      bottom: 0,
      width: '100%',
      height: 148,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu đen trong suốt với độ trong suốt là 0.5
    },
    textStyle_hang: {
      width: 200,
      flexDirection: 'column',
      fontWeight: '600',
      color: 'white',
      fontSize: 20,
    },
    searchIcon: {
      color: '#828282',
      padding: 10,
    },
    nameAndCoutry:{
      margin: 20,
    },
    LoaiVaXuatXu:{
      margin: 20,
    },
    textStyle_from:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
      color: '#AEAEAE',
      fontWeight: '600'
    },
    textStyle_name: {
      color: 'white',
      fontSize: 16,
    },
    textStyle_price: {
      
      fontWeight: '600',
      color: 'white',
      fontSize: 30,
      width: 90,
  
    },
    view_btn: {
      marginRight: -10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    number: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
  },
  square: {
      width: 55,
      height: 55,
      backgroundColor: '#141921',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginRight: 20
  },
  color_icon:{
    width: '60%',
    height: '60%',
    color: '#D17842'
  },
  description:{
    margin: 15,
    justifyContent: 'flex-end'
  },
  text_title:{
    color: '#AEAEAE',
    fontSize: 14
  },
  mota:{
    paddingTop: 5,
    color: '#FFFFFF',
    fontSize: 12
  },
  size:{
    paddingHorizontal: 15
  },
  
  sizeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  sizeButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    backgroundColor: '#2C2C2C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: '#D17842',
    width: 100,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeButtonText: {
    color: 'white',
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
  backButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#21262E',
    position: 'absolute',
    top: 20, // Điều chỉnh vị trí top của nút back
    left: 20, // Điều chỉnh vị trí left của nút back
    zIndex: 1, // Đảm bảo nút back hiển thị trên ảnh
  },
  backButton2: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#21262E',
    position: 'absolute',
    top: 20, // Điều chỉnh vị trí top của nút back
    right: 20, // Điều chỉnh vị trí left của nút back
    zIndex: 1, // Đảm bảo nút back hiển thị trên ảnh
  },
  backButtonIcon: {
    
    color: '#858383',
  },
  backButtonIcon2: {
    
    color: '#F50BA3',
  },
  });
export default styles;  