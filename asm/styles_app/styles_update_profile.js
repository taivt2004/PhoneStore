import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151313',
        paddingVertical: 15,
        paddingHorizontal: 15
        
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 30
      },
      profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      profileImage: {
        width: 120,
        height: 120,
        borderRadius: 15,
      },
      input: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
      },
      eyeIcon: {
        color: 'black',
        position: 'absolute',
        right: 15,
        top: 15
      },
      iconImage:{
        color: 'white'
      },
      passwordContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      },
      saveButton: {
        backgroundColor: '#c47a5a',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      toolbar:{
        paddingBottom: 15,
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
    

})
export default styles;