const { faker } = require('@faker-js/faker')

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase()
  }
}

console.log(Array.from({ length: 30 }, () => createRandomPost()))
