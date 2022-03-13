import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({
  getCardDetails: ['payload'],
  getCardDetailsLoading: null,
  getCardDetailsSuccess: ['payload'],
  getCardDetailsFailure: null,
  doNothing: null,
  setCardLimit: ['payload'],
  spendingLimitToggle : ['payload'],
});

export const CardDetailsTypes = Types
export default Creators