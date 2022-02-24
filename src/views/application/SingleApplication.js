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
import React from 'react';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';

const styles = {
  fontWeight: 'bold',
  marginLeft: '1rem',
};

const SingleApplication = () => {
  const { id } = useParams();
  const [data, setData] = React.useState('');
  const [user, setUser] = React.useState('');
  const [documents, setDocuments] = React.useState('');
  const [business, setBusiness] = React.useState('');
  const [payment, setPayment] = React.useState('');

  React.useEffect(() => {
    userService
      .getOneApplications(id)
      .then(({ data }) => {
        setData(data);
        if (data) {
          setDocuments(data.documents);
          setUser(data.user);
          setBusiness([data.business]);
          setPayment([data.payment]);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  console.log('data:', data);
  console.log('user:', user);
  console.log('documents:', documents);
  console.log('business:', business);
  console.log('payment:', payment);

  const columns = [
    { key: 'document_type' },
    { key: 'document' },
    { key: 'document_status' },
    { key: 'created_at' },
    { key: 'updated_at' },
  ];
  const busColumns = [
    { key: 'application_id' },
    { key: 'business_name' },
    { key: 'business_type' },
    { key: 'created_at' },
    { key: 'updated_at' },
  ];
  const payColumns = [
    { key: 'application_id' },
    { key: 'payer_name' },
    { key: 'amount' },
    { key: 'payment_reference_no' },
    { key: 'email' },
    { key: 'payment_date' },
    { key: 'status' },
    { key: 'application_fees' },
  ];

  return (
    <div>
      <CCardTitle>Application Details</CCardTitle>

      <CRow>
        {user ? (
          <CCol xs>
            <CCard style={{ margin: '1rem 0', width: '50%' }}>
              <CCardBody>
                <CCardText>
                  First Name:
                  <span style={styles}>{user.first_name}</span>
                </CCardText>
                <CCardText>
                  Last Name:
                  <span style={styles}>{user.last_name}</span>
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
      <div>
        <CCardTitle style={{ margin: '1rem 0' }}>Payment Details</CCardTitle>
        <CRow>
          {payColumns ? (
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CSmartTable
                    columns={payColumns}
                    items={payment}
                    scopedColumns={{
                      document: (item) => (
                        <td>
                          <a href={item.document}>Document download link</a>
                        </td>
                      ),
                      created_at: (item) => <td>{formateDate(item.created_at)} </td>,
                      updated_at: (item) => <td>{formateDate(item.updated_at)} </td>,
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          ) : null}
        </CRow>
      </div>

      <div>
        <CCardTitle style={{ margin: '1rem 0' }}>Documents Details</CCardTitle>
        <CRow>
          {documents ? (
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CSmartTable
                    columns={columns}
                    items={documents}
                    scopedColumns={{
                      document: (item) => (
                        <td>
                          <a href={item.document}>Document download link</a>
                        </td>
                      ),
                      created_at: (item) => <td>{formateDate(item.created_at)} </td>,
                      updated_at: (item) => <td>{formateDate(item.updated_at)} </td>,
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          ) : null}
        </CRow>
      </div>

      <div>
        <CCardTitle style={{ margin: '1rem 0' }}>Business Details</CCardTitle>
        <CRow>
          {business ? (
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CSmartTable
                    columns={busColumns}
                    items={business}
                    scopedColumns={{
                      created_at: (item) => <td>{formateDate(item.created_at)} </td>,
                      updated_at: (item) => <td>{formateDate(item.updated_at)} </td>,
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          ) : null}
        </CRow>
      </div>
    </div>
  );
};

export default SingleApplication;
