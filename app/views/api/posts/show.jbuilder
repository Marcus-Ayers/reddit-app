json.post do
  json.id @post.id
  json.title @post.title
  json.body @post.body
  json.subreddit @post.subreddit
  json.comments @post.comments

  # json.user do
  #   json.id @subreddit.user.id
  #   json.username @subreddit.user.username
  # end
end