class VideosController < ApplicationController
	def index
		@user = current_user.id
		@videos = Video.all
		p @user
		p "hi"
	end

	def new
		@video = Video.new

	end

	def create
		@video = current_user.videos.new(video_params)
		@video.user_id == current_user.id

		respond_to do |format|
	      if @video.save
	        format.html { redirect_to profiles_path, notice: 'Video was successfully uploaded.' }
	        format.json { render action: 'show', status: :created, location: @video }
	      else
	        format.html { render action: 'new' }
	        format.json { render json: @video.errors, status: :unprocessable_entity }
	      end
	    end
	end

	def index
		@videos = Video.where.not(user: current_user)

	end

	def show
		@video = Video.find(params[:id])
		@comment = Comment.new
	end


	private 

	def video_params
      params.require(:video).permit(:video, :title, :sold, :notsold)
    end


end
