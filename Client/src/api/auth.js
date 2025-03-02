import axios from 'axios' //biblioteca que engloba 'fetch'

const API_URL = 'http://localhost:3000/api'


export const registerRequest = user => axios.post(`${API_URL}/register`, user)