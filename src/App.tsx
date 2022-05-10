import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";

import './styles/styles.css'


interface ITask {
	id: number,
	nameTask: string,
}

function App() {

	const [task, setTask] = useState<string>("")
	const [todoList, setTodoList] = useState<ITask[]>([])


	function addTask(){
		const idRandom = (num: number) => Math.floor(Math.random() * num)

		console.log(idRandom(10))
	}

	return (
		<div className="App">

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
					value={task}
					onChange={(event) => setTask(event.target.value)}
				/>

				<button type="submit" onClick={addTask} className="btn-header">Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			<TodoTask />
			
		</div>
	);
}

export default App;
