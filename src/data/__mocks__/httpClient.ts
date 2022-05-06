import { HttpPostClient } from '../protocols/http/httpPostClient'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}
