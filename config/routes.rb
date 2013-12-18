Cinnamin::Application.routes.draw do
  root 'app#index'
  resources :users, only: :create
end
