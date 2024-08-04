import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dungluongContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dungluong_view: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dung_luongButton: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 60,
    alignItems: 'center',
  },
  dung_luongButtonSelected: {
    backgroundColor: '#ec672b', // Màu nền khi được chọn
  },
  dung_luongText: {
    fontSize: 14,
  },
  dung_luongTextSelected: {
    fontWeight: 'bold', // Chữ in đậm khi được chọn
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 275,
  },
  colorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButton: {
    borderWidth: 1,
    borderColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  colorButtonSelected: {
    borderWidth: 1,
    borderColor: '#ec672b', // Màu viền khi được chọn
  },
  priceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    bottom: 20,
  },
  priceLabel: {
    color: 'black',
    fontWeight: '600'
  },
  priceText: {
    fontWeight: '600'
  },
  thongTinContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  cellLabel: {
    flex: 1,
    margin: 2,
    fontWeight: 'bold',
  },
  cellValue: {
    fontWeight: '500',
    margin: 2,
    flex: 2,
  },
  cellValue_Gia:{
    flex: 2,
    fontWeight : 'bold',
    color: 'black',
    margin: 2,
  },
  view_button:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default styles;
