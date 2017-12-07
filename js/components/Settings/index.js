import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  View,
  Body
} from "native-base";
import api from "../../api.js";
import {idnum} from "../login/index";
import {username} from "../login/index";
import {ema} from "../login/index";
import {ind} from "../home/index";
import styles from "./styles";

class Settings extends Component {
  static navigationOptions = {
    header: null
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
    if (ind !== -1) {
      this.setState({
        users: res.users,
        userEmail: res.users[ind].Email,
        userFirst: res.users[ind].FirstName,
        userLast: res.users[ind].LastName,
        userDept: res.users[ind].Department,
        userYear: res.users[ind].AcademicYear,
      })
    }
    });
  }
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Account Settings</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
        <View>
          <Text style={styles.text}>
            Name: {this.state.userFirst} {this.state.userLast} {"\n"}
            Major: {this.state.userDept} {"\n"}
            Year: {this.state.userYear} {"\n"}
            Email: {ema} {"\n"}
            Phone: {"\n"}</Text>
           <Button style ={styles.btn} 
            onPress={() => this.props.navigation.navigate("AccountSettings")}>
          <Text>Save</Text>
          </Button>
          </View>
        </Content>

      </Container>
    );
  }
}
export default Settings;