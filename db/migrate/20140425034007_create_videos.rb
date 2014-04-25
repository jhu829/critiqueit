class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.integer :sold
      t.integer :notsold

      t.timestamps
    end
  end
end
