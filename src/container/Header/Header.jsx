import React from 'react';
import { SubHeading } from '../../components';
import{images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className= "app__header app__wrapper section__padding" id= "Home">
    <div className= "app__wrapper_info">
      <SubHeading title= "Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <button type="button" className="custom__button">Explore Menu</button>
      <p className="p__opensans" style={{ margin: '2rem 0'}} > Exquisitely cooked local and continental dishes, cooked and served to your taste since 1989 </p>
    </div>
    <div className= "app__wrapper_img">
      <img src= {images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
