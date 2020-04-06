import React from "react";

// Bad
// import Cards from "./components/Cards/Card";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";


class App extends React.Component {
	state = {
		data: {},
	};

	async componentDidMount() { //mount 전까지 데이터 기다림
		const fetchedData = await fetchData();
		this.setState({data: fetchedData });
	}

	render() {
		const {data} = this.state;
		console.log(data);

		return (
			<div className={styles.container}>
				<Cards data={data}/>
				<CountryPicker />
				<Chart />
			</div>
		);
	}
}

export default App;