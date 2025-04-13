class FakeDatabase {
  constructor() {
    this.authors = [
      {
        id: '88d6bec2',
        name: 'John Doe',
        email: 'j.doe@mail.com'
      },
      {
        id: 'b4c3e5a1',
        name: 'Jane Smith',
        email: 'j.smith@everyone.org'
      },
      {
        id: 'c5e3b2a4',
        name: 'Alice Johnson',
        email: 'a.johnson@trip.net'
      }
    ];

    this.blogPosts = [
      {
        id: '1a2b3c4d',
        title: 'Understanding JavaScript Closures',
        content: 'Closures are a powerful feature of JavaScript...',
        authorId: '88d6bec2',
        datePublished: '2023-10-01'
      },
      {
        id: '2b3c4d5e',
        title: 'A Guide to CSS Flexbox',
        content: 'Flexbox is a one-dimensional layout method...',
        authorId: 'b4c3e5a1',
        datePublished: '2023-10-02'
      },
      {
        id: '3c4d5e6f',
        title: 'Getting Started with React',
        content: 'React is a JavaScript library for building user interfaces...',
        authorId: 'c5e3b2a4',
        datePublished: '2023-10-03'
      },
    ];

    this.comments = [
      {
        id: '1a2b3c4d5e',
        content: 'Great post! Very informative.',
        authorId: '88d6bec2',
        postId: '1a2b3c4d',
        datePublished: '2023-10-04'
      },
      {
        id: '2b3c4d5e6f',
        content: 'I learned a lot from this article. Thanks!',
        authorId: 'b4c3e5a1',
        postId: '2b3c4d5e',
        datePublished: '2023-10-05'
      },
      {
        id: '3c4d5e6f7g',
        content: 'This is exactly what I was looking for.',
        authorId: 'c5e3b2a4',
        postId: '3c4d5e6f',
        datePublished: '2023-10-06'
      },
    ];
  }

  getBlogPosts() {
    return this.blogPosts;
  }

  getBlogPost(id) {
    return this.blogPosts.find(post => post.id === id);
  }

  getCommentsForPost(postId) {
    return this.comments.filter(comment => comment.postId === postId);
  }

  getAuthor(id) {
    return this.authors.find(author => author.id === id);
  }

  getPostsOfAuthor(authorId) {
    return this.blogPosts.filter(post => post.authorId === authorId);
  }

  addNewBlogPost(post) {
    const newPost = {...post, id: Math.random().toString(36).substr(2, 9)};
    this.blogPosts.push(newPost);
    return newPost;
  }
}

export const fakeDatabase = new FakeDatabase();