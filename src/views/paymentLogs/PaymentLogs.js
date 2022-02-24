import React, { useEffect, useState } from 'react';
import { CCardBody, CButton, CSmartTable } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';

const PaymentLogs = () => {
  const { paymentLogs: data } = useSelector((state) => state.data);

  const [usersData, setUsersData] = useState({});

  useEffect(() => {
    if (data) {
      setUsersData(data);
    }
  }, [data]);

  const columns = [
    { key: 'application_id' },
    { key: 'payer_name' },
    { key: 'amount' },
    { key: 'payment_reference_no' },
    // { key: 'email' },
    { key: 'payment_date' },
    { key: 'application_fees' },
    { key: 'status', _style: { width: '10%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ];
  // formateDate;
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

  return (
    <CCardBody>
      <CSmartTable
        columns={columns}
        tableFilter
        cleaner
        itemsPerPageSelect
        // columnSorter
        items={usersData}
        itemsPerPage={10}
        pagination
        scopedColumns={{
          created_at: (item) => <td>{formateDate(item.created_at)} </td>,
          show_details: ({ id }) => {
            return (
              <td className="py-2">
                <Link to={`/payment-logs/${id}`} color="primary" variant="outline" shape="square" size="sm">
                  {id && 'show details'}
                </Link>
              </td>
            );
          },
        }}
      />
    </CCardBody>
  );
};

export default PaymentLogs;
