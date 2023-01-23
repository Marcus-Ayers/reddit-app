class PostsController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc).page(params[:page]).per(6)
    return render json: { error: 'not_found' }, status: :not_found if !@posts
    render 'api/properties/index', status: :ok
  end
end
end
  