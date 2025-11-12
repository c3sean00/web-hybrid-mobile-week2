import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, Pressable, SafeAreaView } from 'react-native';
import { styles, colors } from './styles';


export default function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = (): void => setModalVisible(true);
  const closeModal = (): void => setModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Search the hidden message</Text>
        
        <Pressable
          style={({ pressed }) => [
            styles.pressableButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={openModal}
        >
          <Text style={styles.buttonText}>Show message</Text>
        </Pressable>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>This is hidden message..</Text>
            
            <Pressable
              style={({ pressed }) => [
                styles.closeButton,
                pressed && styles.closeButtonPressed,
              ]}
              onPress={closeModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}