import {View, Text} from 'react-native';
import React from 'react';
import localization from '../../../assets/localization/localization';
import {connect} from 'react-redux';
import Styles from '../Styles';
import propTypes from 'prop-types';

const SpendingLimitProgressBar = ({cardLimit}) => {
  return (
    <View style={Styles.sliderContainer}>
      <View style={Styles.cardLimit_row}>
        <Text>{localization.cardSpendingLimit}</Text>
        <Text style={Styles.subtitle}>
          <Text style={Styles.pricetext}>
            ${cardLimit.replace(/\,/g, '') / 4}
          </Text>{' '}
          | ${cardLimit}
        </Text>
      </View>
      <View style={Styles.progressBarContainer}>
        <View style={[Styles.progressView, {width: `${25}%`}]} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cardLimit: state.cardDetails.cardLimit,
});

SpendingLimitProgressBar.propTypes = {
  cardLimit: propTypes.any,
};

export default connect(mapStateToProps)(SpendingLimitProgressBar);
