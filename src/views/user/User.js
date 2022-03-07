import React, { useEffect, useState } from 'react';
import { CCardBody, CButton, CSmartTable, CCard } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import { CDataTable } from '@coreui/react';

const User = () => {
  const { allUser } = useSelector((state) => state.data);

  const columns = [
    { key: 'first_name' },
    { key: 'last_name' },
    { key: 'phone_number' },
    // { key: 'email' },
    { key: 'created_at' },
    { key: 'payment_status', _style: { width: '10%' } },
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

  console.log(allUser)
  return (
    <CCard>
      <CCardBody>
        {allUser && (
          <CDataTable
            items={allUser}
            fields={columns}
            items-per-page-select
            items-per-page="15"
            pagination
            hover
            tableFilter
            cleaner
            scopedSlots={{
              created_at: (item) => <td>{formateDate(item.created_at)} </td>,
              show_details: ({ id }) => {
                return (
                  <td className="py-2">
                    <Link to={`/user/${id}`} color="primary" variant="outline" shape="square" size="sm" style={styled}>
                      {id && 'details'}
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

export default User;
