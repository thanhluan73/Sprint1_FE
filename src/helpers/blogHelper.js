import SuperFetch from 'helpers/superFetch';

class BlogHelper {
  loadAllTag = async () => {
    return await SuperFetch.get('ETag/ListTags').then(response => {
      return response;
    })
  };

  addTag = async (data_tag) => {
    return await SuperFetch.post(`ETag/Create`, data_tag).then(response => {
      return response;
    })
  }

  changeTag = async (data_tag) => {
    return await SuperFetch.put(`ETag/Edit`, data_tag).then(response => {
      return response;
    })
  }

  deleteTag = async (id) => {
    return await SuperFetch.delete(`ETag/Delete/${id}`).then(response => {
      return response;
    })
  }

  // category
  loadAllCategory = async () => {
    return await SuperFetch.get('ECategory/ListCategorys').then(response => {
      return response;
    })
  };

  addCategory = async (data) => {
    return await SuperFetch.post(`ECategory/Create`, data).then(response => {
      return response;
    })
  }

  changeCategory = async (data) => {
    return await SuperFetch.put(`ECategory/Edit`, data).then(response => {
      return response;
    })
  }

  deleteCategory = async (id) => {
    return await SuperFetch.delete(`ECategory/Delete/${id}`).then(response => {
      return response;
    })
  }


  // post
  loadAllPost = async () => {
    return await SuperFetch.get('EPost/GetAll').then(response => {
      return response;
    })
  };

  loadPostTags = async (id) => {
    return await SuperFetch.get(`ETag/GetByPostID?postID=${id}`).then(response => {
      return response;
    })
  };


  addPost = async (data) => {
    return await SuperFetch.post(`EPost/Create`, data).then(response => {
      return response;
    })
  }

  changePost = async (data) => {
    return await SuperFetch.put(`EPost/Edit`,data).then(response => {
      return response;
    })
  }

  deletePost = async (id) => {
    return await SuperFetch.delete(`EPost/Delete/${id}`).then(response => {
      return response;
    })
  }
}
export default new BlogHelper();
