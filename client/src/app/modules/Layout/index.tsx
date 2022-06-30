import { Layout as AntLayout, notification, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { layoutActions } from "./slice";
import {
  selectError,
  selectLoading,
  selectSuccessMsg,
} from "./slice/selectors";
const { Content } = AntLayout;

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const error = useSelector(selectError);
  const success = useSelector(selectSuccessMsg);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      notification.error({
        message: error,
      });
      dispatch(layoutActions.setError(null));
    }
    if (success) {
      notification.success({
        message: success,
      });
      dispatch(layoutActions.setSuccessMsg(null));
    }
  }, [error, success]);
  return (
    <AntLayout>
      <Navbar />
      <Content>
        <Spin spinning={loading}>{children}</Spin>
      </Content>
    </AntLayout>
  );
}
