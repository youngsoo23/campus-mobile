import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import AccountSettings from "../AccountSettings";
import Messages from "../Messages";
import MessageBoards from "../MessageBoards";
import FindStudents from "../FindStudents";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";
import api from "../../api.js";
import {idnum} from "../login/index";
import {username} from "../login/index";
//var idnum = 2;

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };
  constructor(props){
    super(props);
    this.state = {
      users: [],
      userFirst: '',
      userLast: ''
    }
  }
  componentWillMount(){
    api.getUsers().then((res) => {
      this.setState({
        users: res.users,
        userFirst: res.users[idnum].FirstName,
        userLast: res.users[idnum].LastName,
        userDept: res.users[idnum].Department,
        userYear: res.users[idnum].AcademicYear,

      })
    });
  }
  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }
  render() {
    console.log(DrawNav, "786785786");
    return (
      <Container style={styles.container}>
        <Header>
          <Left>

            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Text style={styles.text}>Hello, {" "}
            {this.state.userFirst} {this.state.userLast} {"\n"}
            Department: {this.state.userDept} {"\n"} 
            Academic Year: {this.state.userYear} {"\n"}
          </Text>
          {/*REFER TO CODE BELOW FOR LISTS (USE FOR MESSAGE BOARDS ?)
          <Grid style={styles.mt}>
            {this.props.list.map((item, i) => (
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() =>
                    this.props.navigation.navigate("BlankPage", {
                      name: { item }
                    })}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            ))}
          </Grid>*/}
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    'Home': { screen: HomeSwagger },
    'Account Settings': { screen: AccountSettings },
    'Messages': { screen: Messages },
    'Message Boards': { screen: MessageBoards },
    'Find Students': { screen: FindStudents }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;
