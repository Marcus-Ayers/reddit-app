json.subreddits do
  json.array! @subreddits do |subreddit|
    json.id subreddit.id
    json.name subreddit.name
    json.description subreddit.description
    json.posts subreddit.posts
  end
end