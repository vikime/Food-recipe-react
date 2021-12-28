import "./styles.css";
import Search from "./search";
import Header from "./header";
import Main from "./main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
function foodRecipe() {
  return (
    <div className="frontpage">
      <h1 style={{ color: "black", display: "flex", fontsize: "10px" }}>
        {" "}
        EASYMEALS
        <Header />
      </h1>

      <hr />
      <a href="app.js"> Home</a>
      <a href="app.js"> Categeries</a>
      <a href="app.js"> Recipe</a>
      <a href="app.js"> contact</a>
      <a href="app.js"> About-us</a>
      <div className="social">
        <a href="/youtube" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
        <a href="/facebook" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a href="/twitter" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a href="/instagram" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
      </div>
      <hr />
      <p> Filter Recipe:</p>
      <p>
        {" "}
        check multiple boxes below
        <br />
        to narrow recipe search result
      </p>
      <h3> By Season</h3>
      <input type="checkbox" value="spring" />
      <label>Spring</label>
      <br />
      <input type="checkbox" value="spring" />
      <label>Winter</label>
      <br />
      <input type="checkbox" value="spring" />
      <label>Summer</label>
      <br />
      <h3> By Meal</h3>
      <input type="checkbox" value="spring" />
      <label>Breakfast</label>
      <br />
      <input type="checkbox" value="spring" />
      <label>Lunch/Snacks</label>
      <br />
      <input type="checkbox" value="spring" />
      <label>Dinner</label>
      <br />
      <h3> Sweet Things</h3>
      <input type="checkbox" value="spring" />
      <label>Chocolate</label>
      <br />
      <input type="checkbox" value="spring" />
      <label>Cakes/ pie and tart</label>
      <br />
      <input type="checkbox" value="spring" />
      <label> Icecream</label>
      <br />
      <Search />
      <Main />
    </div>
  );
}

export default foodRecipe;
