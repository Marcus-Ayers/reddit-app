class StaticPagesController < ApplicationController
  def home
  end

  def subreddit
    @data = { subreddit_id: params[:id] }.to_json
    render 'subreddit'
  end
end
