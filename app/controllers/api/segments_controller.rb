module Api
  class SegmentsController < ApiController
  
    def index
      @segments = Segment.all
      render json: @segments
    end
  
    def create
      @segment = Segment.new(segment_params)
      
      if @segment.save!
        flash.now[:errors] = "Lyric saved!"
      else
        flash.new[:errors] = @segment.errors.full_messages
      end
    end
    
    private
    
    def segment_params
      params.require(:segment).permit(:song_id, :quote, :start_idx, :end_idx)
    end
  
  end
end