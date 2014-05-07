# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Video.create(:title => 'Travel Blender', :user_id => 1, :sold => 42, :notsold => 19, :id => 1, :yestono => 11, :notoyes => 24)
Video.create(:title => 'Monkey Business', :user_id => 1, :sold => 105, :notsold => 189, :id => 2, :yestono => 1, :notoyes => 225)
Video.create(:title => 'Bumble Fumble', :user_id => 1, :sold => 79, :notsold => 182, :id => 3, :yestono => 234, :notoyes => 12)
Video.create(:title => 'The Best App Ever', :user_id => 2, :sold => 333, :notsold => 13, :id => 4, :yestono => 23, :notoyes => 67)
Video.create(:title => 'Another Web App', :user_id => 2, :sold => 67, :notsold => 98, :id => 5, :yestono => 190, :notoyes => 45)

## Fake comments for uploader
Comment.create(:comment_text=> "[0:03] Great intro, your by-statement made a lot of sense", :video_id=>3, :time_stamp => 3)
Comment.create(:comment_text=> "[0:07] Your posture here was a little wonky and I got distracted", :video_id=>3, :time_stamp => 7)
Comment.create(:comment_text=> "[0:11] I'm a little confused about what you meant here.", :video_id=>3, :time_stamp => 11)
Comment.create(:comment_text=> "[0:13] Try to look up! It's super distracting if you're staring at the floor", :video_id=>3, :time_stamp => 13)
Comment.create(:comment_text=> "[0:15] Loved the example you used", :video_id=>3, :time_stamp => 15)


## Fake changed comments
Change.create(video_id: 3, user_id: 1, reason: "The point you made here was something I could relate to", yestono: false, notoyes: true, vote: "yes")
Change.create(video_id: 3, user_id: 2, reason: "Liked how you did this", yestono: false, notoyes: true, vote: "yes")
Change.create(video_id: 3, user_id: 3, reason: "That was an amazing point", yestono: false, notoyes: true, vote: "yes")
Change.create(video_id: 3, user_id: 4, reason: "Ending was so good", yestono: false, notoyes: true, vote: "yes")
