class SessionsController < ApplicationController
  
  def new
    render :new
  end
  
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email/password combination"]
      render :new
    end
  end
  
  def destroy
    sign_out!
    redirect_to root_url
  end
  
end
