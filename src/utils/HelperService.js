import {
  Platform,
  ToastAndroid,
} from "react-native";




function showToast({
  message = ""
}) {
  if (Platform.OS == "android") {
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  } else {
    alert(message);
  }
}

export const HelperService = {
  showToast,
};
