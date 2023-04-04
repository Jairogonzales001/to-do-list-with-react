import React from "react";
import TaskList from "../TaskList.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-flex">
		<div className="pt-5 text-center mx-auto">
			<h1>To do list</h1>
		</div>
		<div
			className="row px-5 d-flex justify-content-center"
			id="outerTask">
			<div
				className="text-center d-flex justify-content-center"
				id="innerTask">
				<TaskList />
			</div>
		</div>
	</div>
);
};

export default Home;
