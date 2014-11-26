module Api
  class UsersController < ApiController
  
    def index
      @users = User.all
      render json: @users
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