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
		@video = Video.new(video_params)
		@video.user_id == current_user.id

		respond_to do |format|
	      if @video.save
	        format.html { redirect_to @video, notice: 'Video was successfully uploaded.' }
	        format.json { render action: 'show', status: :created, location: @video }
	        puts "saved"
	      else
	      	puts "notsaved"
	      	puts @video.video_file_name
	        format.html { render action: 'new' }
	        format.json { render json: @video.errors, status: :unprocessable_entity }
	      end
	    end
	end

	def show
		@comment = Comment.new
	end


	private 

	def video_params
      params.require(:video).permit(:video, :title, :sold, :notsold)
    end


end
