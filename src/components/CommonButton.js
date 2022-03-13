import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BG_COLOR, FONT_FAMILY_BOLD, GRAY_LIGHT, PRIMARY } from '../utils/Constants'
import { scale, verticalScale } from '../utils/Dimensions'

const CommonButton = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity onPress={()=> onPress()} disabled={disabled} style={[styles.button,{ backgroundColor: disabled ? GRAY_LIGHT : PRIMARY }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton

const styles = StyleSheet.create({
    button: {
        width: '80%',
        borderRadius: scale(30),
        padding: verticalScale(17),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: BG_COLOR,
        fontSize: scale(16),
        fontFamily: FONT_FAMILY_BOLD
    }
})