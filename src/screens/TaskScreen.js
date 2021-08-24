import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Task = ({ route, navigation }) => {
  const { TaskObj } = route.params;
  const [Task, setTask] = useState(TaskObj);
  const [Todos, setTodos] = useState(Task.todos);
  const [update, setUpdate] = useState(false);
  const [changed, setChange] = useState(false);
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const renderTodo = ({ item, index }) => {
    return (
      <View style={styles.todo_container}>
        <TouchableHighlight
          style={styles.todo_button}
          underlayColor={"#252525"}
          onPress={() => {
            setChange(true);
            setUpdate(!update);
            let updatedItem = item;
            updatedItem.done = !item.done;
            let updatedTodos = Todos;
            updatedTodos[index] = updatedItem;
            setTodos(updatedTodos);
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {item.done ? <FontAwesome5 name="check" size={13} /> : <View />}
          </View>
        </TouchableHighlight>
        <Text
          style={[
            styles.todo_title,
            {
              textDecorationLine: item.done ? "line-through" : "none",
            },
          ]}
        >
          {item.todo}
        </Text>
      </View>
    );
  };

  const addTask = () => {
    setTodos([...Todos, { id: Todos.length + 1, todo: text, done: false }]);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.header_container}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color={"#fff"} />
        </TouchableHighlight>
        <View style={styles.header_title_container}>
          <Text style={styles.header_title}>{Task.task}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 60,
            justifyContent: "space-between",
          }}
        >
          {changed ? (
            <FontAwesome5 name="check" size={24} color={"#fff"} />
          ) : (
            <View />
          )}
          <FontAwesome5 name="plus" size={24} color={"#fff"} />
        </View>
      </View>
      <View style={styles.flatlist_container}>
        <FlatList
          style={styles.flatlist}
          data={Todos}
          extraData={update}
          renderItem={renderTodo}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="New Task"
          placeholderTextColor="#afafaf"
        />
        <TouchableHighlight
          onPress={() => addTask()}
          underlayColor={"#252525"}
          style={styles.button}
        >
          <FontAwesome5 name="plus" size={18} color="#fff" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight * 1.5,
  },
  header_container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_title: {
    fontSize: 24,
    color: "#fff",
  },
  header_title_container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist_container: { height: "70%" },
  todo_container: {
    width: 200,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 5,
  },
  todo_button: {
    width: 15,
    height: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  todo_title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  input: {
    color: "#fff",
    borderColor: "#fff",
    width: 200,
    height: 50,
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 25,
    fontSize: 18,
  },
  button: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
