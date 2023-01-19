# create some sample users
User.create(username: 'user1', email: 'user1@example.com', password: 'password')
User.create(username: 'user2', email: 'user2@example.com', password: 'password')
User.create(username: 'user3', email: 'user3@example.com', password: 'password')

# create some sample subreddits
subreddit1 = Subreddit.create(name: 'subreddit1', description: 'This is subreddit 1')
subreddit2 = Subreddit.create(name: 'subreddit2', description: 'This is subreddit 2')
subreddit3 = Subreddit.create(name: 'subreddit3', description: 'This is subreddit 3')

# create some sample posts
Post.create(title: 'Sample Post 1', body: 'This is a sample post', subreddit: subreddit1, user: User.first)
Post.create(title: 'Sample Post 2', body: 'This is a sample post', subreddit: subreddit2, user: User.second)
Post.create(title: 'Sample Post 3', body: 'This is a sample post', subreddit: subreddit3, user: User.third)

# create some sample comments
Comment.create(body: 'This is a sample comment', post: Post.first, user: User.first)
Comment.create(body: 'This is a sample comment', post: Post.second, user: User.second)
Comment.create(body: 'This is a sample comment', post: Post.third, user: User.third)
