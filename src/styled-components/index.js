import { css, styled } from "styled-components";



export  const FlexContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

 export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

 export const FlexAlign = css`
  display: flex;
  align-items: center;
`;



export const CardWrapper = styled.div`
  border: 2px solid ${(props) => (props.active ? "#0ba57a" : "#ccc")};
  max-width: 400px;
  width: 100%;

  margin-bottom: 10px;

  border-radius: 5px;
`;

export const CardHeader = styled.div`
  ${FlexContainer}

  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#0eaf3226" : "white")};
`;

export const CardContent = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  background: ${(props) => (props.active ? "#0eaf3118" : "white")};
  padding: 10px;
`;

export const LeftSideContent = styled.div`
  ${FlexAlign}
`;

export const LeftSideText = styled.div`
  margin-left: 10px;
`;

export const RightSideContent = styled.div`
  h5 {
    font-weight: 700;

    color: #048050;
  }
`;

export const AccordionContent = styled.div`
  padding: 10px;
`;

export const BodyDetail = styled.div`
  ${FlexContainer}

  max-width: 160px;
`;

export const SelectDropDown = styled.select`
  margin: 15px 5px 0px;
  width: 100%;
  padding: 5px;
`;

export const ColorDropDown = styled.div`
  margin: 0px 5px;
`;

export const SizeDropDown = styled.div`
  h4 {
    margin-left: 8px;
  }
`;

export const DisplayContainer = styled.div`
  max-width: 400px;

  position: relative;
`;

export const DisplayContent = styled.div`
  ${FlexContainer}

  h5 {
    color: #048050;
  }
`;

export const PaymentButton = styled.button`
  background: #048050;
  color: #fff;
  font-size: 18px;

  padding: 10px;
  outline: none;
  border:none;
  border-radius: 3px;
  margin-top: 20px;
  width: 100%;
`;

export const CopyRightMsg = styled.span`
  position: absolute;
  right: 0;

  top: 108%;
  font-style: italic;
`;
