import { HttpGetClient } from 'data/protocols/http/http-get-client'

export class RemoteCharacters {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async getData (): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}
