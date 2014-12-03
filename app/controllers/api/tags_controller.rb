module Api
  class TagsController < ApiController
    
    def index
      @tags = Tag.all
      render :index
    end
    
    def show
      @tag = Tag.find(params[:id])
      render :show
    end
    
  end
end