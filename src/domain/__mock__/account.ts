import faker from '@faker-js/faker'
import { AccountModel } from 'domain/models'
import { AuthenticationParams } from 'domain/useCases'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
