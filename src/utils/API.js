import axios from "axios";
const URL = "https://randomuser.me/api/?results=20&exc=login"

export default {
        getEmps: function () {
                return axios.get(URL);
        }
}