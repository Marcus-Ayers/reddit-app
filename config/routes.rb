Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/subreddit/:id' => 'static_pages#subreddit'
  get '/post/:id' => 'static_pages#post'
  get 'subreddit/:id/post/:id' => 'static_pages#post'
  get '/user/:id' => 'static_pages#user'
  get '/login' => 'static_pages#login'



  namespace :api do
  # get 'posts' => 'posts#index'
  resources :subreddits, except: [:destroy] do
    resources :posts, only: [:index, :show] do
      resources :comments, only: [:create, :update, :destroy, :index]
    end
  end
  resources :users, except: [:destroy] do
    resources :subscriptions, only: [:index]
  end
  resources :votes, only: [:create, :update, :destroy]
  resource :sessions, only: [:create, :destroy]
  get 'home/index'
  # resources :posts, only: [:index, :show] do

  #   end
  get '/authenticated' => 'sessions#authenticated'

  end
end

