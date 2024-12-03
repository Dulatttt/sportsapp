import Logo from '../assets/images/menu-btn.svg';
import '../assets/style/style.css';
function Header() {
    return(

        <div className='header'>
       <img src={Logo} alt="" />           
        </div>
    )
}

export default Header;