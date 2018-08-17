/**
 * @author William Cui
 * @description 数字不够位数前面自动补零
 * @param number {number} 需要格式化的数字
 * @param n {number} 需要格式化成的位数
 * @returns {string} 格式化后的字符串
 **/
export function fillZero(number, n) {
  return (Array(n).join(0) + number).slice(-n);
}

/**
* @author William Cui
* @description 根据后端返回的时间戳格式化成指定的格式
* @param timestamp {number} 需要格式化的时间戳
* @param patternStr {string} 指定的格式字符串 默认是'YYYY-MM-DD hh:mm:ss'
* @returns {string} 格式化后的日期时间字符串
Y: 代表年份， M: 代表月份， D: 代表一个月中的第几天， h: 代表小时， m: 代表分, s: 代表秒
**/
export function stampToDate(timestamp, patternStr = 'YYYY-MM-DD hh:mm:ss') {
  const patternArray = patternStr.match(/\w+/g);
  const date = new Date(timestamp);
  const dateObj = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  };
  patternArray.forEach(pattern => {
    let replaceStr = fillZero(dateObj[pattern[0]], pattern.length);
    patternStr = patternStr.replace(pattern, replaceStr);
  });
  return patternStr;
}

/**
 * @author William Cui
 * @description 把日期字符串转成时间戳
 * @param dateStr {string} 需要格式化的日期字符串
 * @returns {number} 时间戳
 **/
export function dateToStamp(dateStr) {
  return new Date(dateStr).getTime();
}

/**
 * @author William Cui
 * @description 根据URL参数名获取参数值
 * @param name {string} 参数名
 * @returns value {string} 参数值
 **/
export function getQueryString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r !== null) return unescape(r[2]);
  return null;
}

/**
 * @author gm
 * @description 获取几个数字 最大 小数位数
 * @param name {array} 参数名
 * @returns
 **/
export function getMaxPoint(numbers) {
  if (numbers.length > 0) {
    let points = numbers.map(item => {
      if ((item + '').indexOf('.') > -1) {
        return (item + '').split('.')[1].length;
      } else {
        return 0;
      }
    });
    return Math.max(...points);
  } else {
    return 0;
  }
}

/**
 * @author WilliamCui
 * @description 根据传入的lang获取国旗
 * @param lang {string} 语言key
 * @returns ReactElement
 **/
export function getFlag(lang) {
  const zh_CN_Flag =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAAAXNSR0IArs4c6QAAAw5JREFUWAntl7trFFEUxs/M7MNNxEehKD5QUUQtJFaCYlBErQQR+xAVsdBGy6CNRSCVoAhaxVrEQvFP0M5OsBEUwSCKRpMYd7Mz/s7sXnCS2Xns3l1Z2AN3Z+Y+zv2+c75zZ9aZFQmkj83tY+wh9AGB/53BQQaWZ8BvdvTqZCgsB9Dps3uIY22NiDci4j/F24dOPSavz0TARNNJ9iU67n8WGb4nUtggsrAosvQgZVGHw9lqYK2IeyF9p5DoQUh8pf2gLZCNcvq6TmZkIuAdEVk1LlLPstMrkfmzIosPITAt4vzJsqj9OakENKrloyLFA+h6NP217fBq91hTfwT4Ji5/HWR20Xg2Rd4c6viygoAC/rdp1L3D/CCF0onomJkXhyIyBqPhO7iYgtSxuNnt90WK2F9NpM8DuEikQODQgq3ofxsb/AbAcfo/NfoF6k6JIp2h70kygNJl/BKEIimpvkiem3c0QsCZAzA5Ll0B9A5cqX41lFUaqXAgMnSLe80b4GuvaZPcp1iVU8ndjKsvBGe9XRmpZBVixOo7ATpBxJHMCtEqeLIx/xhegFe9p5nWQn0/P28b3NPm5xmPJaCMlmiV2xC5yE2t6VKRkJWfN+GFFJRLHlO/6sKmRSRkHOsm4UYaXkWpV23KSp+/5QdvGzgoQmsZRN1wiPNfKOjgI4F/xr3WAhouno7RHUOJpr72trEu0WlCIAsnWbmboL8UmR3js+CayNwN+t5Rv4zlOc+DUeppHEleJ7OsVSnZstgMhFodAfRdkV9jbPq+oaD6c5HvHLPVN3zrnMkGRH25G8kaJAqnGmtsyqllEQeb2HkmPkUafYfvI12cxYJ9BOAS8zmma0jRJQC2LJaALefGj5FbmFk6Y9NuJue82vTV2HoPMqFYi1d55OWlpptoM4ea9tmygi1Hxo8P0gr/AcpbKHRCX5sGPP8LumXWM+Dw5emhlQDQQQXdc+x20+zXwHYizwvPO8f1PgS6iR7f9gk0AZuC7TJ+qwdCBGu3I282s14DxnGvrgMCvYp0q336PgN/AYOotG1i1W6/AAAAAElFTkSuQmCC';
  const en_US_Flag =
    'data:image/png;base64,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';
  const mapLangToText = {
    zh_CN: '中文',
    en_US: 'English'
  };
  const mapLangToFlag = {
    zh_CN: zh_CN_Flag,
    en_US: en_US_Flag
  };
  return [
    <img key="img" src={mapLangToFlag[lang]} alt={mapLangToText[lang]} />,
    <span key="text"> {mapLangToText[lang]} </span>
  ];
}
