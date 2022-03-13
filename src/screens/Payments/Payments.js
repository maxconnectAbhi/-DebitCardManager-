import { View, Text } from 'react-native'
import React from 'react'
import GlobalStyles from '../../utils/GlobalStyles'
import CommonHeader from '../../components/CommonHeader'
import localization from '../../assets/localization/localization'

const Payments = () => {
  return (
    <View style={GlobalStyles.container}>
    <CommonHeader title={localization.payments}/>
  </View>
  )
}

export default Payments