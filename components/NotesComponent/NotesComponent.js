import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon} from '@ui-kitten/components';
import { EvalIconPack } from '@ui-kitten/eva-icons';
import { firebase } from "../../config/firebase";
import * as Style from "./notes.styles"
import { ScrollView } from 'react-native-gesture-handler';

const Notes = ({navigation, ...props}) => {
  const [name, setName] = useState('')

  useEffect(() => {
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else {
        console.log('User dose not exist');
      }
    })
  }, [])

    return (
      <View style={styles.notesContainer}>

        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <TouchableOpacity style={[styles.button, {marginLeft:40}]} onPress={() => navigation.navigate('Delete Notes')}>
            <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>D</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Add Note')}>
          <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Text style={{fontWeight: '700', fontSize: 18, color: Style.color}}>
            Total:
          </Text>
        </View>

        <View style={styles.divider}> </View>

        <View style={styles.searchContainer}>
          <TextInput placeholder='Search....' placeholderTextColor={Style.color} style={[styles.input, {borderWidth: 3}]} />
          <TouchableOpacity style={[styles.searchButton, {width:50}]}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.searchButton, {width:50}]}>
            <Text style={styles.searchButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {props.notes.lenght === 0
            ?
            <View style={styles.emptyNoteContainer}>
              <Text style={styles.emptyNoteText}>There is no note yet! Click on the Add new note button</Text>
            </View>
            :
            props.notes.map((item, index) =>
              <View style={styles.item} key={index}>
                <View style={styles.note}>
                  <Text style={styles.index}>{index + 1}</Text>
                  <Text style={styles.text}>{item}</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
              </View>
            )
          }
        </ScrollView>

        <Text style={{fontSize:20, fontWeight:'bold'}}>
          Hello, {name.firstName}
        </Text>
        <TouchableOpacity
        onPress={() => firebase.auth().signOut()}
        styles={styles.button}
        >
        <Text style={{fontSize:22, fontWeight:'bold'}}>
          Sign out
        </Text>
        </TouchableOpacity>

      </View>
    )
}

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:100,
  },
  button:{
    backgroundColor: Style.color,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    height: 50
  },
  searchButton: {
    backgroundColor: Style.color,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    borderRadius: 5,
    height: 40
  },
  searchButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12
  },
  emptyNoteContainer: {
    alignItems: 'center',
    marginTop: 240
  },
  emptyNoteText: {
    color: Style.color,
    fontWeight: '600',
    fontSize: 15
  },
  dateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  input:{
    height: 40,
    paddingHorizontal: 20,
    width: '65%',
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5
  },
  delete: {
    color: Style.color,
    fontWeight: '700',
    fontSize: 15
  },
  text: {
    fontWeight: '700',
    fontSize: 17,
    alignSelf: 'center',
  },
  note: {
    flexDirection: 'row',
    width: '75%'
  },
  scrollView: {
    marginBottom: 70
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800'
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  index: {
    fontSize: 20,
    fontWeight: '800'
  },
  item: {
    marginTop: 20,
    padding: 15,
    color: 'black',
    opacity: 0.8,
    marginTop: 10,
    shadowColor: Style.color,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height:4},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
    borderLeftWidth: 15
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Style.color,
    marginTop: 5,
    marginBottom: 5
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: Style.color
  },
  notesContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9
  },
})