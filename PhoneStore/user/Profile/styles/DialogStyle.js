import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    optionButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ec672b',
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    optionText: {
        color: 'white',
        fontSize: 16,
    },
    cancelButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderColor: '#ec672b',
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
    },
    cancelText: {
        color: '#ec672b',
        fontSize: 16,
    },
});

export default styles