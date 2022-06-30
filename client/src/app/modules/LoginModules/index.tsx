import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../../utils/auth";
import Layout from "../Layout";
import { loginActions } from "./slice";
import { selectSubmit } from "./slice/selectors";
import { Container, FormContainer, FormHeading, LoginButton } from "./styles";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const submit = useSelector(selectSubmit);

  if (auth.isLogin()) {
    history.push("/movies");
  }
  useEffect(() => {
    if (submit) {
      history.push("/movies");
      dispatch(loginActions.setSubmit(false));
    }
  }, [submit]);
  const onFinish = (values: any) => {
    dispatch(loginActions.login(values));
  };

  return (
    <Layout>
      <Container>
        <FormContainer>
          <FormHeading>Welcome to Movie Library</FormHeading>
          <Form name="normal_login" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <LoginButton type="primary" htmlType="submit">
                Log in
              </LoginButton>
            </Form.Item>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default Login;
