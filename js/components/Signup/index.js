import React, { Component } from "react";
import { Image } from "react-native";
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
var signup_tried = false;

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  ema = values.email;
  var pw = values.password;
  var pw2 = values.password2;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (values.password2 === undefined) {
    pw2 = "";
  }
  if (pw !== pw2) {
    error.password = "non-matching pws";
    hasError = true;
  } else {
    //hasError = false;
  }
  /*if (email_in.length < 8 && email_in !== "") {
    error.email = "too short";
  }*/
  if (!ema.endsWith("@csub.edu")) {
    error.email = "non-csub email";
    hasError = true;
  } else {
    //hasError = false;
  }
  /*if (!email_in.includes("@") && email_in !== "") {
    error.email = "@ not included";
  }*/
  /*if (pw_in.length > 15) {
    error.password = "max 15 characters";
  }*/
  /*if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }*/
  return error;
};

class Login extends Component {
  showBug = false;
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      name: ""
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
              {/*<Text style={{ fontSize: 15, color: "red" }}>{error}</Text>*/}
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
              {/*<Image style={styles.stretch}
                source={require("../../../images/backpack.jpg")} />*/}
            </View>
              <View style={styles.bg}>
                <Field name="email" component={this.renderInput} />
                <Field name="password" component={this.renderInput} />
                <Field name="password2" component={this.renderInput} />
                {hasError ?
                (<Button style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Signup")}>
                  <Text>Signup</Text>
                </Button>) :
                (<Button style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Home")}>
                  <Text>Signup</Text>
                </Button>)}
                <Text>{"\n"}</Text>
                <Text style={{color: 'blue', alignSelf: 'center'}}
                  onPress={() => this.props.navigation.navigate("Login")}>
                  Already have an account? Login
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