import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/home-page.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-up/sign-in-and-up.component";
import Header from "./components/header/header.component";

// const HatsPage = props => {
//   console.log(props);
//   return (
//     <div>
//       {/* <button onClick={() => props.history.push("/topics")}>Topics </button>
//       <Link to={`${props.match.url}/12`}>topic link 12</Link>
//       <Link to={`${props.match.params.url}/12`}>topic link </Link> */}

//       <h1>HATS PAGE</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
