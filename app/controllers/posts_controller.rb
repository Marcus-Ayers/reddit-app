class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :set_subreddit, only: [:new, :create, :index]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @posts = @subreddit.posts
  end

  def show
  end

  def new
    @post = @subreddit.posts.new
  end

  def create
    @post = @subreddit.posts.new(post_params)
    @post.user = current_user
    if @post.save
      redirect_to @post, notice: 'Post was successfully created.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: 'Post was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to subreddit_posts_path(@post.subreddit), notice: 'Post was successfully destroyed.'
