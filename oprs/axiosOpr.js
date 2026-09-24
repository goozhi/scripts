const fs = require('fs')
const encoding = require('encoding')
const path = require('path')
const { default: axios } = require("axios")
const Ussk = require('../ux-b/ussk')
async function axiosOpr(neig_kp = {}) {
    const { url, method } = neig_kp

    return new Ussk().yp("POST", () => {
        return axios.post(url, neig_kp.json)
    }).yp("GET", () => {
        return axios.get(url, neig_kp.config)
    }).vdum(method)
}
module.exports = axiosOpr