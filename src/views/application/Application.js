import React, { useEffect, useState } from 'react';
import { CCardBody, CButton, CSmartTable } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';

const Application = () => {
const { allApplication } = useSelector((state) => state.data);

  const [usersData, setUsersData] = useState({});

  useEffect(() => {
    if (allApplication) {
      setUsersData(allApplication);
    }
  }, [allApplication]);

  const columns = [
    { key: 'id_number' },
    { key: 'firstname' },
    { key: 'lastname' },
    { key: 'phone' },
    { key: 'email' },
    { key: 'amount_needed' },
    { key: 'application_status' },
    { key: 'payment_status' },
    { key: 'created_at' },
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

export default Application;

