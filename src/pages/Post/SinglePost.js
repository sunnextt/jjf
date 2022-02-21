import { CCard, CCardBody, CCardFooter, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState('');

  React.useEffect(() => {
    userService
      .getOnePosts(id)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {post ? (
        <>
          <CCard style={{ margin: '1rem 0' }}>
            <img src={post.image} alt="" />
            <CCardBody>
              <CCardTitle>{post.title}</CCardTitle>
              <CCardText>{post.body}</CCardText>
              <h6 style={{ fontWeight: 'bold' }}>Author: {post.author}</h6>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Time: {formateDate(post.updated_at)}</small>
            </CCardFooter>
          </CCard>
        </>
      ) : null}
    </div>
  );
};

export default SinglePost;
