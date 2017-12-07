import React, { Component } from "react";
import { Image, TextInput } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from "native-base";
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";

{/*const background = require("../../../images/shadow.png");*/}
var idnum;
var ema;
var hasError;
var showBug;
var login_tried;

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  ema = values.email;
  idnum = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (!ema.endsWith("@csub.edu")) {
    error.email = "non-csub email";
    hasError = true;
  } else {
    hasError = false;
  }
  return error;
};

class Login extends Component {
  showBug = false;
  login_tried = false;
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: ""
    };
    this.renderInput = this.renderInput.bind(this);
  }
  setUser(name) {
    this.props.setUser(name);
  }
  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    hasError = true;
    if (error === undefined) {
      hasError = false;
    }
    return (
      <Item error={showBug}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input autoCapitalize="none"
          secureTextEntry={input.name === "email" ? false : true}
          placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
          {...input}
        />
        {showBug
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}></Text>
            </Item>
          : <Text />}
      </Item>
    );
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            {/*<Image source={background} style={styles.shadow}>*/}
            <View style={styles.container1}>
              <Text style={styles.largeText}>Campus Connect</Text>
            </View>
              <View style={styles.bg}>
                <Field name="email"
                  component={this.renderInput} />
                <Field name="password" component={this.renderInput} />
                {hasError ? login_tried = true &&
                (<Button style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Login")}>
                  <Text>Login</Text>
                </Button>) :
                (<Button style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Home")}>
                  <Text>Login</Text>
                </Button>)}
                <Text>{"\n"}</Text>
                <Text style={{color: 'blue', alignSelf: 'center'}}
                  onPress={() => this.props.navigation.navigate("Signup")}>
                  Don't have an account? Sign up
                </Text>
              </View>
            {/*</Image>*/}
          </Content>
        </View>
      </Container>
    );
  }
}
const LoginSwag = reduxForm(
  {
    form: "test",
    validate
  },
  function bindActions(dispatch) {
    return {
      setUser: name => dispatch(setUser(name))
    };
  }
)(Login);
LoginSwag.navigationOptions = {
  header: null
};
export default LoginSwag;
export {idnum};
export {ema};