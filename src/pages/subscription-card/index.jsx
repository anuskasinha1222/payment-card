import React  from 'react'

import styled from 'styled-components';
import PaymentCard from '../../components/payment-card';
import { cardData } from '../../utils/card-data';

 

const AppWrapper = styled.div`

  padding: 20px;

  margin: 10px auto;

`;





 

const SubscriptionCard = () => {

    return (

        <AppWrapper>
            <PaymentCard data={cardData} />
        </AppWrapper>

    );

}

 

export default SubscriptionCard;

 