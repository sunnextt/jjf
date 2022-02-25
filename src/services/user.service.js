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

  async getOneApplications(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`admin/application/${id}`, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async updateApplicationStatus(id, application_status) {
    console.log(id, 'doc', application_status);

    const config = await authHeader();
    var data = new FormData();
    data.append('application_status', application_status);

    return new Promise((resolve, reject) => {
      axios
        .post(`/admin/application/status/update/${id}`, data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  async updateDocumentStatus(id, document_status) {
    const config = await authHeader();
    var data = new FormData();
    data.append('document_status', document_status);

    return new Promise((resolve, reject) => {
      axios
        .post(`/admin/application/document/status/update/${id}`, data, config)
        .then((response) => {
          resolve(response).data;
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
