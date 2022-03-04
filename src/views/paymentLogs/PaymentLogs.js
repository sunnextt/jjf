import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CButton, CSmartTable } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import { CDataTable } from '@coreui/react';

const PaymentLogs = () => {
  const { paymentLogs: data } = useSelector((state) => state.data);

  const columns = [
    { key: 'application_id' },
    { key: 'payer_name' },
    { key: 'amount', label: 'Application fees' },
    { key: 'payment_reference_no' },
    // { key: 'email' },
    { key: 'payment_date' },
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

  const styled = {
    textDecoration: 'none',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '8px',
    border: '1px solid blue',
  };

  return (
    <CCard>
      <CCardBody>
        {data && (
          <CDataTable
            items={data}
            fields={columns}
            items-per-page-select
            hover
            tableFilter
            cleaner
            scopedSlots={{
              show_details: ({ id }) => {
                return (
                  <td className="py-2">
                    <Link
                      to={`/payment-logs/${id}`}
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      style={styled}
                    >
                      {id && 'Details'}
                    </Link>
                  </td>
                );
              },
            }}
          />
        )}
      </CCardBody>
    </CCard>
  );
};

export default PaymentLogs;

// <Link to={`/payment-logs/${id}`} color="primary" variant="outline" shape="square" size="sm">
//   {id && 'show details'}
// </Link>
