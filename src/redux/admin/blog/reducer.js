import actions from './actions';

const initState = { tags: [], categorys: [], posts: [], postTags: [] };

export default function adminBlogReducer(state = initState, action) {
  let id = 0;
  switch (action.type) {
    // tag
    case actions.LOAD_ALL_TAG_SUCCESS:
      return {
        ...state,
        tags: action.tags
      };

    case actions.CHANGE_TAG_SUCCESS:
      const new_tag = action.data
      const tags = state.tags.map(el => (
        el.id === new_tag.id ? el = new_tag : el
      ))
      return {
        ...state,
        tags: tags,
      };

    case actions.DELETE_TAG_SUCCESS:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.id !== action.id)
      };

    // category
    case actions.LOAD_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        categorys: action.categorys
      };

    case actions.CHANGE_CATEGORY_SUCCESS:
      const new_category = action.data
      const categorys = state.categorys.map(el => (
        el.id === new_category.id ? el = new_category : el
      ))
      return {
        ...state,
        categorys: categorys
      };

    case actions.DELETE_CATEGORY_SUCCESS:
      id = action.id;
      return {
        ...state,
        categorys: state.categorys.filter((category) => category.id !== id)
      };

    // post
    case actions.LOAD_ALL_POST_SUCCESS:
      return {
        ...state,
        posts: action.posts
      };

    case actions.LOAD_POST_TAG_SUCCESS:
      return {
        ...state,
        postTags: action.postTags
      };

    case actions.CHANGE_POST_SUCCESS:
      const new_post = action.data
      const posts = state.posts.map(el => (
        el.id === new_post.id ? el = new_post : el
      ))
      return {
        ...state,
        posts: posts,
        postTags: action.tags
      };

    case actions.DELETE_POST_SUCCESS:
      id = action.id;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== id)
      };
    default:
      return state;
  }
}
