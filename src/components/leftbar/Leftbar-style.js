import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 68px;
  height: 100vh;
  position: sticky;
  top: 0;

  .leftbar {
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    color: darkgray;
    cursor: pointer;
  }

  .label {
    font-weight: 500;
  }

  .home-icon {
    margin-right: 6px;
  }

  @media only screen and (max-width: 768px) {
    .label {
      display: none;
    }

    .leftbar {
      margin-left: 18px;
    }
  }
  @media only screen and (max-width: 768px) {
    background-color: #228b22;
  }
`;
