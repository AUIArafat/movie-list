import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  background: #121212;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px !important;
`;

export const Logo = styled.div`
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #f5c51e;
  font-weight: 700;
  font-size: 28px;
  a {
    color: #f5c51e;
  }
`;

export const HeaderRightSide = styled.div`
  width: 50%;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  color: white;
`;
