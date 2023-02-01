class CommentsControllrController < ApplicationController
  def index
    @comments = Comment.order(created_at: :desc)
    return render json: { error: 'not_found' }, status: :not_found if !@comments

    render 'api/comments/index', status: :ok
  end
end
