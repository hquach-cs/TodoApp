import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
} from "react-native";

const TASKS = [
  {
    id: 1,
    task: "Grocery",
    todos: [
      { id: 1, todo: "Banana", done: true },
      { id: 2, todo: "Onions", done: false },
    ],
  },
  {
    id: 2,
    task: "Homework",
    todos: [
      { id: 1, todo: "English", done: false },
      { id: 2, todo: "Math", done: false },
    ],
  },
];

const Header = () => {
  return (
    <View style={styles.header_container}>
      <Text style={styles.header_title}>Tasks List</Text>
    </View>
  );
};

const Task = ({ task, nav }) => {
  const getTodos = (task) => {
    var arr = task.todos.filter((todo) => todo.done === true);
    return arr.length + "/" + task.todos.length;
  };

  return (
    <TouchableHighlight
      onPress={() => nav.navigate("Task")}
      underlayColor={"#fff"}
      style={styles.task_container}
    >
      <View style={styles.task_container}>
        <Text style={styles.task_title}>{task.task}</Text>
        <Text style={styles.task_todo}>{getTodos(task)}</Text>
      </View>
    </TouchableHighlight>
  );
};

export const Home = ({ navigation }) => {
  const renderTask = ({ item }) => <Task task={item} nav={navigation} />;

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <Header />
      <View style={styles.flatlist_container}>
        <FlatList
          style={styles.flatlist}
          data={TASKS}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableHighlight
        style={styles.button_container}
        onPress={() => console.log("Adding Task")}
        underlayColor={"#fff"}
      >
        <View>
          <Text style={styles.button_title}>Add Task</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight * 1.5,
  },
  header_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header_title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  flatlist_container: { height: "70%" },
  task_container: {
    width: 200,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 5,
  },
  task_title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  task_todo: {
    color: "#959090",
    fontWeight: "bold",
  },
  button_container: {
    backgroundColor: "#fff",
    width: 200,
    borderRadius: 10,
    borderWidth: 2,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  button_title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
