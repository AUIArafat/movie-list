import LoginOutlined from "@ant-design/icons/LoginOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import { Header, HeaderRightSide, Logo } from "./styles";
import { auth } from "../../../../utils/auth";
import { DecodedUserInfo } from "../../../../rootState";

export default function Navbar() {
  const history = useHistory();
  const currentUser: DecodedUserInfo | null = auth.getUserData();
  return (
    <Header>
      <Logo>
        <Link to="/">Movie Library</Link>
      </Logo>
      <HeaderRightSide>
        {currentUser ? (
          <>
            <span>{currentUser.userInfo.userName}, Signed in</span>{" "}
            <Button
              onClick={() => {
                auth.logout();
                history.push("/login");
              }}
              type={"primary"}
            >
              <LogoutOutlined /> Sign Out
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button type={"primary"}>
              <LoginOutlined /> Sign In
            </Button>
          </Link>
        )}
      </HeaderRightSide>
    </Header>
  );
}
