const Item = (props) => (
	<li style={props.active ? {fontWeight:"bold" } : {color:"grey"} }>{props.name}</li>
)
