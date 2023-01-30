module Api
  class PostsController < ApplicationController
    
    def index
      @posts = Post.order(created_at: :desc)
      return render json: { error: 'not_found' }, status: :not_found if !@posts

      render 'api/posts/index', status: :ok
    end

    def show
      @post = Post.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@post

      render 'api/posts/show', status: :ok
    end
  end
end