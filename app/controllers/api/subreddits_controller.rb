class Api::SubredditsController < ApplicationController
  before_action :set_subreddit, only: [:show, :update, :destroy]

  def index
    @subreddits = Subreddit.all
    render json: @subreddits
  end

  def show
    render json: @subreddit
  end

  def create
    @subreddit = Subreddit.new(subreddit_params)

    if @subreddit.save
      render json: @subreddit, status: :created, location: @subreddit
    else
      render json: @subreddit.errors, status: :unprocessable_entity
    end
  end

  def update
    if @subreddit.update(subreddit_params)
      render json: @subreddit
    else
      render json: @subreddit.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @subreddit.destroy
  end

  private

  def set_subreddit
    @subreddit = Subreddit.find(params[:id])
  end

  def subreddit_params
    params.require(:subreddit).permit(:name, :description)
  end
end
