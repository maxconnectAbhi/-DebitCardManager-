import { View, Text } from 'react-native'
import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import localization from '../../assets/localization/localization'
import GlobalStyles from '../../utils/GlobalStyles'

const Profile = () => {
  return (
    <View style={GlobalStyles.container}>
      <CommonHeader title={localization.profile}/>
    </View>
  )
}

export default Profile