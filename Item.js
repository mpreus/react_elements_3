const Item = (props) => (
	<li 
		className={props.active ? "enabled" : "disabled" }
		onClick={ () => props.changeStatus(props.id) } 
	>
		{props.name}
	</li>
);
/* każdemy z 'li' przypisujemy klasę w zależności od tego czy jest 'active' czy nie */