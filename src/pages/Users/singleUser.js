import React from "react";
import userService from "src/services/user.service";
import { useParams, useRouteMatch } from "react-router";
import { commaDelimitNumber } from "src/utils/formatPrice";
import { Link } from "react-router-dom";
const { CRow, CCol, CCard, CCardBody } = require("@coreui/react");

const SingleUser = (props) => {
  const { url, path } = useRouteMatch();
  const [user, setUser] = React.useState("");
  const { userID } = useParams();
  React.useEffect(() => {
    userService
      .getUser(userID)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <CRow>
        <CCol>
          {" "}
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <div
                    className="c-avatar"
                    style={{
                      width: "7.5rem",
                      height: "7.5rem",
                    }}
                  >
                    <img src={user.image} alt="user" className="c-avatar-img" />
                  </div>
                  <h1
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {user.name}
                  </h1>
                </CCol>
                <CCol md="4" className="mt-5">
                  <CRow>
                    <CCol>
                      <p>{user.phone}</p>
                      <p>{user.email}</p>
                    </CCol>
                    <CCol>
                      <p>Wallet Balance</p>
                      <h1>&#x20A6;{commaDelimitNumber(+user.wallet)}</h1>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default SingleUser;
