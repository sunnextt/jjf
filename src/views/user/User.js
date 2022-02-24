import React, { useEffect, useState } from 'react';
import { CCardBody, CButton, CSmartTable } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';

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
            show_details: ({ id }) => {
              return (
                <td className="py-2">
                  <Link to={`/user/${id}`} color="primary" variant="outline" shape="square" size="sm">
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

export default User;
