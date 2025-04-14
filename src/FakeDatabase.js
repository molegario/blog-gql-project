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
        author: '88d6bec2'
      },
      {
        id: '2b3c4d5e',
        title: 'A Guide to CSS Flexbox',
        content: 'Flexbox is a one-dimensional layout method...',
        author: 'b4c3e5a1'
      },
      {
        id: '3c4d5e6f',
        title: 'Getting Started with React',
        content: 'React is a JavaScript library for building user interfaces...',
        author: 'c5e3b2a4'
      },
    ];

    this.comments = [
      {
        id: '1a2b3c4d5e',
        content: 'Great post! Very informative.',
        name: 'Anon',
        postId: '1a2b3c4d'
      },
      {
        id: '2b3c4d5e6f',
        content: 'I learned a lot from this article. Thanks!',
        name: 'Mr. Wizard',
        postId: '2b3c4d5e'
      },
      {
        id: '3c4d5e6f7g',
        content: 'This is exactly what I was looking for.',
        name: 'Pokemane Charles',
        postId: '3c4d5e6f'
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
    return this.blogPosts.filter(post => post.author === authorId);
  }

  addNewBlogPost(post) {
    const newPost = {...post, id: Math.random().toString(36).substr(2, 9)};
    this.blogPosts.push(newPost);
    return newPost;
  }

  addNewComment(comment) {
    const newComment = {...comment, id: Math.random().toString(36).substr(2, 9)};
    this.comments.push(newComment);
    return newComment;
  }

}

export const fakeDatabase = new FakeDatabase();