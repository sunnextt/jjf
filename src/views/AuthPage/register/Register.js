import React from 'react'
import AuthService from "../../../services/auth.service";
import ExpirySession from "../../../utils/expirysession";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,  
  CSpinner,

  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  const history = useHistory();
  const [formIsValid, setFormIsValid] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [state, setState] = React.useState({
    email: "",
    password: "",
    name:"",
    phone: "",
  });

  const inputChangedHandler = (e) => {
    let { name, value } = e.target;
    let input = {
      ...state,
      [name]: value,
    };
    setState(input);
  };

  React.useEffect(() => {
  const validateFormHandler = () => {
    let updatedState = { ...state };
    if (
        updatedState.email.trim().includes("@") &&
      updatedState.password.trim().length > 6 &&
       updatedState.phone.trim().length > 10 &&
       updatedState.name.trim().length > 3
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };
    validateFormHandler();
  }, [state]);


  const RegisterHandler = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const {name,phone, email, password } = state;

    AuthService.Register({name, email, password, phone })
      .then((res) => {
        setLoading(false);
        ExpirySession.set("access", res.data.data);
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          console.log(error.response);
          setError(error.response.data.detail || error.response.data.message);
        }
      });
  };



  //background color from global store
    const { backgroundColor } = useSelector((state) => state.changeState);

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={RegisterHandler}>
                    <h1 style={{textAlign: 'center'}}>Register</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Name"
                        autoComplete="name"
                        name="name"
                        value={state.name}
                        onChange={inputChangedHandler}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        value={state.email}
                        onChange={inputChangedHandler}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="new-password"
                        value={state.password}
                        onChange={inputChangedHandler}
                      />
                    </CInputGroup>
                                        <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Phone number"
                        autoComplete="phone"
                        name="phone"
                        value={state.phone}
                        onChange={inputChangedHandler}
                      />
                    </CInputGroup>
                    <CRow className="p-0 m-0">
                      <CCol xs="6" className="p-0 m-0">
                        {error && <p style={{ color: "tomato" }}>{error}</p>}
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          style={{
                            backgroundColor: backgroundColor,
                            color: "#fff",
                          }}
                          className="px-3"
                          type="submit"
                          disabled={!formIsValid}
                        >
                          {loading && <CSpinner size="sm" />}
                          <span className="ml-2">Register</span>
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
