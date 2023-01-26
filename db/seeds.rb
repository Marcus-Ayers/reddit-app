# users = User.create([
#   { username: 'Tommy', email: 'tommy@test.com', password: 'password' },
#   { username: 'Bobby', email: 'bobby@test.com', password: 'password' },
#   { username: 'Sarah', email: 'sarah@test.com', password: 'password' },
#   { username: 'Lilly', email: 'lilly@test.com', password: 'password' },
#   { username: 'Jimmy', email: 'jimmy@test.com', password: 'password' },
#   { username: 'Cammy', email: 'cammy@test.com', password: 'password' },
# ])
# posts = Post.create([
#   {
#     title: 'Sample Posts 111ß',
#     body: 'This is a sample post',
#     user: users.first
#   }, {
#     title: "This is a title",
#     body: "this is a body",
#     user: users.second
#   },{
#     title: "This is a title 2",
#     body: "this is a body 2",
#     user: users.third
#   }
# ])


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










