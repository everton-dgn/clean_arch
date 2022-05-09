import axios from 'axios'
import { mockPostRequest } from 'data/mocks'
import { mockAxios } from 'infra/mocks'
import { AxiosHttpClientAdapter } from '..'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClientAdapter
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClientAdapter()
  const mockedAxios = mockAxios()

  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  it('should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const resolvedValue = mockedAxios.post.mock.results[0].value
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(resolvedValue)
  })
})
