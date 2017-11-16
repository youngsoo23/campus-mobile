import React, { Component } from "react";
import Login from "../components/login/";
import Signup from "../components/Signup/";
import Home from "../components/home/";
import BlankPage from "../components/blankPage";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Home: { screen: Home },
  BlankPage: { screen: BlankPage }
}));
