Rails.application.routes.draw do
  get 'chooser/index'
  
  root 'chooser#index'

end
