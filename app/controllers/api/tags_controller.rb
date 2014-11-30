module Api
  class TagsController < ApiController
    
    def index
      @tags = Tag.all
      render json: @tags
    end
    
    def show
      @tag = Tag.find(params[:id])
      render :show
    end
    
  end
end