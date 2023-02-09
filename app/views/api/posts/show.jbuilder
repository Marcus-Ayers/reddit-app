json.post do
  json.id @post.id
  json.title @post.title
  json.body @post.body
  json.subreddit @post.subreddit
  json.comments @post.comments

  # json.subreddit do
  #   json.id @subreddit.id
  # end
end