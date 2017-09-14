/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';

export default class RNModalCrash extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisibility(modalVisible) {
    this.setState({ modalVisible });
  }

  onRequestClose = () => {
    this.setModalVisibility(false);
  }

  onShowModalPress = () => {
    this.setModalVisibility(true);
  }

  onModalButtonPress = () => {
    this.setModalVisibility(false);
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableOpacity onPress={this.onShowModalPress} style={styles.showModalButton}>
          <Text>Press for modal</Text>
        </TouchableOpacity>
        <Modal
          visible={modalVisible}
          onRequestClose={this.onRequestClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.boxStyle}>
              <TouchableOpacity onPress={this.onModalButtonPress}>
                <Text style={styles.modalButton}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  showModalButton: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#00aae7',
    borderRadius: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  boxStyle: {
    padding: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    borderRadius: 2,
    backgroundColor: 'white',
    elevation: 10,
  },
  modalButton: {
    padding: 10,
  },
});

AppRegistry.registerComponent('RNModalCrash', () => RNModalCrash);
