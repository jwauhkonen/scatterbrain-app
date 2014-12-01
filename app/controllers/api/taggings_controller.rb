module Api
  class TaggingsController < ApiController
  
    def index
    
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
  
    def taggings_params
      params.require(:tagging).permit(:segment_id, :tag_id, :user_id)
    end
  
  end
end
