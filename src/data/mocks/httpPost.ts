import faker from '@faker-js/faker'
import { HttpPostParams } from 'data/protocols/http'

const object = {
  keyA: 'example',
  keyB: 22
}

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.objectValue(object)
})
