Cinnamin::Application.routes.draw do
  root 'app#splash' # temporary splash page
  # root 'app#index'
  resources :users, only: :create
end
