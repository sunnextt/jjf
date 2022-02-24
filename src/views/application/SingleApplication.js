import { CCard, CCardBody, CCardFooter, CCardText, CCardTitle, CCol, CRow, CTableRow } from '@coreui/react-pro';
import React from 'react';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';

const styles = {
  fontWeight: 'bold',
  marginLeft: '1rem'
};

const SingleApplication = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState('');
  const [application, setApplication] = React.useState('');

  React.useEffect(() => {
    userService
      .getOneUser(id)
      .then(({ data }) => {
        setUser(data);
        if (data) {
          setApplication(data.application);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  console.log(id);
  console.log(application);

  return (
    <div>
      <CCardTitle>Single User</CCardTitle>

      <CRow>
        {user ? (
          <CCol xs>
            <CCard style={{ margin: '1rem 0' }}>
              <img src={user.application.passport} alt="" width="20%" style={{ margin: '0 auto' }} />
              <CCardBody>
                <CCardText>
                  Name:
                  <span style={styles}>
                    {user.first_name} {user.last_name}
                  </span>
                </CCardText>
                <CCardText>
                  email: <span style={styles}>{user.email}</span>
                </CCardText>
                <CCardText>
                  Phone Number: <span style={styles}>{user.phone_number}</span>
                </CCardText>
                <CCardText>
                  Role: <span style={styles}>{user.role}</span>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ display: 'flex', justifyContent: 'space-between' }}>
                <small className="text-medium-emphasis">Created at: {formateDate(user.created_at)}</small>
                <small className="text-medium-emphasis">Created at: {formateDate(user.updated_at)}</small>
              </CCardFooter>
            </CCard>
          </CCol>
        ) : null}
      </CRow>
      <CCardTitle>User Application</CCardTitle>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div>
                <CCardText>
                  First Name: <span style={styles}> {application.firstname}</span>
                </CCardText>
                <CCardText>
                  Lastname: <span style={styles}> {application.lastname}</span>
                </CCardText>
                <CCardText>
                  Payment Status: <span style={styles}> {application.payment_status}</span>
                </CCardText>
                <CCardText>
                  Application Reason: <span style={styles}> {application.application_reason}</span>
                </CCardText>
                <CCardText>
                  Application Fees: <span style={styles}> {application.application_fees}</span>
                </CCardText>
                <CCardText>
                  Application Status: <span style={styles}> {application.application_status}</span>
                </CCardText>
                <CCardText>
                  Payment: <span style={styles}> {application.payment}</span>
                </CCardText>
                <CCardText>
                  Email: <span style={styles}> {application.email}</span>
                </CCardText>
              </div>
              <div>
                <CCardText>
                  Phone Number: <span style={styles}> {application.phone}</span>
                </CCardText>
                <CCardText>
                  Address: <span style={styles}> {application.address}</span>
                </CCardText>
                <CCardText>
                  Country: <span style={styles}> {application.country}</span>
                </CCardText>
                <CCardText>
                  Amount Needed: <span style={styles}> {application.amount_needed}</span>
                </CCardText>
                <CCardText>
                  Bank Account Number: <span style={styles}> {application.bank_account_number}</span>
                </CCardText>
                <CCardText>
                  Bank Name: <span style={styles}> {application.bank_name}</span>
                </CCardText>
                <CCardText>
                  Previous Business Plan: <span style={styles}> {application.previous_business_name}</span>
                </CCardText>
                <CCardText>
                  Previous Business Details: <span style={styles}> {application.previous_business_details}</span>
                </CCardText>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCardTitle>Application Documents</CCardTitle>
          <CCard>
            <CCardBody>
              <CCardText>Funding Reason: {application.funding_reason}</CCardText>
              <CCardText>Passport: {application.passport}</CCardText>
              <CCardText>Business Plan: {application.business_plan}</CCardText>
              <CCardText>Proof Of Address: {application.proof_of_address}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCardTitle>guardian/parent Info</CCardTitle>
          <CCard>
            <CCardBody>
              <CCardText>
                Guardian Fullname:{' '}
                <span style={styles}> {application.guardian_fullname ? application.guardian_fullname : 'No file'}</span>
              </CCardText>
              <CCardText>
                Guardian Email:{' '}
                <span style={styles}> {application.guardian_email ? application.guardian_email : 'No file'}</span>
              </CCardText>
              <CCardText>
                Guardian Phone Number:{' '}
                <span style={styles}> {application.guardian_phone ? application.guardian_phone : 'No file'}</span>
              </CCardText>
              <CCardText>
                Guardian Address:{' '}
                <span style={styles}> {application.guardian_address ? application.guardian_address : 'No file'}</span>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default SingleApplication;
