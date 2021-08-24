import React from "react";
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
      onPress={() =>
        nav.navigate("Task", {
          TaskObj: task,
        })
      }
      underlayColor={"#252525"}
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
  const [Todos, setTodos] = React.useState(TASKS);
  const renderTask = ({ item }) => <Task task={item} nav={navigation} />;
  const [text, onChangeText] = React.useState(null);

  const addTask = () => {
    setTodos([
      ...Todos,
      {
        id: Todos.length + 1,
        task: text,
        todos: [],
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <Header />
      <View style={styles.flatlist_container}>
        <FlatList
          style={styles.flatlist}
          data={Todos}
          renderItem={renderTask}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      {/* <TouchableHighlight
        style={styles.button}
        onPress={() => console.log("Adding Task")}
        underlayColor={"252525"}
      >
        <View style={styles.button_container}>
          <FontAwesome5
            name="plus"
            color={"#fff"}
            size={16}
            style={{ paddingRight: 5 }}
          />
          <Text style={styles.button_title}>Add Task</Text>
        </View>
      </TouchableHighlight> */}
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header_title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  flatlist_container: { height: "70%" },
  task_container: {
    width: 200,
    height: 45,
    borderColor: "#fff",
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
    color: "#fff",
  },
  task_todo: {
    color: "#959090",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#252525",
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
    borderColor: "#fff",
  },
  button_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button_title: {
    fontWeight: "bold",
    fontSize: 20,
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
