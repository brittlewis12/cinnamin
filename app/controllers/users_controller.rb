class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    binding.pry

    if @user && @user.save
      render json: filtered_user, status: 201
    else
      render json: @user.errors, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :password_confirmation)
  end

  def filtered_user
    {id: @user.id, email: @user.email, username: @user.username}
  end
end
