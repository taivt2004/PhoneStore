import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    itemContainer: {
        width: '45%',
        flexDirection: 'column',
        backgroundColor: '#efefef',
        margin: 10,
        padding: 10,
        borderRadius: 15,
    },
    image: {
        width: '93%',
        height: 190,
    },
    img_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 15,
        color: '#ec672b',
        fontWeight: '500',
    },
    ctsp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon_arrow: {
        borderRadius: 20,
        bottom: 2,
        padding: 6,
        backgroundColor: '#ec672b',
    },
    image2: {
        color: 'white',
    },
});
export default styles
