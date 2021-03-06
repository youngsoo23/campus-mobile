
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

// use code below if screen height is needed
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
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
    marginTop: 50,
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
    marginTop: 20,
    alignSelf: 'center',
  },
  largeText: {
    fontSize: 20,
    marginTop: 100,
    fontFamily: 'HelveticaNeue',
    //color: "#fdfefe",
  },
  stretch: {
    marginTop: 20,
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius:50
  }
};
