
const React = require('react-native');

const { StyleSheet } = React;
export default {
  container: {
    backgroundColor: '#e6f9ff',
  },
  row: {
    flex: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mt: {
    marginTop: 18,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: 100,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'green',
    top: 80,
    alignSelf: 'center',
    borderRadius: 50
  },
  largeText: {
    fontSize: 20,
    marginTop: 200,
    fontFamily: 'HelveticaNeue',
    //color: "#fdfefe",
  },
  stretch: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius:50
  }
};