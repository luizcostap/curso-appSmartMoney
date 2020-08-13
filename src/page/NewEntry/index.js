import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from '../NewEntry/NewEntryInput';
import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';

import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';
import Colors from '../../styles/Colors';
import NewEntryDatePicker from './NewEntryDatePcker';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
    category: {id: null, name: 'Selecione'},
  });

  const [amount, setAmount] = useState(entry.amount);
  const [debit, steDebit] = useState(entry.amount <= 0);
  const [category, setCategory] = useState(entry.category);

  const isValid = () => {
    if (parseFloat(amount) !== '0') {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
    };

    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={steDebit}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <NewEntryDatePicker />

        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && onSave();
          }}
        />

        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
