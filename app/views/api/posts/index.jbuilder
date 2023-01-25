

json.posts do
  json.array! @posts do |post|
    json.id post.id
    json.title post.title
  end
end

# json.array! @posts do |post|
#   json.extract! post, :id, :title, :body, :created_at
#   json.url post_url(post)
#   json.user do
#     json.extract! post.user, :username
#   end
#   json.comments_count post.comments.count
# end
