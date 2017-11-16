import React, { Component } from "react";
import Signup from "../components/Signup";
import Home from "../components/home/";
import AccountSettings from "../components/AccountSettings";
import Messages from "../components/Messages";
import MessageBoards from "../components/MessageBoards";
import FindStudents from "../components/FindStudents";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Signup: { screen: Signup },
    Home: { screen: Home },
    AccountSettings: { screen: AccountSettings },
    Messages: { screen: Messages }, 
    MessageBoards: { screen: MessageBoards },
    FindStudents: { screen: FindStudents }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
