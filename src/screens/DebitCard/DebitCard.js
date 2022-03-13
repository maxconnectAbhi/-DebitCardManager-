import {View, ScrollView} from 'react-native';
import React from 'react';
import GlobalStyles from '../../utils/GlobalStyles';
import localization from '../../assets/localization/localization';
import CommonHeader from '../../components/CommonHeader';
import Styles from './Styles';
import DebitCardListItems from './components/DebitCardListItems';
import {AppIcons} from '../../assets/images/ImageData';
import AvailableBalance from './components/AvailableBalance';
import Card from './components/Card';
import {connect} from 'react-redux';
import CardActions from '../../stores/CardDetails/Actions';
import SpendingLimitProgressBar from './components/SpendingLimitProgressBar';
import propTypes from 'prop-types';

const DebitCard = ({navigation, spendingLimitToggle, toggledSpendingLimit}) => {
  return (
    <ScrollView style={GlobalStyles.container}>
      <CommonHeader title={localization.debitCard} />
      <AvailableBalance />
      <View style={Styles.bottomContainer}>
        <Card />
        <View style={Styles.paddingTop}>
          {spendingLimitToggle && <SpendingLimitProgressBar />}
          <DebitCardListItems
            icon={AppIcons.topup}
            title={localization.topup}
            subtitle={localization.topupDes}
          />
          <DebitCardListItems
            icon={AppIcons.limit}
            title={localization.weekLimit}
            subtitle={localization.weekLimitDes}
            toggle={spendingLimitToggle}
            onTogglePress={() =>
              spendingLimitToggle
                ? toggledSpendingLimit(false)
                : navigation.navigate('SpendingLimit')
            }
          />
          <DebitCardListItems
            icon={AppIcons.freez}
            title={localization.freez}
            subtitle={localization.freezDes}
            toggle={false}
            onTogglePress={() => console.log('')}
          />
          <DebitCardListItems
            icon={AppIcons.newCard}
            title={localization.newCard}
            subtitle={localization.newCardDes}
          />
          <DebitCardListItems
            icon={AppIcons.deactivate}
            title={localization.deactivateCard}
            subtitle={localization.deactivateCardDes}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  spendingLimitToggle: state.cardDetails.spendingLimitToggle,
});

const mapDispatchToProps = dispatch => ({
  toggledSpendingLimit: params =>
    dispatch(CardActions.spendingLimitToggle(params)),
});

DebitCard.propTypes = {
  navigation: propTypes.any,
  spendingLimitToggle: propTypes.bool,
  toggledSpendingLimit: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DebitCard);
