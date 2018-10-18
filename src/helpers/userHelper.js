import SuperFetch from './superFetch';

class UserHelper {
  loadAllUser = async () => {
    return await SuperFetch.get('Account/ListUsers').then(response => {
      return response;
    })
  };

  loadRoleByUserId = async (user_id) => {
    return await SuperFetch.get(`ARole/GetByUserID/${user_id}`).then(response => {
      return response;
    })
  }

  addNewUser = async (data_user) => {
    return await SuperFetch.post(`Account/AddNewUser`,data_user).then(response => {
      return response;
    })
  }

  changeProfile = async (data_user) => {
    return await SuperFetch.post(`Account/ChangeProfile/${data_user.id}`,data_user).then(response => {
      return response;
    })
  }

  deleteUser = async (user_id) => {
    return await SuperFetch.delete(`Account/DeleteUser/${user_id}`).then(response => {
      return response;
    })
  }
}
export default new UserHelper();
