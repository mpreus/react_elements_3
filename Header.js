const Header = (props) => {
	/* do tablicy zapisujemy tylko te, które są aktywne: */
	const activeItems = props.items.filter( item => item.active );
	/* zmiana stanu w 'itemów' a App.js ma wpływ na wielkość tej tablicy */

	const number = activeItems.length;
	return (
		<header> {/* 'items' to lista dań możliwych do zamówienia */}
				{/* 'activeItems to lista aktywnych, 'klikniętych' dań */}
			<h1>Twoje menu</h1>
			<p>zamów klikając w wybraną pozycję</p>
			<h4>Wielkość zamówienia (liczba wybranych pozycji): {number}</h4>
			<h3>Do zapłaty: {number ? `${number * 10} złotych` : "0 złotych"} </h3>
		{/* jesli 'number' nie fałszywy (różny od zera) ... */}
		</header>
	)
}