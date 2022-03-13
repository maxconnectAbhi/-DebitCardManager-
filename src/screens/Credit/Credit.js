import { View, Text } from 'react-native'
import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import GlobalStyles from '../../utils/GlobalStyles'

const Credit = () => {
  return (
    <View style={GlobalStyles.container}>
      <CommonHeader title={'Credit'}/>
    </View>
  )
}

export default Credit