module Api
  class PostsController < ApplicationController

    def create
      @subreddit = Subreddit.find_by(id: params[:subreddit_id])
      token = cookies.signed[:reddit_session_token]
      session = Session.find_by(token: token)
      user = session.user
      @post = @subreddit.posts.new(post_params)
      @post.user = user # assign the user to the post
      if @post.save
      #   redirect_to @post, notice: 'Post was successfully created.'
      # else
      #   return render json: { error: 'not_found_post_1' }, status: :not_found 
      end
    end

    def all
      @posts = Post.all.order(created_at: :desc)
      render 'api/posts/index', status: :ok
    end

    def index
      @subreddit = Subreddit.find_by(id: params[:subreddit_id])
      return render json: { error: 'not_found_subreddit' }, status: :not_found if !@subreddit
      @posts = @subreddit.posts.order(created_at: :desc)
      return render json: { error: 'not_found_post' }, status: :not_found if !@posts
      render 'api/posts/index', status: :ok
    end

    def show
      @post = Post.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@post

      render 'api/posts/show', status: :ok
    end

    private

    def post_params
      params.require(:post).permit(:title, :body, :user_id, :subreddit_id)
    end
  end
end
