import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    back_ground: {
        padding: 15,
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
      },
    logo_man_hinh_chao: {
        width: 142,
        height: 142,
        marginTop: 50
    },
    title:{
        color: 'white',
        width: 177,
        height: 26,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '700'
    },
    title_register: {
        fontSize: 12,
        color: '#828282',
        height: 40,
        textAlign: "center"
    },
    title_dang_nhap:{
        flexDirection: 'row',
        color: '#828282',
        width: 116,
        height: 26,
        marginBottom: 40,
        textAlign: "center"
    },
    text_input_dang_nhap:{
        width: 348,
        height: 48,
        color: 'white',
        backgroundColor: 'white',
        borderRadius: 10,
    },
   
    inputControl: {
        color: 'white',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 12
    },
    btn: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white',
        backgroundColor:'#D17842',
        borderRadius: 20,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    btn_login_gg:{
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        fontSize: 25,
        fontWeight: '500',
        color: 'white',
        backgroundColor:'white',
        borderRadius: 20,
        height: 57,
        paddingHorizontal: 15
    },

    title_register: {
        fontSize: 12,
        color: '#828282',
        textAlign: 'center',
    },
    registerText: {
        color: '#D17842',
        fontWeight: 'bold',
    },
    formAction: {

        marginVertical: 24
    }
    
});
export default styles;