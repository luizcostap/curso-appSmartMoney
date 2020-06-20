import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = () => {
  return (
    <View>
      <Text>Saldo Atual</Text>
      <Text>$2.102,45</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
  },
});
export default BalancePanelLabel;
