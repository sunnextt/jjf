import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardText,
  CCardTitle,
  CCol,
  CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CSmartTable,
  CTableRow,
} from '@coreui/react-pro';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';

const styles = {
  fontWeight: 'bold',
  marginLeft: '1rem',
};

const SingleApplication = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [data, setData] = useState('');
  const [user, setUser] = useState('');
  const [documents, setDocuments] = useState('');
  const [business, setBusiness] = useState('');
  const [payment, setPayment] = useState('');

  const dispatch = useDispatch();

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

  const columns = [
    { key: 'document_type' },
    { key: 'document' },
    { key: 'document_status' },
    { key: 'created_at' },
    { key: 'updated_at' },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { color: 'primary', className: 'fw-semibold' },
    },
  ];

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

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

  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const notify = (message) => toast(message);

  const handleClick = (key) => {
    setLoading(true);

    console.log(key);

    let document_status;

    if (key === 1) {
      document_status = 'Approved';
    } else if (key === 2) {
      document_status = 'In review';
    } else if (key === 3) {
      document_status = 'Rejected';
    } else return document_status;

    console.log(document_status);

    userService
      .updateDocumentStatus(id, document_status)
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        notify(data.message)
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error);
      });
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />                 
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
                      show_details: (item) => {
                        return (
                          <td className="py-2">
                            <CButton
                              color="primary"
                              variant="outline"
                              shape="square"
                              size="sm"
                              onClick={() => {
                                toggleDetails(item._id);
                              }}
                            >
                              {details.includes(item._id) ? 'Hide' : 'update status'}
                            </CButton>
                          </td>
                        );
                      },
                      details: (item) => {
                        return (
                          <CCollapse visible={details.includes(item._id)}>
                            <CCardBody>
                              <h4>Update Status</h4>
                              <CDropdown>
                                <CDropdownToggle color="secondary">Select Status</CDropdownToggle>
                                <CDropdownMenu>
                                  <CDropdownItem onClick={() => handleClick(1)}>Approved</CDropdownItem>
                                  <CDropdownItem onClick={() => handleClick(2)}>In rewiew </CDropdownItem>
                                  <CDropdownItem onClick={() => handleClick(3)}>Rejected</CDropdownItem>
                                </CDropdownMenu>
                              </CDropdown>
                            </CCardBody>
                          </CCollapse>
                        );
                      },
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
