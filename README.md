# GraphQL BLOG Project
Project started to learn GraphQL.

## How to start the server
The GraphQL API is served on an Express server.
```
npm run serve
```

## Using GraphiQL Interface
The GraphQL API can be accessed via the installed GraphiQL UI that is installed witht he project. To access the the UI browse to the address below once you have started the service:
```
http://localhost:4000/graphql
```

## How to query
This is a list of typical queries via graphiQL.

### Example query - Get all posts
Queries are curly braced contained keywords pointing to types defined in the types folder follwed by objects which describes the shape of the desired returns.
```
query {
  posts {
    id,
    title,
    content,
    author {
      id,
      name,
      email
    },
    comments {
      id,
      name,
      content
    }
  }
}
```

### Example mutation - Adding a post
Mutations take the form of a function contained in curly braces preceded by the keyword 'mutation'.  The contained function points to an actual function defined in the mutations folder.  The actual function is the call and the arguments contained in round brackets.  The function body is used to shape the returned data resulting from the mutation.
```
mutation {
  addPost(post: {
    title: "new post",
    content: "this is it",
    author: "c5e3b2a4"
  }){
    id,
    title,
    content,
    author {
      id,
      name,
      email
    }
  }
}
```
