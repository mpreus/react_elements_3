const Footer = (props) => {
	
	const activeItems = props.items.filter( item => item.active );

	const number = activeItems.length;
	
	return (
		<div>
			<h4>Podsumowanie zamówienia</h4>
			<p>Wybrałeś pozycji: {number}</p>
			<p className={number >= 3 ? "enabled" : "disabled" }>{ number >= 3 ? `Dostałeś 10% zniżki, suma wynosi: ${number * 9} złotych` : `Suma wynosi: ${number * 10} złotych` }</p>
		</div>
	)
}