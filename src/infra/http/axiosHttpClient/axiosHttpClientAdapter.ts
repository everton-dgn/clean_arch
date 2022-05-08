import axios from 'axios'
import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from 'data/protocols/http'

export class AxiosHttpClientAdapter<R, T> implements HttpPostClient<T, R> {
  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
