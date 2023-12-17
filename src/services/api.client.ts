import axios, { Axios } from 'axios'

abstract class ApiClient {
  protected readonly client: Axios

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  // Other methods and properties...
}

export default ApiClient
