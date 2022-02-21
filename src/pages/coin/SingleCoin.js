import React, { useEffect } from 'react';
import {  CCard, CCardBody, CCardFooter, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import userService from 'src/services/user.service';
import { useParams } from 'react-router-dom';
import { Player, LoadingSpinner } from 'video-react';
import { formateDate } from 'src/utils/formatDate';

const SingleCoin = () => {
  const { id } = useParams();
  const [coin, setCoin] = React.useState('');
  const [info, setInfo] = React.useState('');
  console.log(id);
  console.log(coin);

  React.useEffect(() => {
    userService
      .getOneCoin(id)
      .then((res) => {
        console.log(res);
        setCoin(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    if (coin) {
      let coinInfo;
      coin.coin_info.map((item) => (coinInfo = item));
      setInfo(coinInfo);
    }
  }, [coin]);

  return (
    <>
      <CRow>
        {coin ? (
          <CCol key={coin.coinId} xs>
            <CCard key={coin.coinId} style={{ margin: '1rem 0' }}>
              <img src={coin.image} alt="" width="20%" style={{ margin: '0 auto' }} />
              <CCardBody>
                <CCardTitle>{coin.name}</CCardTitle>
                <CCardText>{coin.description}</CCardText>
                <CCardText>Symbol: {coin.symbol}</CCardText>
                <CCardText>price: ${coin.price}</CCardText>
                <CCardText>Market Rank: ${coin.market_rank}</CCardText>
                <CCardText>Total profit: {coin.total_profit}</CCardText>
                <CCardText>Price Change Percentage: {coin.price_change_percentage}</CCardText>
                <CCardText>Max Supply: {coin.max_supply}</CCardText>
                <CCardText>Circulating Supply: {coin.circulating_supply}</CCardText>
                <CCardText>Total Supply: {coin.total_supply}</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        ) : null}
      </CRow>

      <CRow>
        <CCol>
          <h5>Coin Info</h5>
          {info ? (
            <>
              <CCard style={{ margin: '1rem 0' }}>
                <Player >
                  <source src={info.video_url} />
                  <LoadingSpinner />
                </Player>
                <CCardBody>
                  <CCardTitle>{info.title}</CCardTitle>
                  <CCardText>{info.body}</CCardText>
                </CCardBody>
                <CCardFooter>
                  <small className="text-medium-emphasis">Created at: {formateDate(info.updated_at)}</small>
                  <br />
                  <small className="text-medium-emphasis">Updates at: {formateDate(info.updated_at)}</small>
                </CCardFooter>
              </CCard>
            </>
          ) : null}
        </CCol>
      </CRow>
    </>
  );
};

export default SingleCoin;
