Rails.application.routes.draw do
  root to: 'static_pages#home'
  resources :subreddits, except: [:destroy] do
    resources :posts, except: [:index, :destroy] do
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
end
