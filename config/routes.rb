Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/subreddit/:id' => 'static_pages#subreddit'

  namespace :api do
  # get 'posts' => 'posts#index'
  resources :subreddits, except: [:destroy] do
    resources :posts, only: [:index, :show] do
      resources :comments, only: [:create, :update, :destroy]
    end
    resources :subscriptions, only: [:create, :destroy]
  end
  resources :users, except: [:index, :destroy] do
    resources :subscriptions, only: [:index]
  end
  resources :votes, only: [:create, :update, :destroy]
  resource :session, only: [:create, :destroy]
  get 'home/index'
  resources :posts, only: [:index, :show] do

    end
  end
end

