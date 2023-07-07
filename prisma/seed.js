const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {

  await Promise.all(
    getPosts().map((post) => {
      return prisma.post.create({data: post})
    })
  )
}

seed()

function getPosts() {
  return [
    {
      content: `We will look at 10 simple tips and tricks to increase the speed of your code when writing JS`,
    },
    {
      content: `Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them`,
    },
    {
      content: `We will look at 10 simple tips and tricks on writing unit tests in JavaScript`,
    },
    {
      content: `In this article we will look at some of the new features offered in version 8 of PHP`,
    },
  ]
}