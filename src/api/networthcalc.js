import axios from "axios";

export default axios.create({
  headers: {
    baseURL: "http://localhost:4567"
  }
});
