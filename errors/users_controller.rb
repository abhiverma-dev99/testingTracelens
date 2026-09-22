# Intentional bug: user id 4041 does not exist.
class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end
end
