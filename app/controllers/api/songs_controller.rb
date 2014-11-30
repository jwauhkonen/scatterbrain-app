module Api
  class SongsController < ApiController
    
    def index
      @songs = Song.all
      render json: @songs
    end
    
    def show
      @song = Song.find(params[:id])
      render :show
    end
    
  end
end