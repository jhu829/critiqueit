class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :name
      t.text :comment_text
      t.integer :user_id
      t.integer :video_id

      t.timestamps
    end
  end
end
