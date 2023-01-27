json.subreddits do
  json.array! @subreddits do |subreddit|
    json.id subreddit.id
    json.name subreddit.name
    json.description subreddit.description
  end
end