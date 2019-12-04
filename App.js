class App extends React.Component {
	state = { 				/* zestaw dań do wyboru */
		items: [
			{ id: 1, name: "herbata", active: true },
			{ id: 2, name: "kawa czarna", active: false },
      		{ id: 3, name: "ziemniaki", active: false },
      		{ id: 4, name: "kasza", active: false },
      		{ id: 5, name: "ryż z sosem pomidorowym", active: false },
      		{ id: 6, name: "zupa pomidorowa", active: false },
      		{ id: 7, name: "rosół z kury", active: false },
      		{ id: 8, name: "pieczywo", active: false },
		],

	}
	render() {
		return (
			<React.Fragment>
				<Header items={this.state.items}/>
				<ListItems />
			</React.Fragment>
		);
	}
}