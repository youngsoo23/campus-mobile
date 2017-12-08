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
import { Image, TextInput } from "react-native";
import api from "../../api.js";
import {idnum} from "../login/index";
import {ema} from "../login/index";
import {username} from "../login/index";

import styles from "./styles";

class Profile extends Component {
 
    constructor(props){
    super(props);
    this.state = {
      users: [],
      userFirst: '',
      userLast: ''
    }
  }
   componentWillMount(){
    // Get index of appropriate user
    api.getUsers().then((res) => {
      for (var i = 0; i < 5; i++) {
        if (ema.trim() === res.users[i].Email) {
          ind = i;
          this.setState({
          users: res.users,
          userEmail: res.users[ind].Email,
          userFirst: res.users[ind].FirstName,
          userLast: res.users[ind].LastName,
          userDept: res.users[ind].Department,
          userYear: res.users[ind].AcademicYear,
          })
        }
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
            <Title>Profile</Title>
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
         <Image style={styles.stretch}
            source={require("../../../images/simpson.png")}
             />
          <Text style={styles.text}>{"\n"}Name: {this.state.userFirst} {this.state.userLast}{"\n"}
            Dept: {this.state.userDept}{"\n"}
            Year: {this.state.userYear}{"\n"}
            Email: {ema} {"\n"}
            Phone: {"\n"} </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
export default Profile;
