import React, { useState, useEffect } from "react";

const TaskList = () => {
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);

	const handleInput = (e) => {
		if (e.keyCode === 13 && e.target.value != "") {
			if (e.target.value.trim() === "") {
				alert("Error 404: words not found");
				setTask("");
			} else {
				setTask(e.target.value);
				setList([...list, task]);
				setTask("");
			}
		}
	};

	return (
		<div className="d-inline justify-content-center w-100" id="whole">
			<div className="fw-light">
				<input
					className="form-control fw-light ps-5"
					id="inputZone"
					type="text"
					placeholder={
						list.length === 0
							? "what needs to be done?"
							: "What needs to be done?"
					}
					onChange={(event) => setTask(event.target.value)}
					onKeyDown={(e) => {
						handleInput(e);
					}}
					value={task}
				/>
			</div>
			<div id="list">
				<ul>
					{list.map((singleTask, i) => {
						return (
							<li
								className="d-flex justify-content-between ps-5 py-2 text-muted fw-light fs-5"
								key={i}>
								{singleTask}{" "}
								<div
									className="listDelete"
									onClick={() => {
										setList(
											list.filter(
												(deleteTask, j) => j !== i
											)
										);
									}}>
									x
								</div>
							</li>
						);
					})}
				</ul>
				<div className="footer">
					<span id="footerText">
						{list.length} {list.length === 1 ? "item" : "items"}{" "}
						left
					</span>
				</div>
			</div>
		</div>
	);
};
export default TaskList;