//fetch数据
import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'


/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query },dispatch) => {
  dispatch({type:types.START_LOADING})
  let _url = url
  return fetch(_url)
    .then(res => {
      dispatch({type:types.FINISH_LOADING})
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      }
      return Promise.reject(new Error(res.status));
    })
}

export const FetchOrgList = () => {
  const url = 'http://localhost:3000/member';
  return (dispatch) =>{
    _get({url},dispatch)
      .then((json) => {
        if (json.status===0) {
          return dispatch({type:types.FETCH_ORG_SUCCESS, orgs:json.data})
        }
        return Promise.reject(new Error('failure'))
      })
      .catch((error) => {
        return dispatch({type:types.FETCH_ORG_FAIL})
      })    
  }
//   return {type:types.FETCH_ORG_SUCCESS, orgs:111}
}