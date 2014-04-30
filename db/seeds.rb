# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Video.create(:title => 'My Pitch 1', :user_id => 1, :sold => 42, :notsold => 19)
Video.create(:title => 'My Pitch 2', :user_id => 1, :sold => 105, :notsold => 189)
Video.create(:title => 'My Pitch 3', :user_id => 1, :sold => 79, :notsold => 102)
Video.create(:title => 'The Best App Ever', :user_id => 2, :sold => 333, :notsold => 13)
Video.create(:title => 'Another Web App', :user_id => 2, :sold => 67, :notsold => 98)
Comment.create(:name=>"what",:comment_text=>"you look great", :video_id =>4, :user_id=>1)