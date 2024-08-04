import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/DialogStyle';
const CustomAlert = ({ visible, onClose, onCamera, onGallery }) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Chọn ảnh</Text>
                    <TouchableOpacity style={styles.optionButton} onPress={onCamera}>
                        <Text style={styles.optionText}>Chụp ảnh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={onGallery}>
                        <Text style={styles.optionText}>Chọn từ thư viện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.cancelText}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};


export default CustomAlert;
