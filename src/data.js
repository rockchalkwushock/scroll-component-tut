import faker from 'faker'

const items = []

for (var i = 0; i < 10; i++) {
  items.push({
    name: faker.name.firstName(),
    image: faker.image.avatar()
  })
}

export default items
