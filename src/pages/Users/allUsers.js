import { CCard, CCardBody, CCol, CDataTable, CRow } from "@coreui/react";
import React from "react";
import { useSelector } from "react-redux";
import { formateDate, formatTime } from "../../utils/formatDate";
import { Link, useRouteMatch } from "react-router-dom";

const Users = (props) => {
  const { path, url } = useRouteMatch();

  const users = useSelector((state) => state.data.users);

  const fields = [
    {
      key: "image",
      _style: { minWidth: "15%" },
      label: "User",
    },
    {
      key: "username",
      _style: { minWidth: "15%" },
      label: "Name",
    },
    {
      key: "usernumber",
      _style: { minWidth: "15%" },
      label: "Number",
    },
    {
      key: "wallet",
      _style: { minWidth: "15%" },
      label: "Wallet",
    },
    {
      key: "useremail",
      _style: { minWidth: "15%" },
      label: "Email",
    },
    {
      key: "date_created",
      _style: { minWidth: "1%" },
    },
  ];

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {users && (
                <CDataTable
                  items={users}
                  fields={fields}
                  items-per-page-select
                  items-per-page="5"
                  hover
                  pagination
                  tableFilter
                  cleaner
                  overTableSlot={
                    <div className="center-flex">
                      <h3>Users</h3>
                    </div>
                  }
                  scopedSlots={{
                    image: (user) => (
                      <td>
                        <div className="c-avatar">
                          <img
                            src={user.image}
                            alt="user"
                            width={40}
                            height={40}
                            className="c-avatar-img"
                          />
                        </div>
                      </td>
                    ),
                    username: (user) => (
                      <td>
                        <Link
                          to={{
                            pathname: `${url}/user-${user.id}`,
                          }}
                        >
                          {user.name}
                        </Link>
                      </td>
                    ),
                    usernumber: (user) => <td>{user.phone}</td>,
                    wallet: (user) => <td>{user.wallet}</td>,
                    useremail: (user) => <td>{user.email}</td>,
                    date_created: (user) => (
                      <td>
                        {formateDate(user.created_at)}{" "}
                        {formatTime(user.created_at)}
                      </td>
                    ),
                  }}
                />
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Users;
