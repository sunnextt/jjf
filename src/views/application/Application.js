import React, { useEffect, useState } from 'react';
import { CCardBody, CButton, CSmartTable, CCard } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import { CDataTable } from '@coreui/react';

const Application = () => {
  const { allApplication } = useSelector((state) => state.data);


  const columns = [
    { key: 'id_number' },
    { key: 'firstname' },
    { key: 'lastname' },
    { key: 'phone' },
    // { key: 'email' },
    { key: 'amount_needed' },
    { key: 'application_status' },
    { key: 'payment_status' },
    { key: 'created_at' },
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
        {allApplication && (
          <CDataTable
            items={allApplication}
            fields={columns}
            items-per-page-select
            items-per-page="15"
            pagination
            hover
            tableFilter
            cleaner
            scopedSlots={{
              created_at: (item) => <td>{formateDate(item.created_at)} </td>,
              show_details: (item) => {
                return (
                  <td className="py-2">
                    <Link
                      to={`/application/${item.id}`}
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      style={styled}
                    >
                      {item.id && 'details'}
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

export default Application;
