import mealsImage from '../../assets/meals4.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>Biryani Hub</h1>
        <HeaderCartButton onShow={props.onShow}/>
      </header>
      <div className="main-image">
        <img alt="List of meals" src={mealsImage}/>
      </div>
    </>
  );
};

export default Header;
