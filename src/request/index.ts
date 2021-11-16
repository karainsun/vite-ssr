import ajax from './config'
// 文章
export const articleArchives = (params?: { limit: number }) => ajax({
  method: 'GET',
  url: 'http://150.158.186.73/api/post/archives',
  params
});
// json数据
export const getJson = (params?: { limit: number }) => ajax({
  method: 'GET',
  url: '../data.json',
  params
});