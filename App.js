/* =============================================================

Author : Nikell Reed
Class : ITN263
Class Section : 2C1
Date : 3/24/2022
Assignment : Assignment 7

================================================================*/

import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {

  state = {
    name: '',
    password: '',
    email: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
            Profile Creation
          </Text>
        </View>
        <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Enter A Username"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._nextPassword}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          ref={ref => {this._passwordInput = ref}}
          placeholder="Enter A Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._nextEmail}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          ref={ref => {this._emailInput = ref}}
          placeholder="youremail@example.com"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  _nextEmail = () => {
    this._emailInput && this._emailInput.focus();
  };

  _nextPassword = () => {
    this._passwordInput && this._passwordInput.focus();
  };
  
  _submit = () => {
    alert(`Welcome to the team, ${this.state.name}! A confirmation email has been sent to ${this.state.email} to confirm your newly created profile.`);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cf0e0e',
  },
  description: {
    fontSize: 22,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#cf0e0e',
    borderWidth: 1,
    fontSize: 16,
  },
});
