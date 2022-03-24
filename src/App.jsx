import LandingPage from "./pages/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Switch } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/detail">
          <DetailProduct />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
