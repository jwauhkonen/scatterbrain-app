module Api
  class SongsController < ApiController
    
    def index
      @songs = Song.all
      render :index
    end
    
    def show
      @song = Song.find(params[:id])
      render :show
    end
    
    def create
      @song = Song.new(song_params)
      
      if @song.save
        render json: @song
      else
        render json: @song.errors.full_messages
      end
    end
    
    private
    
    def song_params
      params.require(:song).permit(:title, :lyrics, :artist_id)
    end
    
  end
end