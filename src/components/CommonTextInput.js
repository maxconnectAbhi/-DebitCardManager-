import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { FONT_FAMILY_BOLD, GRAY_BORDER } from '../utils/Constants'
import { scale, verticalScale } from '../utils/Dimensions'

const CommonTextInput = (props) => {
    const {icon} = props
  return (
    <View style={styles.container}>
        {icon}
      <TextInput {...props} style={styles.input}/>
    </View>
  )
}

export default CommonTextInput

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: GRAY_BORDER,
    borderBottomWidth: 1,
    paddingVertical: verticalScale(5),
    marginVertical: verticalScale(12)
    },
    input: {
        padding: 0,
        margin: 0,
        width: '90%',
        color: '#000',
        fontSize: scale(24),
        fontFamily: FONT_FAMILY_BOLD,
        fontWeight: 'bold',
        marginStart: scale(10)
    }
})