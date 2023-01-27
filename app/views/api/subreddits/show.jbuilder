json.subreddit do
  json.id @subreddit.id
  json.name @subreddit.name
  json.description @subreddit.description

  # json.user do
  #   json.id @subreddit.user.id
  #   json.username @subreddit.user.username
  # end
end