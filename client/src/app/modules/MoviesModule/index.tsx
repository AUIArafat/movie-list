import { Switch } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import Layout from "../Layout";
import AddMovie from "./components/AddForm";
import List from "./components/List";
import { Container } from "./styles";

const Movies = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <PrivateRoute path="/movies" exact component={List} />
          <PrivateRoute path="/movies/add" exact component={AddMovie} />
        </Switch>
      </Container>
    </Layout>
  );
};

export default Movies;
