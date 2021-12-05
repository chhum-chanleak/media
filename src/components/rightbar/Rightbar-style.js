import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 54px;
  margin: 16px 16px;
  position: sticky;
  top: 0;

  .friends-label {
    font-weight: 500;
    margin: 12px 16px;
  }

  .gallery-label {
    font-weight: 500;
    margin: 12px 16px;
  }

  .category-label {
    font-weight: 500;
    margin: 12px 16px;
  }

  .links {
    margin: 0 4px;
  }

  @media only screen and (max-width: 768px) {
    /* display: none; */
  }
`;
