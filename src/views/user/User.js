import React, { useEffect, useState } from 'react';
import { CCardBody, CButton, CSmartTable } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';

const User = () => {
  const { allUser } = useSelector((state) => state.data);

  const [usersData, setUsersData] = useState({});

  useEffect(() => {
    if (allUser) {
      setUsersData(allUser);
    }
  }, [allUser]);

  const columns = [
    { key: 'first_name' },
    { key: 'last_name' },
    { key: 'phone_number' },
    { key: 'email' },
    { key: 'created_at' },
    { key: 'payment_status', _style: { width: '10%' } },
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
        columnSorter
        items={usersData}
        itemsPerPage={10}
        pagination
        scopedColumns={{
          created_at: (item) => <td>{formateDate(item.created_at)} </td>,
        }}
      />
    </CCardBody>
  );
};

export default User;
