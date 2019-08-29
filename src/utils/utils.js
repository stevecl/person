let utils = {
  dateFormat (date, fmt) {
    if (!date) return '';
    if (typeof date === 'string') date = date.replace(/-/g, '/');
    if (!date.hasOwnProperty('getMonth')) date = new Date(date);
    let o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds()

      // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  },

  // 深度拷贝
  clone (obj) {
    // let isArr = Object.prototype.toString.call(obj) === '[object Array]';
    let isArr = Array.isArray(obj);
    let isObject = Object.prototype.toString.call(obj) === '[object Object]';
    if (isArr) {
      let newObj = [];
      for (let i = 0; i < obj.length; i++) {
        newObj[i] = this.clone(obj[i]);
      }
      return newObj;
    } else if (isObject) {
      let newObj = {};
      for (let i in obj) {
        newObj[i] = this.clone(obj[i]);
      }
      return newObj;
    }
    return obj;
  }
}
export default utils;
