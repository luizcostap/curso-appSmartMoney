import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import Colors from '../../../styles/Colors';

import {
  getDebitCategories,
  getCreditCategories,
} from '../../../services/Categories';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCredtCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCredtCategories(await getCreditCategories());
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={debit ? debitCategories : creditCategories}
            keyExtrator={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => onCategoryPress(item)}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },

  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },

  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 20,
  },

  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },

  closeButton: {
    borderColor: Colors.asphalt,
    backgroundColor: Colors.asphalt,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 20,
  },
  closeButtonText: {
    color: Colors.green,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default NewEntryCategoryPicker;
