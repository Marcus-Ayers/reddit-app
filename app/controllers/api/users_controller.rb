module Api
  class UsersController < ApplicationController
    
    def index
      @users = User.order(created_at: :desc)
      return render json: { error: 'not_found' }, status: :not_found if !@users

      render 'api/users/index', status: :ok
    end

    # def show
    #   @post = Post.find_by(id: params[:id])
    #   return render json: { error: 'not_found' }, status: :not_found if !@post

    #   render 'api/posts/show', status: :ok
    # end
  end
end