import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Header(){
  return(
    <nav>
      <div className='IconContainer'>
        <div className = "SocialIcons">
        <FontAwesomeIcon icon={faFacebook} size="1x" style={{ margin: "10px" }} />
        <FontAwesomeIcon icon={faTwitter} size="1x" style={{ margin: "10px" }} />
        <FontAwesomeIcon icon={faInstagram} size="1x" style={{ margin: "10px" }} />
        </div>
        <h1>Flower shop</h1>
        <div className = "Icons">
          <FontAwesomeIcon icon={faShoppingBasket} size="1x" style={{ margin: "10px" }} />
          <FontAwesomeIcon icon={faUser} size="1x" style={{ margin: "10px" }} />
        </div>
      </div>
      <div className = "Bar">
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="products.asp">Products</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </div>
    </nav>
  );
}


function Button(){
  return(
    <button>View All Items</button>
  );
}


function Hero(){
  return(
    <div className = "Ads">
      <h1>Fantastic Features That Makes You Look Cool</h1>
      <p>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. 
      Nullam pulvinar felis at metus.</p>
      <Button />

    </div>
  );
}


function Footer(){
  return(
    <>I'm a footer</>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
