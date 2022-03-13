import { View, Text } from 'react-native'
import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import GlobalStyles from '../../utils/GlobalStyles'
import localization from '../../assets/localization/localization'

const Home = () => {
  return (
    <View style={GlobalStyles.container}>
      <CommonHeader title={localization.home}/>
    </View>
  )
}

export default Home