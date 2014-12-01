module Api
  class SegmentsController < ApiController
  
    def index
      @segments = Segment.all
      render :index
    end
  
    def create
      @segment = Segment.new(segment_params)
      
      if @segment.save
        render json: @segment
      else
        render json: @segment.errors.full_messages
      end
    end
    
    def show
      @segment = Segment.find(params[:id])
      render :show
    end
    
    private
    
    def segment_params
      params.require(:segment).permit(:song_id, :quote, :start_idx, :end_idx)
    end
  
  end
end