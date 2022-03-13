import {View, Text} from 'react-native';
import React from 'react';
import Styles from '../Styles';
import {AppIcons} from '../../../assets/images/ImageData';
import {TouchableOpacity} from 'react-native-gesture-handler';
import propTypes from 'prop-types';

const DebitCardListItems = ({title, subtitle, icon, toggle, onTogglePress}) => {
  return (
    <View style={Styles.row}>
      {icon}
      <View style={{flex: 0.9}}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.subtitle}>{subtitle}</Text>
      </View>
      {onTogglePress && (
        <TouchableOpacity onPress={onTogglePress}>
          {toggle ? AppIcons.toggled : AppIcons.toggle}
        </TouchableOpacity>
      )}
    </View>
  );
};

DebitCardListItems.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  icon: propTypes.object,
  toggle: propTypes.bool,
  onTogglePress: propTypes.func,
};

export default DebitCardListItems;
