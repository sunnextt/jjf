import axios from 'axios';
import authHeader from './auth.header';

class UserService {
  async getAllUser() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('admin/users', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getOneUser(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`admin/user/${id}`, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  //Application category

  async getAllApplications() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('admin/application/all', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async updateApplicationStatus(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/application/status/update/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  async updateDocumentStatus(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/application/document/status/update/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  //payment logs

  async getAllPaymentLogs() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('admin/application/payment/logs', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getPaymentLogs(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`admin/application/payment/log/${id}`, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new UserService();
