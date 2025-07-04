import logo from "../assets/logo/logo_pizza.png"

function LogoPizza(props){

    let size = props.size;

    return(
        <img className={`${size}`} src={logo} />
    );
}

export default LogoPizza