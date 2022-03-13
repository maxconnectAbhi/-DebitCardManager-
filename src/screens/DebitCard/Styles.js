import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BLUE,
  FONT_FAMILY_BOLD,
  GRAY_TEXT,
  PRIMARY,
  PRIMARY_LIGHT,
} from '../../utils/Constants';
import {scale, verticalScale} from '../../utils/Dimensions';

const Styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: BG_COLOR,
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    elevation: 5,
    marginTop: verticalScale(100),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: scale(24),
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: scale(14),
    color: BLUE,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: scale(13),
    color: GRAY_TEXT,
  },
  marginStart: {
    marginStart: scale(24),
  },
  text_14: {
    fontSize: scale(14),
    color: BG_COLOR,
  },
  row_balance: {
    flexDirection: 'row',
    marginTop: verticalScale(5),
    alignItems: 'center',
  },
  balance: {
    fontSize: scale(24),
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: 'bold',
    color: BG_COLOR,
    marginStart: scale(10),
  },
  dollarView: {
    width: scale(40),
    height: verticalScale(24),
    borderRadius: scale(4),
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarText: {
    fontSize: scale(12),
    fontWeight: 'bold',
    color: BG_COLOR,
  },
  cardContainer: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    top: verticalScale(-120),
  },
  cardBox: {
    height: verticalScale(220),
    width: '100%',
    borderRadius: scale(12),
    backgroundColor: PRIMARY,
    padding: scale(24),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  hideShow: {
    alignSelf: 'flex-end',
    width: '50%',
    justifyContent: 'center',
    padding: scale(10),
    backgroundColor: BG_COLOR,
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
    top: verticalScale(10),
  },
  row_hideShow: {
    flexDirection: 'row',
    paddingHorizontal: scale(14),
    paddingTop: verticalScale(8),
    bottom: verticalScale(8),
  },
  hideshowText: {
    fontSize: scale(12),
    color: PRIMARY,
    fontWeight: 'bold',
    marginStart: scale(6),
  },
  paddingTop: {
    paddingTop: verticalScale(140),
  },
  marginTop: {
    marginTop: verticalScale(32),
  },
  cardDetails: {
    alignSelf: 'flex-start',
    top: 10,
  },
  cardName: {
    fontWeight: 'bold',
    color: BG_COLOR,
    fontSize: scale(22),
  },
  cardCvv: {
    fontSize: scale(13),
    color: BG_COLOR,
  },
  cardText: {
    fontSize: scale(14),
    color: BG_COLOR,
    marginBottom: verticalScale(15),
    marginTop: verticalScale(24),
  },
  spendLimit: {
    padding: scale(24),
    flexGrow: 3,
  },
  priceBox: {
    backgroundColor: PRIMARY_LIGHT,
    borderRadius: scale(4),
    width: scale(114),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    marginRight: scale(12),
  },
  pricetext: {
    color: PRIMARY,
    fontSize: scale(12),
    fontWeight: 'bold',
  },
  cardLimit_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderContainer: {
    marginHorizontal: scale(24),
    marginTop: verticalScale(30),
  },
  progressBarContainer: {
    backgroundColor: PRIMARY_LIGHT,
    borderRadius: scale(30),
    height: verticalScale(15),
    width: '100%',
    marginTop: verticalScale(6),
    overflow: 'hidden',
  },
  progressView: {
    flex: 1,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: PRIMARY,
  },
});

export default Styles;
