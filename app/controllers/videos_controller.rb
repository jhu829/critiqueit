class VideosController < ApplicationController
	# def index
	# 	@user = current_user.id
	# 	@videos = Video.all
	# 	p @user
	# 	p "hi"
	# end

	def new
		@video = Video.new
	end

	def create
		@video = current_user.videos.new(video_params)
		@video.user_id == current_user.id
		@video.sold=0
		@video.notsold=0

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

	def sold
		@video = Video.find(params[:video_id])
		newsold = @video.sold+1
		@video.update(sold: newsold)
		
		@change = Change.new(user_id: current_user.id, video_id: @video.id, vote: "yes",ischanged: false)
		@change.save

		redirect_to video_path(@video.id)

	end

	def notsold
		@video = Video.find(params[:video_id])
		newnotsold = @video.notsold+1
		@video.update(notsold: newnotsold)
		@change = Change.new(user_id: current_user.id, video_id: @video.id, vote: "no", ischanged: false)
		@change.save
		redirect_to video_path(@video.id)


	end

	def change
		@video = Video.find(params[:video_id])
		@change = Change.find_by(:user_id => current_user.id, :video_id=> @video.id)
		@change.reason = params[:data_reason]
		@change.ischanged=true
		if @change.vote == "yes"
			puts "ITS A YESS"
			@change.vote = "no"
		else
			@change.vote="yes"
		end
		@change.save

		puts "REASONNN"

		puts @change.reason

		redirect_to video_path(@video.id)

	end


	def update
		respond_to do |format|
      if @video.update(video_params)
          format.html { redirect_to video_path, notice: 'Video was successfully updated.' }
          format.json { head :no_content }
      else
          format.html { redirect_to video path, notice: 'Video was not successfully updated' }
          format.json { render json: @task.errors, status: :unprocessable_entity }
      end
      end 
	end

	def show
		puts "in show"
		@video = Video.find(params[:id])
		@comment = Comment.new
		puts current_user.id
		puts @video.id
		@comments = Comment.where(:video_id=> @video.id)
		puts "comments now"
		puts @comments
		@change = Change.find_by(:user_id => current_user.id, :video_id=> @video.id)
	end

	def update_comments
		puts "hello"
		# @video = Video.find(params[:id])

		# puts "onupdate comments"
		# respond_to do |format|
		# 	format.js{render :action => 'update_comments'}
		# end
	end

	private 

	def video_params
      params.require(:video).permit(:video, :title, :sold, :notsold)
    end

    def change_params
      params.require(:change).permit(:reason)
    end

end
