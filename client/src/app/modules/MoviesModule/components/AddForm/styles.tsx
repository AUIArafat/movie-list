import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
export const FormContainer = styled.div`
  width: 520px;
  padding: 24px;
  background: #121212;
  border-radius: 8px;
  box-shadow: 0px 8px 25px -6px rgba(24, 39, 75, 0.12),
    0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  label {
    color: white;
    font-weight: bold;
  }
`;

export const FormHeading = styled.h1`
  text-align: center;
  font-weight: bold;
  padding: 16px 0px;
  font-size: 24px;
  color: #f5c51e;
`;

export const AddButton = styled(Button)`
  width: 100%;
`;
