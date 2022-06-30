import { Affix, Button, Checkbox, Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

import { moviesActions } from "../../slice";
import { selectAllMovies } from "../../slice/selectors";
import {
  CheckBoxContainer,
  Container,
  Header,
  ListContainer,
  Sidebar,
} from "./styles";
import MovieCard from "../../../../components/MovieCard";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import useQuery from "../../../../../hooks/useQuery";

const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector(selectAllMovies);
  const params = useQuery();

  const checkedCategory = params.get("categories")
    ? params.get("categories")?.split(",")
    : null;

  useEffect(() => {
    if (checkedCategory && checkedCategory.length > 0)
      dispatch(
        moviesActions.getMoviesByFilter(checkedCategory?.toString() || "")
      );
    else dispatch(moviesActions.getAllMovies());
  }, [params]);
  const categoryOptions = [
    {
      label: "Action",
      value: "action",
    },
    {
      label: "Comedy",
      value: "comedy",
    },
    {
      label: "Drama",
      value: "drama",
    },
    {
      label: "Fantasy",
      value: "fantasy",
    },
    {
      label: "Horror",
      value: "horror",
    },
    {
      label: "Mystery",
      value: "mystery",
    },
    {
      label: "Romance",
      value: "romance",
    },
    {
      label: "Thriller",
      value: "thriller",
    },
  ];
  const onChange = (checkedValues: CheckboxValueType[]) => {
    history.push("/movies?categories=" + checkedValues.toString());
  };
  return (
    <Container>
      <Affix offsetTop={60}>
        <Sidebar>
          <CheckBoxContainer>
            <h1>Filter By Category</h1>
            <Checkbox.Group
              options={categoryOptions}
              defaultValue={checkedCategory || ['']}
              onChange={onChange}
            />
          </CheckBoxContainer>
        </Sidebar>
      </Affix>
      <ListContainer>
        <Header>
          <h1>List of Movies</h1>
          <Button onClick={() => history.push("/movies/add")}>
            <PlusOutlined /> Add Movie
          </Button>
        </Header>
        <Row gutter={[20, 20]}>
          {movies &&
            movies.map((movie) => (
              <Col xs={12} sm={8} md={8} lg={6} key={movie._id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
        </Row>
      </ListContainer>
    </Container>
  );
};

export default List;
