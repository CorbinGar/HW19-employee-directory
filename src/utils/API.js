import axios from "axios";

const employeeAmount = Math.floor(Math.random() * 20 + 9)
const URL = `https://randomuser.me/api/?results=${employeeAmount}`

export default {
        getEmps: function () {
                return axios.get(URL);
        }
}