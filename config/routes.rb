Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update, :destroy]
    resources :songs, only: [:index, :show]
    resources :segments, only: [:index, :create, :show]
    resources :tags, only: [:index, :show]
    resources :taggings, only: [:index, :create]
  end

end
