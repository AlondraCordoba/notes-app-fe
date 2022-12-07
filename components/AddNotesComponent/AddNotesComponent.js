import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Keyboard, Alert} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon} from '@ui-kitten/components';
import { EvalIconPack } from '@ui-kitten/eva-icons';
import { firebase } from "../../config/firebase";
import * as Style from "./addnotes.styles"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AddNotes = ({navigation, ...props}) => {
    return (
      <ScrollView>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding':'height'}>
          <TouchableWithoutFeedback>
            <View style={{padding: 20, justifyContent: 'space-around'}}>
              <TextInput
                style={styles.input}
                placeholder='Type Here...'
                multiline={true}
                value={props.note}
                onChangeText={(text) => props.setNote(text)}
                />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if(props.note === ''){
                    Alert.alert('Please Type Something')
                  }else{
                    props.handleNote();
                    navigation.navigate('Your Notes');
                  }
                } }>
                <Text style={styles.buttonText}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    )
}

export default AddNotes;

const styles = StyleSheet.create({
  addNoteContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    fontWeight: '600',
    padding: 20,
    paddingTop: 20,
    color: 'black',
    fontSize: 19,
    width: '100%',
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
    height: 300
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  button:{
    backgroundColor: Style.color,
    width: '40%',
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    alignSelf: 'flex-end',
    marginTop: 20
  },
})