import { CCard, CCardBody, CCardFooter, CCardText, CCardTitle, CCol, CRow, CSmartTable, CTableRow } from '@coreui/react-pro';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';

const styles = {
  fontWeight: 'bold',
  marginLeft: '1rem',
};

const SingleUserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState('');
  const [application, setApplication] = React.useState('');
  const [payment, setPayment] = React.useState('');

  React.useEffect(() => {
    userService
      .getOneUser(id)
      .then(({ data }) => {
        setUser(data);
        setApplication(data.application);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  console.log(id);

  useEffect(() => {
    setPayment([application.payment]);
  }, [application]);

  console.log(payment);

    const columns = [
      { key: 'application_id' },
      { key: 'payer_name' },
      { key: 'phone_number' },
      { key: 'amount' },
      { key: 'email' },
      { key: 'payment_date' },
      { key: 'status' },
      { key: 'application_fees' },
    ];


  return (
    <div>
      <CCardTitle>Single User</CCardTitle>

      <CRow>
        {user ? (
          <CCol xs>
            <CCard style={{ margin: '1rem 0' }}>
              {/* <img src={user.application.passport} alt="" width="20%" style={{ margin: '0 auto' }} /> */}
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
      <CRow>
        <CCardTitle style={{ margin: '1rem 0' }}>Payment Info</CCardTitle>
        {payment ? (
          <CCol>
            <CCard>
              <CCardBody>
                <CSmartTable
                  columns={columns}
                  items={payment}
                  // scopedColumns={{
                  //   created_at: (item) => <td>{formateDate(item.created_at)} </td>,
                  // }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        ) : (
          ''
        )}
      </CRow>
      <CCardTitle style={{ margin: '1rem 0' }}>User Application</CCardTitle>
      <CRow>
        {application ? (
          <CCol>
            <CCard>
              <CCardBody style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div>
                  <CCardText>
                    First Name: <span style={styles}> {application.firstname ? application.firstname : ''}</span>
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
        ) : null}
      </CRow>
      <CRow>
        <CCol>
          <CCardTitle style={{ margin: '1rem 0' }}>Application Documents</CCardTitle>
          <CCard>
            <CCardBody>
              <CCardText>
                Funding Reason: <a href={application.funding_reason}>Funding Reason pdf download link</a>
              </CCardText>
              <CCardText>
                Passport: <a href={application.passport}>Passport pdf download link</a>
              </CCardText>
              <CCardText>
                Business Plan: <a href={application.business_plan}>Business Plan pdf download link</a>
              </CCardText>
              <CCardText>
                Proof Of Address: <a href={application.proof_of_address}>Proof Of Address pdf download link</a>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        {application ? (
          <CCol>
            <CCardTitle style={{ margin: '1rem 0' }}>guardian/parent Info</CCardTitle>
            <CCard>
              <CCardBody>
                <CCardText>
                  Guardian Fullname:{' '}
                  <span style={styles}>
                    {' '}
                    {application.guardian_fullname ? application.guardian_fullname : 'No file'}
                  </span>
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
        ) : (
          ''
        )}
      </CRow>
    </div>
  );
};

export default SingleUserDetails;
