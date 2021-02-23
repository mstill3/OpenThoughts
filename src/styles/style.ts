import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexed: {
    flex: 1,
  },
  textInput: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
