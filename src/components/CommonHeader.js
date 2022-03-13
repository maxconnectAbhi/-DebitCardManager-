import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BG_COLOR, FONT_FAMILY_BOLD, GRAY, PRIMARY_DARK} from '../utils/Constants';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {AppIcons} from '../assets/images/ImageData';
import {scale} from '../utils/Dimensions';
import { useNavigation } from '@react-navigation/native';

const CommonHeader = ({backArrow, title, containerStyle}) => {
    const navigation = useNavigation();

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        {backArrow ?
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          underlayColor={GRAY}
          style={styles.backArrow}>
          {AppIcons.back}
        </TouchableHighlight>
        :
        <View/>
        }
        {AppIcons.logo}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_DARK,
    padding: scale(24)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backArrow: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
    height: scale(40),
    width: scale(40),
  },
  title:{
    fontFamily: FONT_FAMILY_BOLD,
    color: BG_COLOR,
    fontSize: scale(24),
    fontWeight: 'bold'
  }
});
