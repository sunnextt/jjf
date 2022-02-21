import React from 'react';
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CCol,
  CForm,
  CInput,
  CInputGroup,
  CRow,
  CTextarea,
  CInputFile,
} from '@coreui/react';
import userService from 'src/services/user.service';

const AddpostModal = ({ show, onClose }) => {
  const [formIsValid, setFormIsValid] = React.useState(false);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [state, setState] = React.useState({
    title: '',
    description: '',
    video_url: '',
    category: '',
  });

  const inputChangedHandler = (e) => {
    let { name, value } = e.target;
    let input = {
      ...state,
      [name]: value,
    };
    setState(input);
  };

  const validateFormHandler = () => {
    let updatedState = { ...state };
    if (
      updatedState.title.trim().length > 6 &&
      updatedState.description.trim().length > 6
      // && updatedState.video_url === ''
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { title, description, video_url, category: ccategory } = state;

    const category = [ccategory];




    userService.addLearnPosts(title, description, video_url, category)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message || error);
      });

    onClose();
  };

  React.useEffect(() => {
    validateFormHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);


  return (
    <div>
      <CModal show={show} onClose={onClose}>
        <CModalHeader closeButton>
          <CModalTitle>Add Post</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handlePost}>
            <CInputGroup className="mb-3">
              <CInput type="text" placeholder="Title" name="title" value={state.title} onChange={inputChangedHandler} />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInput
                type="text"
                placeholder="Video link"
                name="image"
                value={state.video_url}
                onChange={inputChangedHandler}
              />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInput
                type="number"
                placeholder="Category"
                name="category"
                value={state.category}
                onChange={inputChangedHandler}
              />
            </CInputGroup>
            <CInputGroup className="mb-4">
              <CTextarea
                type="text"
                placeholder="Enter your"
                name="description"
                rows="4"
                cols="50"
                value={state.description}
                onChange={inputChangedHandler}
              />
            </CInputGroup>
            <CRow className="p-0 m-0">
              <CCol xs="6" className="p-0 m-0">
                {error && <p style={{ color: 'tomato' }}>{error}</p>}
              </CCol>
            </CRow>
            <CButton color="primary" onClick={handlePost} disabled={!formIsValid}>
              Save Post
            </CButton>
          </CForm>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default AddpostModal;
