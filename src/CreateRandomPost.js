const { faker } = require('@faker-js/faker')

const numPosts = 100

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase()
  }
}

console.log(Array.from({ length: numPosts }, () => createRandomPost()))
