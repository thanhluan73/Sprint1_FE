export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  siteName: 'PROPTECH PLUS',
  siteIcon: 'ion-flash',
  footerText: 'Proptech Plus ©2018 Created by PTP APP',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};

const jwtConfig = {
  host: 'http://127.0.0.1:5000',
  fetchUrl_TM: '/',
  fetchUrl: '/api/',
  secretKey: 'secretKey'
};

const language = 'english';
// const language = 'vietnam';
export {
  siteConfig,
  language,
  themeConfig,
  jwtConfig
};

export const frontPageConfig = {
  baseUrl:'/front'
}