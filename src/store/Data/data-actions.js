import { dataActions } from "./data";
import UserService from "src/services/user.service";

export const fetchPosts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getPosts();
      return response;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setPosts({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllLearnArticle = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getAllLearnArticle();

      return response;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setArticle({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchAllLearnCategory = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getAllLearnCategory();

      return response;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setLearnCategory({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};


export const fetchAllCoin = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getAllCoin();

      return response;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setCoin({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllCoinCategory = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await UserService.getAllCoinCategory();

      return response;
    };

    try {
      const res = await fetchData();
      dispatch(dataActions.setCoinCategory({ data: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };
};
