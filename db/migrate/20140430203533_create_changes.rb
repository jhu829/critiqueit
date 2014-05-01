class CreateChanges < ActiveRecord::Migration
  def change
    create_table :changes do |t|
      t.integer :user_id
      t.integer :video_id
      t.string :reason

      t.timestamps
    end
  end
end
