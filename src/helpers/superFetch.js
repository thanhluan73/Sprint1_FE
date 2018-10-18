import { jwtConfig } from '../settings';

const customHeader = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('id_token') || undefined,
});

const base = (method, url, data = {}) => {

  if (method === 'get') {
    console.log('====================================');
    console.log('get fetch');
    console.log('====================================');
    return fetch(`${jwtConfig.host}${jwtConfig.fetchUrl_TM}${url}`, {
      method,
      headers: customHeader(),
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else if (response.status === 401) {
          return { result: 401, message: '' + response.statusText }
        }
      })
      .then(res => res)
      .catch(error => {
        console.log('error response---------------');
        console.log(error);
        return { result: 0, message: '' + error }
      });
  } else {
    return fetch(`${jwtConfig.host}${jwtConfig.fetchUrl_TM}${url}`, {
      method,
      headers: customHeader(),
      body: JSON.stringify(data),
    })
      .then(response => {
        console.log('response---------------');
        console.log(response);
        return response.json()
      })
      .then(res => {
        console.log('data response---------------');
        console.log(res);

        return res
      })
      .catch(error => {
        console.log('error response---------------');
        console.log(error);
        return { result: 0, message: '' + error }
      });
  }
};

const SuperFetch = {};
['get', 'post', 'put', 'delete'].forEach(method => {
  SuperFetch[method] = base.bind(null, method);
});
export default SuperFetch;
