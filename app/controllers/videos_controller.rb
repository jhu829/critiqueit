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

	def autocomplete
		input=params[:title].downcase()
		@videos=Video.where("title.include(input)")
		if @videos.size=0
			flash.now[:error] = "That video doesn't exist"
		else
			@videos.map{&:title}
			respond_with(:json=>{:videos=>@videos})
		end
	end

	def search
		@video=Video.find_by(title: params[:title])
		redirect_to video_path(@video)
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
			@change.yestono = true
			@video.yestono +=1
			@change.vote = "no"
		else
			@video.notoyes +=1
			@change.notoyes = true
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
		@video = Video.find(params[:id])
		@comment = Comment.new
		@comments = Comment.where(:video_id=> @video.id).order("time_stamp ASC")
		@change = Change.where(:video_id=> @video.id)
		@changes = Change.find_by(:user_id => current_user.id, :video_id=> @video.id)
		# puts @change.reason
		if @change
			@yestono =  Change.where(:video_id=> @video.id, :yestono => true)
			puts "Rawr"
			puts @yestono
			@notoyes = Change.where(:video_id=> @video.id, :notoyes => true)
		end
	end

	def update_comments
		puts "hello"
		# puts video
		puts "vid"
		@video = Video.find(params[:id])
		@comments = Comment.where(:video_id=> @video.id).order("time_stamp ASC")
		@change = Change.find_by(:user_id => current_user.id, :video_id=> @video.id)


		# puts "onupdate comments"
		respond_to do |format|
			format.js
		end
	end

	def get_comments
		
	end

	private 

	def video_params
      params.require(:video).permit(:video, :title, :sold, :notsold)
    end

    def change_params
      params.require(:change).permit(:reason)
    end

end
