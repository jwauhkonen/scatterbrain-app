module Api
  class TagsController < ApiController
    
    def index
      @tags = Tag.all
      render json: @tags
    end
    
    def show
      @tag = Tag.find(params[:id])
      @segments = @tag.segments
      render :show
    end
    
  end
end