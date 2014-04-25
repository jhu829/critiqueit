class Video < ActiveRecord::Base
	has_attached_file :video, :styles => { :thumb => "100x100>" }
	# validates_attachment_content_type :video, :content_type => /\Aimage\/.*\Z/
	validates_attachment_content_type :video, :content_type => { content_type: ['image/jpeg', 'image/jpg', 'image/png', 'video/mp4'] }


end
