import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from "react";
import { firebase } from "./config/firebase";

import Login from "./components/LoginComponent/LoginComponent";
import SignUp from "./components/SignUpComponent/SignupComponent";
import Dashboard from "./components/DashboardComponent/DashboardComponent";
import Header from "./components/HeaderComponent/HeaderComponent";
import Notes from "./components/NotesComponent/NotesComponent";
import AddNotes from "./components/AddNotesComponent/AddNotesComponent";
import DeleteNotes from "./components/DeleteNotesComponent/DeleteNotesComponent";

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);

  function handleNote(){
    let newNote = note;
    let newNotes = [newNotes, ...notes];
    setNotes(newNotes);
    setNote('');

  }

  // Handle user state changes
  function onAuthStateChange(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitle: () => <Header name="Test SignUp" />,
            headerStyle: {
              height: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#0F52BA",
              shadowColor: "#000",
              elevation: 25,
              marginVertical: 10
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              alignContent: 'center',
              justifyContent: 'center',
              fontSize: 25
            }
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
       <Stack.Screen
          name="Your Notes"
          options={{
            headerStyle: {
              headerTitle: () => <Header name="Your notes" />,
              height: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#0F52BA",
              shadowColor: "#000",
              elevation: 25,
              marginVertical: 10
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              alignContent: 'center',
              justifyContent: 'center',
              fontSize: 25
            }
          }}>
          {props => <Notes {...props} notes={notes} setNotes={setNotes} note={note} setNote={setNote} />}
          </Stack.Screen>
        <Stack.Screen
        name="Add Note"
        options={{
            headerStyle: {
              headerTitle: () => <Header name="Add Note" />,
              height: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#0F52BA",
              shadowColor: "#000",
              elevation: 25,
              marginVertical: 10
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              alignContent: 'center',
              justifyContent: 'center',
              fontSize: 25
            }
          }}>
          {props => <AddNotes {...props} note={note} setNote={setNote} handleNote={handleNote} />}
        </Stack.Screen>
        <Stack.Screen
        name="Delete Notes"
        options={{
            headerStyle: {
              headerTitle: () => <Header name="Delete Notes" />,
              height: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#0F52BA",
              shadowColor: "#000",
              elevation: 25,
              marginVertical: 10
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              alignContent: 'center',
              justifyContent: 'center',
              fontSize: 25
            }
          }}>
          {props => <DeleteNotes {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
