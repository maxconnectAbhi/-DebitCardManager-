import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CommonHeader from '../../components/CommonHeader';
import CommonButton from '../../components/CommonButton';
import localization from '../../assets/localization/localization';
import GlobalStyles from '../../utils/GlobalStyles';
import Styles from './Styles';
import {AppIcons} from '../../assets/images/ImageData';
import CommonTextInput from '../../components/CommonTextInput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LimitArray} from '../../utils/Constants';
import {connect} from 'react-redux';
import CardActions from '../../stores/CardDetails/Actions';
import propTypes from 'prop-types';

const SpendingLimit = ({
  navigation,
  cardLimit,
  setCardLimit,
  toggledSpendingLimit,
}) => {
  const [limit, setlimit] = useState(cardLimit);

  function setLimit() {
    setCardLimit(limit);
    toggledSpendingLimit(true);
    navigation.goBack();
  }
  
  return (
    <View style={GlobalStyles.container}>
      <CommonHeader
        title={localization.spendingLimit}
        backArrow
        containerStyle={{paddingBottom: 0}}
      />
      <View style={[Styles.bottomContainer, Styles.spendLimit]}>
        <Text style={[Styles.title, {color: '#000'}]}>
          {AppIcons.spendLimit} {localization.setLimit}
        </Text>
        <CommonTextInput
          keyboardType="numeric"
          icon={
            <View style={Styles.dollarView}>
              <Text style={Styles.dollarText}>S$</Text>
            </View>
          }
          onChangeText={value => setlimit(value.replace(/^0+/, ''))}
          value={limit}
        />
        <Text style={Styles.subtitle}>{localization.limitDes}</Text>

        <ScrollView horizontal style={Styles.marginTop}>
          {LimitArray.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={Styles.priceBox}
              onPress={() => setlimit(value)}>
              <Text style={Styles.pricetext}>S$ {value}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <CommonButton
          title={localization.save}
          disabled={limit == 0 ? true : false}
          onPress={() => setLimit()}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cardLimit: state.cardDetails.cardLimit,
});

const mapDispatchToProps = dispatch => ({
  setCardLimit: params => dispatch(CardActions.setCardLimit(params)),
  toggledSpendingLimit: params =>
    dispatch(CardActions.spendingLimitToggle(params)),
});

SpendingLimit.propTypes = {
  navigation: propTypes.any,
  cardLimit: propTypes.any,
  toggledSpendingLimit: propTypes.func,
  setCardLimit: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpendingLimit);
