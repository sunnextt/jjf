import React, { useEffect, useState } from 'react';
import { CCardBody, CButton, CSmartTable } from '@coreui/react-pro';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';

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
          show_details: (item) => {
            console.log(item.id);
            return (
              <td className="py-2">
                <Link to={`/application/${item.id}`} color="primary" variant="outline" shape="square" size="sm">
                  {item.id && 'show details'}
                </Link>
              </td>
            );
          },
        }}
      />
    </CCardBody>
  );
};

export default Application;
