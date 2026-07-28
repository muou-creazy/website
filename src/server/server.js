import axios from 'axios'
import {
    Message,
    MessageBox
} from 'element-ui'

axios.defaults.baseURL = '/api'
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = ''
}

export default {
    get(url, auth = false,params) {
        if (auth) {
            return axios.get(url, {
                params:params
            },{
                headers: {Itsme: ''}})
        } else {
            return axios.get(url,{params:params})
        }
    },

    post(url, data, auth = false, type, timeout) {
        if (auth) {
            return axios.post(rul,data,{
                headers: {
                    Itsme: ''
                }
            })
        }else{
            return axios.post(url, data, type, timeout)
        }
    },

    put(url,data,auth = false){
        if (auth) {
            return axios.put(url, data, { headers: { Authorization: 'Your back-end user authenticates information' } });
        } else {
            return axios.put(url, data);
        }
    },

    del(url, auth = false) {
        if (auth) {
            return axios.delete(url, { headers: { Authorization: 'Your back-end user authenticates information' } });
        } else {
            return axios.delete(url);
        }
    },

}