import React, { useState } from "react";
import { AccordionContent, BodyDetail, CardContent, CardHeader, CardWrapper, ColorDropDown, CopyRightMsg, DisplayContainer, DisplayContent, LeftSideContent, LeftSideText, PaymentButton, RightSideContent, SelectDropDown, SizeDropDown } from "../styled-components";

const PaymentCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleCard = (cardId) => {
    setActiveIndex(activeIndex === cardId ? null : cardId);
  };

  const handleCard = (e) => {
    const val = e.target.value;

    //write here our logic
  };

  return (
    <>
      {data?.map((ele) => (
        <CardWrapper key={ele?.id} active={activeIndex === ele.id}>
          <CardHeader
            active={activeIndex === ele.id}
            onClick={() => toggleCard(ele?.id)}
          >
            <LeftSideContent>
              <input
                type="radio"
                id="cardId"
                checked={activeIndex === ele.id}
                onChange={handleCard}
              />

              <LeftSideText>
                <h4>{ele?.type}</h4>

                <p>{ele?.title}</p>
              </LeftSideText>
            </LeftSideContent>

            <RightSideContent>
              <h5>{ele?.offerType}</h5>

              <h4>{ele?.offPrice}</h4>
            </RightSideContent>
          </CardHeader>

          <CardContent active={activeIndex === ele.id}>
            <AccordionContent>
              <BodyDetail>
                <SizeDropDown>
                  <h4>Size</h4>

                  <SelectDropDown>
                    <option value="$">$</option>

                    <option value="$100">$100</option>

                    <option value="$300">$300</option>
                  </SelectDropDown>

                  <SelectDropDown>
                    <option value="$">$</option>

                    <option value="$100">$100</option>

                    <option value="$300">$300</option>
                  </SelectDropDown>
                </SizeDropDown>

                <ColorDropDown>
                  <h4>Color</h4>

                  <SelectDropDown>
                    <option value="color">Color</option>

                    <option value="red">Red</option>

                    <option value="blue">Blue</option>
                  </SelectDropDown>

                  <SelectDropDown>
                    <option value="color">Color</option>

                    <option value="red">Red</option>

                    <option value="blue">Blue</option>
                  </SelectDropDown>
                </ColorDropDown>
              </BodyDetail>
            </AccordionContent>
          </CardContent>
        </CardWrapper>
      ))}

      <DisplayContainer>
        <DisplayContent>
          <h5>Free 2 days shipping</h5>

          <h4>Total : DKK 360.00</h4>
        </DisplayContent>

        <PaymentButton>+ Add to Cart</PaymentButton>

        <CopyRightMsg>&copy; Powered by Pumper</CopyRightMsg>
      </DisplayContainer>
    </>
  );
};

export default PaymentCard;
