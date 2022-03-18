export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  description: {
    mainImage: {
      assets: {
        url: string
      }
    }
    slug: {
      current: string
    }
    body: [object]
  }
}
