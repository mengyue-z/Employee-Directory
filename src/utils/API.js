import axios from "axios";

export default {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?nat=us&results=30");
  },
};
