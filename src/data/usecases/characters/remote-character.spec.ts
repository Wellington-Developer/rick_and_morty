import { RemoteCharacters } from './remote-characters'
import { HttpGetClient } from '../../protocols/http/http-get-client'

describe('RemoteCharacters', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string

      async get (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteCharacters(url, httpGetClientSpy)
    await sut.getData()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
