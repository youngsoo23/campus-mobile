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

import styles from "./styles";

class AccountSettings extends Component {
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
      this.setState({
        users: res.users,
        userFirst: res.users[idnum].FirstName,
        userLast: res.users[idnum].LastName,
        userDept: res.users[idnum].Department,
        userYear: res.users[idnum].AcademicYear,

      })
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
          <Text style={styles.text}>Name: hello world {this.state.userFirst} {this.state.userLast}</Text>
          <Text style={styles.text}>Major: {this.state.userDept}</Text>
          <Text style={styles.text}>E-mail:</Text> 
          <Text style={styles.text}>phone:</Text>
           <Button style ={styles.btn} 
            onPress={() => this.props.navigation.navigate("AccountSettings")}>
          <Text> save</Text>
          </Button>
          <Text style={styles.text}>Year: {this.state.userYear}</Text>  
          <Text style={styles.text}>Gender: </Text>
          </View>
        </Content>

      </Container>
    );
  }
}
export default AccountSettings;