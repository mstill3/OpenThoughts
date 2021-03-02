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
  flexedMiddle: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  textInput: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  padded: {
    margin: 10,
  },
  veryPadded: {
    margin: 40,
  },
  verySidePadded: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
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
