import { HttpPostClient } from 'data/protocols/http/httpPostClient'

export class RemoteAuthentication {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url)
  }
}
