class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.integer :sold
      t.integer :notsold
      t.integer :user_id
      t.timestamps
    end
  end
end
