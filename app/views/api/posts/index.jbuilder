json.posts do
  json.array! @posts do |post|
    json.id post.id
    json.title post.title
    json.body post.body
    json.subreddit post.subreddit
  end
end