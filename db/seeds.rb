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
User.create(username: 'LemonConnoiseur', email: 'user1@example.com', password: 'password')
User.create(username: 'Standard-composer', email: 'user2@example.com', password: 'password')
User.create(username: 'grapejpeg', email: 'user3@example.com', password: 'password')

# create some sample subreddits
subreddit1 = Subreddit.create(name: 'Ask Reddit', description: 'r/AskReddit is the place to ask and answer thought-provoking questions.')
subreddit2 = Subreddit.create(name: 'Funny', description: "Welcome to r/Funny, Reddit's largest humour depository.")
subreddit3 = Subreddit.create(name: 'News', description: 'The place for news articles about current events in the United States and the rest of the world. Discuss it all here.')

# create some sample posts
Post.create(title: 'What is the best programming language?', body: 'title ^', subreddit: subreddit1, user: User.first)
Post.create(title: 'How do you follow Will Smith in the snow?', body: 'You follow the fresh prints!', subreddit: subreddit2, user: User.second)
Post.create(title: '"The Last of Us" renewed for season 2', body: 'HBO hit has 22m viewers', subreddit: subreddit3, user: User.third)
Post.create(title: 'What is the best framework?', body: 'title ^^', subreddit: subreddit1, user: User.first)
Post.create(title: 'knock knock', body: 'whos there', subreddit: subreddit2, user: User.second)
Post.create(title: 'some news', body: 'news stuff', subreddit: subreddit3, user: User.third)

# create some sample comments
Comment.create(body: 'This is a sample comment', post: Post.first, user: User.first)
Comment.create(body: 'This is a sample comment', post: Post.second, user: User.second)
Comment.create(body: 'This is a sample comment', post: Post.third, user: User.third)










