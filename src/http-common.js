import axios from "axios";
import Vue from "vue";
Vue.use(axios)

export default axios.create({
  baseURL: "http://127.0.0.1:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
