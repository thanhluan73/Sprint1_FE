
const options = [
  {
    key: "",
    label: "sidebar.companys",
    leftIcon: "ion-pie-graph"
  },
  {
    key: "user-group",
    label: "user.info",
    leftIcon: "ion-ios-people",
    children: [
      {
        key: "user/all",
        label: "sidebar.user_all"
      },
      {
        key: "user--permission",
        label: "sidebar.user_permission"
      },
    ]
  },
  // {
  //   key: "blog-group",
  //   label: "blog.blog",
  //   leftIcon: "ion-ios-people",
  //   children: [
  //     {
  //       key: "tag",
  //       label: "tag.tag"
  //     },
  //     {
  //       key: "category",
  //       label: "category.category"
  //     },
  //     {
  //       key: "post",
  //       label: "post.post"
  //     },
  //   ]
  // }
];
export default options;