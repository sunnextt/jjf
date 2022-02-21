import axios from 'axios';
import authHeader from './auth.header';

class UserService {
  async getPosts() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('/admin/posts/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async addPosts(title, body, image) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .post('/admin/posts/', { title, body, image }, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getOnePosts(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/posts/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  //LEARN category

  async addLearncategory() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .post('/admin/learn/category/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getAllLearnCategory() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('/admin/learn/category/all', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getOneLearnCategory(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/learn/category/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  //LEARN Post

  async addLearnPosts() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .post('admin/learn/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getLearnArticleCategory(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/learn/category/group/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getAllLearnArticle() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('/admin/learn/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getOneLearnArticle(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/learn/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // COIN

  async addCoin() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .post('admin/learn/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getCoinCategory(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/learn/category/group/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getAllCoin() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('/admin/coin/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getOneCoin(id) {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get(`/admin/coin/${id}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Coin Category

  async addCoinCategory() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .post('admin/learn/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getAllCoinCategory() {
    const config = await authHeader();
    return new Promise((resolve, reject) => {
      axios
        .get('/admin/learn/', config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new UserService();
