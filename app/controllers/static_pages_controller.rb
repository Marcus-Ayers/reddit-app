class StaticPagesController < ApplicationController
  def home
  end

  def subreddit
    @data = { subreddit_id: params[:id] }.to_json
    render 'subreddit'
  end

  def post
    @data = { post_id: params[:id], subreddit_id: params[:id] }.to_json
    render 'post'
  end
end
