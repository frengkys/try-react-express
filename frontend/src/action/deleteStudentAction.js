import api from '../modules/api'

export const DELETE_STUDENT_BEGIN   = 'DELETE_STUDENT_BEGIN';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';

export const deleteStudentBegin = () => ({
  type: DELETE_STUDENT_BEGIN
});

export const deleteStudentSuccess = student => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: { student }
});

export const deleteStudentFailure = error => ({
  type: DELETE_STUDENT_FAILURE,
  payload: { error }
});

export function deleteStudent(id) {
    console.log('post ',JSON.stringify(id))
    return dispatch => {
      dispatch(deleteStudentBegin());
      return fetch("http://localhost:8888/api/student/"+id, {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'DELETE'
      })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(deleteStudentSuccess(json.message));
          return json.message;
        })
        .catch(error => dispatch(deleteStudentFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }