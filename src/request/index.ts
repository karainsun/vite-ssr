import ajax from './config' 
// json数据
export const getJson = (params?: { limit: number }) => ajax({
  method: 'GET',
  url: '../data.json',
  params
});