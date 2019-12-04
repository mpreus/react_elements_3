class App extends React.Component {
	state = { 				/* zestaw dań do wyboru */
		items: [
			{ id: 1, name: "herbata", active: false },
			{ id: 2, name: "kawa", active: false },
      		{ id: 3, name: "ziemniaki z okrasą", active: false },
      		{ id: 4, name: "kasza ze skwarkami", active: false },
      		{ id: 5, name: "ryż z sosem pomidorowym", active: false },
      		{ id: 6, name: "zupa pomidorowa", active: false },
      		{ id: 7, name: "rosół drobiowy", active: false },
      		{ id: 8, name: "kompot", active: false },
      		{ id: 9, name: "kanapka z wędliną", active: false },
      		{ id: 10, name: "kanapka z serem", active: false }
		],
	}

	handleChangeStatus = (id) => {
		// console.log("Działa!"); /* żebu sprawdzić, czy kliknięcie działa (jeszcz przed zaimplementowaniem dalszej logiki) */
		console.log(id);

		const items = this.state.items.map( item => {
			if ( id === item.id) {
				item.active = !item.active
			} /* zmiana 'active' na 'nieaktive' i odwrotnie */
			return item
		})

		this.setState({
			items: items
		})
	}

	render() {
		return (
			<React.Fragment>
		{/* poniższe daje dostęp do całości 'items' w innych plikach (modułach) */}
				<Header items={this.state.items}/>
				<ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
			</React.Fragment>
		);
	}
}