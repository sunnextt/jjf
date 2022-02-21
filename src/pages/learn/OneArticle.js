import { CCard, CCardBody, CCardFooter, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';
import { Player } from 'video-react';


const OneArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = React.useState('');

  React.useEffect(() => {
    userService
      .getOneLearnArticle(id)
      .then((res) => {
        setArticle(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {article ? (
        <>
          <CCard style={{ margin: '1rem 0' }}>
            <Player>
              <source src={article.video_url} />
            </Player>
            <CCardBody>
              <CCardTitle>{article.title}</CCardTitle>
              <CCardText>{article.description}</CCardText>
              <h6 style={{ fontWeight: 'bold' }}>Author: {article.author}</h6>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Created at: {formateDate(article.updated_at)}</small>
              <br />
              <small className="text-medium-emphasis">Updates at: {formateDate(article.updated_at)}</small>
            </CCardFooter>
          </CCard>
        </>
      ) : null}
    </div>
  );
};

export default OneArticle;
