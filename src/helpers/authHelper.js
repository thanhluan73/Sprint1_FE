import SuperFetch from './superFetch';

class AuthHelper {
  test = async () => {
    return await SuperFetch.get('api/Values')
      .then(response => {
        return response;
      })
  };

  login = async userInfo => {
    if (!userInfo.username || !userInfo.password) {
      return { result: 0, message: 'please fill in the input' };
    }

    const user_data = {
      email: userInfo.username,
      password: userInfo.password
    }
    return await SuperFetch.post('Account/Login', user_data).then(response => {
      return response;
    })
  };

  register = async (user_register) => {
    return await SuperFetch.post('Account/Register', user_register)
      .then(response => {
        return response;
      })
  };

  async checkDemoPage(token) {
    if (this.checkExpirity(token).error) {
      return { error: 'Token expired' };
    }
    return await SuperFetch.post('secret/test', { token })
      .then(response => response)
      .catch(error => ({ error: JSON.stringify(error) }));
  }
}
export default new AuthHelper();
