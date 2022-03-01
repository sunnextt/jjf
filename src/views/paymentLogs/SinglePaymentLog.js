import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CSmartTable,
  CTableRow,
} from '@coreui/react-pro';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';

const styles = {
  fontWeight: 'bold',
  marginLeft: '1rem',
};

const SinglePaymentLog = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState('');
  const [application, setApplication] = React.useState('');
  const [payment, setPayment] = React.useState('');

  React.useEffect(() => {
    userService
      .getPaymentLogs(id)
      .then(({ data }) => {
        setUser(data);
        setApplication(data.application);
      })
      .catch(() => {});
  }, []);

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
      <CCardTitle>User log</CCardTitle>

      <CRow>
        {user ? (
          <CCol xs>
            <CCard style={{ margin: '1rem 0' }}>
              {/* <img src={user.application.passport} alt="" width="20%" style={{ margin: '0 auto' }} /> */}
              <CCardBody>
                <CCardText>
                  Payer Name:
                  <span style={styles}>{user.payer_name}</span>
                </CCardText>
                <CCardText>
                  email: <span style={styles}>{user.email}</span>
                </CCardText>
                <CCardText>
                  Amount: <span style={styles}>{user.amount}</span>
                </CCardText>
                <CCardText>
                  Application Fees: <span style={styles}>{user.application_fees}</span>
                </CCardText>
                <CCardText>
                  Payment Reference No: <span style={styles}>{user.payment_reference_no}</span>
                </CCardText>
                <CCardText>
                  Payment Date: <span style={styles}>{user.payment_date}</span>
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
    </div>
  );
};

export default SinglePaymentLog;
