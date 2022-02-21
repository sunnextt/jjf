import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import { Link } from 'react-router-dom';
import AddCoinModal from './AddCoinModal';

const AllCoin = () => {
  const { coin } = useSelector((state) => state.data);
  const [modal, setModal] = useState(false);

  const onClose = () => {
    setModal(false);
  };
  const showModal = () => {
    setModal(true);
  };

  console.log(coin);

  return (
    <>
      <CButton onClick={showModal} color="secondary" shape="rounded-0" size="lg">
        Add Post
      </CButton>
      <AddCoinModal show={modal} onClose={onClose} />
      <CRow>
        {coin
          ? coin.map(({ coinId, name, symbol, price, image, total_profit, price_change_percentage }) => (
              <CCol key={coinId} xs="6" sm="3" md="3">
                <CCard key={coinId} style={{ margin: '1rem 0' }}>
                  <img src={image} alt="" width="50%" style={{ margin: '0 auto' }} />
                  <CCardBody>
                    <CCardTitle>{name}</CCardTitle>
                    <CCardText>Symbol: {symbol}</CCardText>
                    <CCardText>price: ${price}</CCardText>
                    <CCardText>Total profit: {total_profit}</CCardText>
                    <CCardText>Price Change Percentage: {price_change_percentage}</CCardText>
                    <CCardText>
                      <Link to={`/coin/${coinId}`}>More Details</Link>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
            ))
          : null}
      </CRow>
    </>
  );
};

export default AllCoin;
