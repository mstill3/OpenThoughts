import { Alert } from 'react-native';

export const ConfirmAlert = (
  title: string,
  subtitle: string,
  confirmFn: () => void,
) =>
  Alert.alert(
    title,
    subtitle,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Yes', onPress: confirmFn },
    ],
    { cancelable: true },
  );
