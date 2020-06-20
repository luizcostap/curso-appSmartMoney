import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanelLabel from './BalancePaneLabel';
import BalancePanelChart from './BalancePanelChart';
const BalancePanel = () => {
  return (
    <View>
      <BalancePanelLabel />
      <BalancePanelChart />
    </View>
  );
};
const styles = StyleSheet.create({});
export default BalancePanel;
