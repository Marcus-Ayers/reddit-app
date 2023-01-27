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

  # def create
  #   @subreddit = Subreddit.new(subreddit_params)

  #   if @subreddit.save
  #     render json: @subreddit, status: :created, location: @subreddit
  #   else
  #     render json: @subreddit.errors, status: :unprocessable_entity
  #   end
  # end

  # def update
  #   if @subreddit.update(subreddit_params)
  #     render json: @subreddit
  #   else
  #     render json: @subreddit.errors, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @subreddit.destroy
  # end

  # private

  # def set_subreddit
  #   @subreddit = Subreddit.find(params[:id])
  # end

  # def subreddit_params
  #   params.require(:subreddit).permit(:name, :description)
  # end
  end
end
