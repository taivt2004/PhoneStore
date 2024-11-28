import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        flex:1,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#DBD9D9',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // Thêm khoảng cách giữa các item
    },
    image: {
        width: 80,
        height: 95,
    },
    infoContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 5
    },
    price: {
        fontSize: 15,
        color: '#ec672b',
        fontWeight: '500',
        marginHorizontal: 5
    },
    ctsp: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon_arrow: {
        borderRadius: 20,
        bottom: 2,
        padding: 7,
        backgroundColor: '#ec672b',
    },
    image2: {
        color: 'white',
    },
    footer: {
        paddingHorizontal: 10,
        marginVertical: 25,
    },
});

export default styles;
