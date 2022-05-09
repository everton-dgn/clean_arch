import faker from '@faker-js/faker'
import axios from 'axios'

export const object = {
  keyA: 'example',
  keyB: 22
}

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: faker.helpers.objectValue(object),
    status: faker.datatype.number()
  })

  return mockedAxios
}
