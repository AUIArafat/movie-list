import { DatePicker, Form, Input, Rate, Select, Switch } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { moviesActions } from "../../slice";
import { selectSubmit } from "../../slice/selectors";
import { AddButton, Container, FormContainer, FormHeading } from "./styles";
const { Option } = Select;

const AddMovie = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const submit = useSelector(selectSubmit);
  const onFinish = (fieldsValue: any) => {
    if (!fieldsValue.isFavorite) fieldsValue["isFavorite"] = true;
    const data = {
      ...fieldsValue,
      releaseDate: fieldsValue["releaseDate"].format("YYYY-MM-DD"),
    };
    dispatch(moviesActions.addMovie(data));
  };

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

  useEffect(() => {
    if (submit) {
      history.push("/movies");
      dispatch(moviesActions.setSubmit(false));
    }
  }, [submit]);
  return (
    <Container>
      <FormContainer>
        <FormHeading>Add New Movie</FormHeading>
        <Form name="add_movie" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please input movie!",
              },
            ]}
          >
            <Input placeholder="Movie Title" />
          </Form.Item>
          <Form.Item
            name="posterPath"
            label="Poster Path"
            rules={[
              {
                required: true,
                message: "Please input Poster Path!",
              },
              {
                type: "url",
                warningOnly: true,
                message: "Poster Path is not a valid url",
              },
            ]}
          >
            <Input placeholder="Poster Path" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[
              { required: true, message: "Please select your category!" },
            ]}
          >
            <Select placeholder="Please select a category">
              {categoryOptions.map((option) => (
                <Option value={option.value}>{option.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="rating"
            label="Rating"
            rules={[
              {
                required: true,
                message: "Please add rating for this movie",
              },
            ]}
          >
            <Rate />
          </Form.Item>
          <Form.Item
            name="releaseDate"
            label="Release Date"
            rules={[
              {
                type: "object" as const,
                required: true,
                message: "Please add release date",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="isFavorite" label="Is Favorite">
            <Switch checked />
          </Form.Item>

          <Form.Item>
            <AddButton type="primary" htmlType="submit">
              Add
            </AddButton>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddMovie;
