class AddYesNoToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :yestono, :integer
    add_column :videos, :notoyes, :integer
  end
end
