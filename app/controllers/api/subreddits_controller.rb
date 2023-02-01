module Api
class SubredditsController < ApplicationController

  def index
    @subreddits = Subreddit.order(created_at: :desc)
    return render json: { error: 'not_found' }, status: :not_found if !@subreddits

    render 'api/subreddits/index', status: :ok
  end

  def show
    @subreddit = Subreddit.find_by(id: params[:id])
    return render json: {error: 'not_found' }, status: :not_found if !@subreddit

    render 'api/subreddits/show', status: :ok
  end

  end
end
