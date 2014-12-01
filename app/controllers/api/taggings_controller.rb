module Api
  class TaggingsController < ApiController
  
    def index
      @taggings = Tagging.all
      render json: @taggings
    end
  
    def create
      @tagging = Tagging.new(tagging_params)
      @tagging.user_id = current_user.id
      
      if @tagging.save!
        flash.now[:errors] = "Tagged lyric!"
      else
        flash.now[:errors] = @tagging.errors.full_messages
      end
    end
  
    private
  
    def tagging_params
      params.require(:tagging).permit(:segment_id, :tag_id, :user_id)
    end
  
  end
end
