import axios from 'axios'

const api = axios.create({
  baseURL: "https://09k8ysheql.execute-api.us-east-1.amazonaws.com/dev/investments"
})

export default api