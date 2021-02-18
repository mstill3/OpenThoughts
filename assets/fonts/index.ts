import * as Font from 'expo-font';

export const initFonts = async () => {
  await Font.loadAsync({
    'OpenSans-Regular': require('./OpenSans-Regular.ttf'),
    'ArchitectsDaughter-Regular': require('./ArchitectsDaughter-Regular.ttf'),
  });
};
