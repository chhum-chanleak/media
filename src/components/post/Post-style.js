import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 68px;

  .card-media {
    height: 470px;
  }

  @media only screen and (max-width: 768px) {
    .card-media {
      height: 160px;
    }
  }
`;
