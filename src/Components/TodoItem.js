import React from "react";
import "./Todo.css";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "../firebase.config";

const TodoItem = ({ todo, isCompleted, id }) => {
	const toggleIsCompleted = () => {
		db.collection("todos").doc(id).update({
			isCompleted: !isCompleted,
		});
	};

	const deleteTodo = () => {
		db.collection("todos").doc(id).delete();
	};
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<ListItem>
				<ListItemText
					primary={todo}
					secondary={isCompleted ? "Completed ✅" : "In Progress ❓"}
				/>
			</ListItem>
			<Button onClick={() => toggleIsCompleted()}>
				{isCompleted ? "UnDone" : "Done"}
			</Button>
			<Button onClick={() => deleteTodo()}>X</Button>
		</div>
	);
};

export default TodoItem;
