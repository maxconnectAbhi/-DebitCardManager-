import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Styles from '../Styles';
import localization from '../../../assets/localization/localization';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppIcons} from '../../../assets/images/ImageData';

const Card = () => {
  const [hide, sethide] = useState(true);
  return (
    <View style={Styles.cardContainer}>
      <View style={Styles.hideShow}>
        {hide ? (
          <TouchableOpacity
            style={Styles.row_hideShow}
            onPress={() => sethide(false)}>
            {AppIcons.eye}
            <Text style={Styles.hideshowText}>{localization.showCard}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={Styles.row_hideShow}
            onPress={() => sethide(true)}>
            {AppIcons.eyeClose}
            <Text style={Styles.hideshowText}>{localization.hideCard}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={Styles.cardBox}>
        {AppIcons.AspireLogo}
        <View style={Styles.cardDetails}>
          <Text style={Styles.cardName}>Mark Henry</Text>
          <Text style={[Styles.cardText, {letterSpacing: hide ? 5 : 4}]}>
            {hide ? '****  ****  ****  2020' : '5637  3411  2413  2020'}
          </Text>
          <Text style={Styles.cardCvv}>
            Thru: 12/20 CVV: {hide ? '***' : '246'}
          </Text>
        </View>
        {AppIcons.visaLogo}
      </View>
    </View>
  );
};

export default Card;
