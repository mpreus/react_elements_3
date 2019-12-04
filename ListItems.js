const ListItems = (props) => {
	const items = props.items.map( item => ( <Item 
		key={item.id}  			/* dla każdego elementu zamówienia tworzymy komponent - tu zasada tworzenia, treść w pliku 'Item.js' */
		name={item.name}
		active={item.active}
		/> ) ) 
	return (
		<div className="list">
			<h2>Twoje zamówienie</h2>
			<ul>
				{items} {/* to wstawiamy te nowo utworzone komponenty, które treść biorą z pliku 'Item.js' */}
			</ul>
		</div>
		
	)
}