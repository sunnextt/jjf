import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CButton, CCard, CCardBody, CCardFooter, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import { formateDate } from 'src/utils/formatDate';
import AddpostModal from './AddpostModal';
import { Link } from 'react-router-dom';
import { Player, LoadingSpinner } from 'video-react';

const AllLearnArticle = () => {
  const { article } = useSelector((state) => state.data);
  const [modal, setModal] = useState(false);

  const onClose = () => {
    setModal(false);
  };
  const showModal = () => {
    setModal(true);
  };

  var length = 100;


  return (
    <>
      <CButton onClick={showModal} color="secondary" shape="rounded-0" size="lg">
        Add Post
      </CButton>
      <AddpostModal show={modal} onClose={onClose} />
      <CRow>
        {article
          ? article.map(({ video_url, category, author, description, id, image, title, updated_at }) => (
              <CCol xs="12" sm="6" md="4" key={id}>
                <CCard style={{ margin: '1rem 0' }}>
                  <Player playsInline>
                    <source src={video_url} />
                    <LoadingSpinner />
                  </Player>
                  <CCardBody>
                    <CCardTitle>{title}</CCardTitle>
                    <CCardText>
                      {description.substring(0, length)}... <br />
                      <Link to={`/learn/${id}`}>More Details</Link>
                    </CCardText>
                    <h6 style={{ fontWeight: 'bold' }}>Author: {author}</h6>
                    <div>
                      <h6>Category: {category[0].name}</h6>
                      {/* <p>Created at: {formateDate(category[0].created_at)}</p>
                      <p>Created at: {formateDate(category[0].updated_at)}</p> */}
                    </div>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Created at: {formateDate(updated_at)}</small>
                    <br />
                    <small className="text-medium-emphasis">Updates at: {formateDate(updated_at)}</small>
                  </CCardFooter>
                </CCard>
              </CCol>
            ))
          : null}
      </CRow>
    </>
  );
};

export default AllLearnArticle;
