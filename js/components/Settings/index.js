import React, { Component } from "react";
import { connect, Field } from "react-redux";
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
import { Image, TextInput } from "react-native";
import styles from "./styles";
import {ema} from "../login/index";


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
            <Title>Settings</Title>
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
          <Text style={styles.text}>{"\n"}Name: {this.state.userFirst} {this.state.userLast}</Text>
          <Text style={styles.text}>Dept: {this.state.userDept}</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text2}
          />
          <Text style={styles.text}>Year: {this.state.userYear}</Text>
          <Text style={styles.text}>Email: {ema} </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text1}
          /> 
          <Text style={styles.text}>Phone: </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text1}
          /> 
          <Button style ={styles.btn} 
            onPress={() => this.props.navigation.navigate("Profile")}>
          <Icon name="ios-settings" /> 
          <Text>Save</Text>
          </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
export default Settings;