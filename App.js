import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { CheckBox, ListItem, Input} from 'react-native-elements';
import { FlatList, TouchableOpacity, Button, StyleSheet, Text, View, TextInput } from 'react-native';
/*
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
*/
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState(
    [
      {id:1, title:"Aller à la pharmacie"},
      {id:2, title:"Passer le balai"},
      {id:3, title:"Regarder Spaced"},
    ]
  );
  const [task, setTask] = useState('');

  function changeTask(text) {
    setTask(text);
    console.log(task)
  }

  function addTask() {
    let newTask = {
      id: uuidv4(),
      title: task
    }
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    let temptask = tasks.filter(task => task.id !== id);
    setTasks(temptask)
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputGroup}>
        <Input placeholder='Ajouter une tâche' value={task} onChangeText={text => changeTask(text)}/>
            {/* <TextInput style={styles.input} value={task} onChangeText={text => changeTask(text)}/> */}
            <Button title="Add a task" color="lightseagreen" onPress={addTask}/>
        </View>
        {/* <FlatList
            data={tasks}
            renderItem={({item}) => 

              <View style={styles.task}> 
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteTask(item.id)}>
                    <AntDesign name="closecircleo" size={32} color="white" />
                  </TouchableOpacity>
              </View>}
          keyExtrator={item => item.id.toString()}
        /> */}
        <View>
  {
    tasks.map((task, i) => (
      <ListItem
        key={i}
        title={task.title}
        titleStyle={styles.styletitle}
        contentContainerStyle={styles.listitems} 
        style={styles.listitems}
      />
    ))
  }
      </View>
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7,
    marginRight: 5
  },
  inputGroup: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row"
  },
  task: {
    padding: 20,
    margin: 5,
    width: 300,
    backgroundColor: 'lightseagreen',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskTitle: {
    color: 'white',
    fontSize: 20
  },
  listitems: {
    padding: 20,
    margin: 5,
    width: 300,
    backgroundColor: 'lightseagreen',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  styletitle: {
    backgroundColor: 'lightseagreen',
    color: "white"
  }
});
