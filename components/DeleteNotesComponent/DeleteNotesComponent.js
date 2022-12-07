import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon} from '@ui-kitten/components';
import { EvalIconPack } from '@ui-kitten/eva-icons';
import { firebase } from "../../config/firebase";
import * as Style from "./deletenotes.styles"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const DeleteNotes = () => {
    return (
      <ScrollView>
        <View style={styles.notesContaines}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity style={[styles.emptyButton, {marginTop: '5px'}]}>
              <Text style={styles.emptyButtonText}>
                Undo All
              </Text>
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 18, color: Style.color}}>
              total:
            </Text>
            <TouchableOpacity style={styles.emptyButton}>
              <Text style={styles.emptyButtonText}>
                Empty
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
        </View>
      </ScrollView>
    )
}

export default DeleteNotes;

const styles = StyleSheet.create({
  notesContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9
  },
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
  emptyButton: {
    backgroundColor: Style.color,
    width: '25%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    marginBottom: 5
  },
  emptyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700'
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Style.color,
    marginTop: 5,
    marginBottom: 5
  },
})