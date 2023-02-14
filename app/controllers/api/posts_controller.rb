module Api
  class PostsController < ApplicationController
    def all
      @posts = Post.all.order(created_at: :desc)
      render 'api/posts/index', status: :ok
    end
    
    def index
      @subreddit = Subreddit.find_by(id: params[:subreddit_id])
      return render json: {error: 'not_found_subreddit' }, status: :not_found if !@subreddit
      @posts = @subreddit.posts.order(created_at: :desc)
      return render json: { error: 'not_found_post' }, status: :not_found if !@posts
      render 'api/posts/index', status: :ok
    end

    def show
      @post = Post.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@post

      render 'api/posts/show', status: :ok
    end
  end
end