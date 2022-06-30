import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 520px;
  border-radius: 8px;
  border: 1px solid #121212;
  background: #121212;
  box-shadow: 0px 8px 25px -6px rgba(24, 39, 75, 0.12),
    0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const CardBody = styled.div`
  padding: 16px;
  color: white;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const MovieRating = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;

export const MovieCategory = styled.span`
  border: 1px solid #ccc;
  height: 36px;
  width: auto;
  padding: 8px;
  border-radius: 20px;
  margin-top: 16px;
  text-transform: capitalize;
  text-align: center;
`;

export const ReleaseDate = styled.div`
  margin: 8px 0px 16px;
`;
