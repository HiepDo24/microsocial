export const Post = {
    type: 'object',
    properties: {
        username: { type: 'string', minLength: 3 },
        title: { type: 'string', minLength: 1 },
        tags: { type: 'string' },
        image: { type: 'string' },
        description: { type: 'string', minLength: 1 },        
    },
    required: ['username', 'title', 'description']
}

export const UpdatePost = {
    type: 'object',
    properties: {
        post_id: { type: 'integer' },
        title: { type: 'string' },
        tags: { type: 'string' },
        image: { type: 'string' },
        description: { type: 'string' },        
    },   
    required: ['post_id', 'title', 'tags', 'image', 'description'] 
}

export const Comment = {
    type: 'object',
    properties: {
        post_id: { type: 'integer' },
        username: { type: 'string', minLength: 3 },
        body: { type: 'string' }, 
    },   
    required: ['post_id', 'username', 'body'] 
}

export const UpdateComment = {
    type: 'object',
    properties: {
        comment_id: { type: 'integer' },
        body: { type: 'string' }, 
    },   
    required: ['comment_id', 'body']     
}

export const LikePost = {
    type: 'object',
    properties: {
        post_id: { type: 'integer' },
        username: { type: 'string', minLength: 3 },
    },   
    required: ['post_id', 'username'] 
}

export const LikeComment = {
    type: 'object',
    properties: {
        comment_id: { type: 'integer' },
        username: { type: 'string', minLength: 3 },
    },   
    required: ['comment_id', 'username'] 
}