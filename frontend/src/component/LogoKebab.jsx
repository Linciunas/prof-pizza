import logo from "../assets/logo/logo_kebab.png"

function LogoKebab(props){

    let size = props.size;

    return(
        <img className = {`${size}`} src = {logo}></img>
    );
}

export default LogoKebab