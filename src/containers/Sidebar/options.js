
const options = [
  {
    key: "",
    label: "sidebar.home",
    leftIcon: "ion-pie-graph"
  },
  {
    key: "company",
    label: "sidebar.companys",
    leftIcon: "ion-pie-graph"
  },
  {
    key: "demoapi",
    label: "Demoapi",
    leftIcon: "ion-pie-graph"
  },
  {
    key: "user-group",
    label: "user.account",
    leftIcon: "ion-ios-people",
    children: [
      {
        key: "account",
        label: "user.info" 
      },
      // {
      //   key: "user--permission",
      //   label: "sidebar.user_permission"
      // },
    ]
  },
  {
    key: "group-user",
    label: "group.companys",
    leftIcon: "ion-ios-people",
  }
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