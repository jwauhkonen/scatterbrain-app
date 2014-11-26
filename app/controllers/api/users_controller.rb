module Api
  class UsersController < ApiController
  
    def index
      @users = User.all
      render json: @users
    end
    
    def show
      @user = User.find(params[:id])
      render json: @user
    end
  
    def update
    
    end
  
    def destroy
    
    end
  
    private
  
    def user_params
      params.require(:user).permit(:email, :password, :bio)
    end
  
  end
end