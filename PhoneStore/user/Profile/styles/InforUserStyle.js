import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        elevation: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 80,
        borderColor: '#fff',
        borderWidth: 3,
    },
    cameraIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 3,
        backgroundColor: '#E8E5E3',
        borderRadius: 50,
        width: 35,
        height: 35,
        elevation: 20
    },
    cameraIcon: {
        fontSize: 18,
    },
    infoContainer: {
        marginLeft: 20,
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 16,
        color: '#777',
        marginBottom: 10,
        fontWeight: '500'
    },
    address: {
        fontSize: 16,
        color: '#777',
        marginBottom: 10,
        fontWeight: '500'
    },
    phone: {
        fontSize: 16,
        color: '#777',
        marginBottom: 10,
        fontWeight: '500'
    },
    editProfileButton: {
        backgroundColor: '#ec672b',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    editProfileButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;