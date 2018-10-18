import antdEn from 'antd/lib/locale-provider/vi_VN';
import appLocaleData from 'react-intl/locale-data/vi';
import enMessages from '../locales/vn.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const VNLang = {
  messages: {
    ...enMessages,
  },
  antd: antdEn,
  locale: 'vn',
  data: appLocaleData,
};
export default VNLang;
