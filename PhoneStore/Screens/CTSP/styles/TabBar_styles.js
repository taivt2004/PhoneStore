import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        margin: 10,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButtonIcon2: {
        color: 'black'
    },
    icon_arrow: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        bottom: 2,
        padding: 5,
        backgroundColor: 'white'
    },
    nameProduct: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    backButtonIconHeart:{
        color: '#F178E6'
    }
})

export default styles;