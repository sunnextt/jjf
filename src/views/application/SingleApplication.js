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
} from '@coreui/react-pro';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import userService from 'src/services/user.service';
import { formateDate } from 'src/utils/formatDate';
import { CDataTable } from '@coreui/react';

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

  // const dispatch = useDispatch();

  React.useEffect(() => {
    userService
      .getOneApplications(id)
      .then(({ data }) => {
        setData(data);
        if (data) {
          setDocuments(data.documents);
          setUser(data.user);
          setBusiness([data.business]);
          setPayment(data.payment);
        }
      })
      .catch(() => {});
    if ((user, documents)) {
    }
  }, [data, user, documents]);

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

    let document_status;

    if (key.id === 1) {
      document_status = 'Approved';
    } else if (key.id === 2) {
      document_status = 'In review';
    } else if (key.id === 3) {
      document_status = 'Rejected';
    } else return document_status;

    userService
      .updateDocumentStatus(key._id, document_status)
      .then(({ data }) => {
        setLoading(false);
        notify(data.message);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleAppUpdate = (key) => {
    setLoading(true);
    let application_status;

    if (key.id === 1) {
      application_status = 'Approved';
    } else if (key.id === 2) {
      application_status = 'In review';
    } else if (key.id === 3) {
      application_status = 'Incomplete';
    } else if (key.id === 4) {
      application_status = 'Rejected';
    } else return application_status;

    userService
      .updateApplicationStatus(key._id, application_status)
      .then(({ data }) => {
        setLoading(false);
        notify(data.message);
      })
      .catch(() => {
        setLoading(false);
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
          <CCol xs="12" sm="12" md="6" lg="6">
            <CCard style={{ margin: '1rem 0' }}>
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
                <CCardText>
                  Application Status: <span style={styles}>{data.application_status}</span>
                </CCardText>
                <h5>Update Application Status</h5>
                <CDropdown>
                  <CDropdownToggle color="secondary">Select Status</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem
                      onClick={() => {
                        handleAppUpdate({ id: 1, _id: data.id });
                      }}
                    >
                      Approved
                    </CDropdownItem>
                    <CDropdownItem
                      onClick={() => {
                        handleAppUpdate({ id: 2, _id: data.id });
                      }}
                    >
                      In review
                    </CDropdownItem>
                    <CDropdownItem
                      onClick={() => {
                        handleAppUpdate({ id: 3, _id: data.id });
                      }}
                    >
                      Incomplete
                    </CDropdownItem>
                    <CDropdownItem
                      onClick={() => {
                        handleAppUpdate({ id: 4, _id: data.id });
                      }}
                    >
                      Rejected
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
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
          {payment ? (
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CDataTable
                    items={payment}
                    fields={payColumns}
                    hover
                    // items-per-page-select
                    scopedSlots={{
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
                  <CDataTable
                    items={documents}
                    fields={columns}
                    hover
                    scopedSlots={{
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
                                toggleDetails(item.id);
                              }}
                            >
                              {details.includes(item.id) ? 'Hide' : 'update status'}
                            </CButton>
                          </td>
                        );
                      },
                      details: (item) => {
                        return (
                          <CCollapse visible={details.includes(item.id)}>
                            <CCardBody>
                              <h4>Update Status</h4>
                              <CDropdown>
                                <CDropdownToggle color="secondary">Select Status</CDropdownToggle>
                                <CDropdownMenu>
                                  <CDropdownItem
                                    onClick={() => {
                                      handleClick({ id: 1, _id: item.id });
                                    }}
                                  >
                                    Approved
                                  </CDropdownItem>
                                  <CDropdownItem
                                    onClick={() => {
                                      handleClick({ id: 2, _id: item.id });
                                    }}
                                  >
                                    In review
                                  </CDropdownItem>
                                  <CDropdownItem
                                    onClick={() => {
                                      handleClick({ id: 3, _id: item.id });
                                    }}
                                  >
                                    Rejected
                                  </CDropdownItem>
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
                  S{' '}
                  <CDataTable
                    items={business}
                    fields={busColumns}
                    hover
                    scopedSlots={{
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
