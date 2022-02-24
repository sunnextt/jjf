import { dataActions } from './data';
import UserService from 'src/services/user.service';

export const fetchAllUser = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getAllUser();
      return response.data;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setAllUser({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllApplications = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getAllApplications();
      return response.data;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setAllApplications({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchAllPaymentLogs = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getAllPaymentLogs();
      return response.data;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setAllPaymentLogs({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};
