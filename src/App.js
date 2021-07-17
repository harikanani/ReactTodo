import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "./firebase.config";
import TodoItem from "./Components/TodoItem";

const App = () => {
	const [todoInput, setTodoInput] = useState("");
	const [todos, setTodos] = useState([]);

	// fetch todos from firebase
	const getTodos = () => {
		db.collection("todos").onSnapshot((snapshot) => {
			setTodos(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
					isCompleted: doc.data().isCompleted,
				})),
			);
		});
	};

	// in useEffect, get todos from firebase and set them to state
	useEffect(() => {
		getTodos();
	}, []);

	const addTodo = (e) => {
		e.preventDefault();

		db.collection("todos").add({
			isCompleted: false,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			todo: todoInput,
		});
		setTodoInput("");
	};
	return (
		<div
			className="App"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<div>
				<h1>Harry's Todo App 🤩</h1>
				<form>
					<TextField
						id="standard-basic"
						value={todoInput}
						style={{
							width: "90%",
						}}
						onChange={(e) => setTodoInput(e.target.value)}
						label="Write todos"
					/>
					<Button
						variant="contained"
						type="submit"
						style={{ display: "none" }}
						onClick={(e) => addTodo(e)}>
						Submit
					</Button>
				</form>
				{todos.map((todo) => (
					<TodoItem
						todo={todo.todo}
						isCompleted={todo.isCompleted}
						id={todo.id}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
