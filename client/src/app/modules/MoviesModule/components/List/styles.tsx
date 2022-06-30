import styled from "styled-components";

export const Container = styled.div`
  margin: 64px;
  display: flex;
  width: 100%;
`;

export const Sidebar = styled.div`
  min-width: 230px;
  border: 1px solid #121212;
  border-radius: 8px;
  margin-right: 24px;
  height: 85vh;
  background: #121212;
  box-shadow: 0px 8px 25px -6px rgba(24, 39, 75, 0.12),
    0px 12px 42px -4px rgba(24, 39, 75, 0.12);
`;

export const CheckBoxContainer = styled.div`
  padding: 24px;
  h1 {
    color: white;
    text-transform: uppercase;
  }
  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
    .ant-checkbox-group-item {
      font-size: 20px !important;
      color: white;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  h1 {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
`;
