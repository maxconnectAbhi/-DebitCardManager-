import {View, Text} from 'react-native';
import React from 'react';
import localization from '../../../assets/localization/localization';
import Styles from '../Styles';

const AvailableBalance = () => {
  return (
    <View style={Styles.marginStart}>
      <Text style={Styles.text_14}>{localization.availableBalance}</Text>
      <View style={Styles.row_balance}>
        <View style={Styles.dollarView}>
          <Text style={Styles.dollarText}>S$</Text>
        </View>
        <Text style={Styles.balance}>3,000</Text>
      </View>
    </View>
  );
};

export default AvailableBalance;
