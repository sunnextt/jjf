import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CButton, CCard, CCardBody, CCardFooter, CCardLink, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import { formateDate } from 'src/utils/formatDate';
import AddpostModal from './AddpostModal';
import { Link } from 'react-router-dom';

const Post = () => {
  const { post } = useSelector((state) => state.data);
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
        {post
          ? post.map(({ author, body, id, image, title, updated_at }) => (
              <CCol xs="12" sm="6" md="4">
                <CCard key={id} style={{ margin: '1rem 0' }}>
                  <img src={image} alt="" />
                  <CCardBody>
                    <CCardTitle>{title}</CCardTitle>
                    <CCardText>
                      {body.substring(0, length)}... <br />
                      <Link to={`/post/post-${id}`}>More Details</Link>
                    </CCardText>
                    <h6 style={{ fontWeight: 'bold' }}>Author: {author}</h6>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Time: {formateDate(updated_at)}</small>
                  </CCardFooter>
                </CCard>
              </CCol>
            ))
          : null}
      </CRow>
    </>
  );
};

export default Post;
