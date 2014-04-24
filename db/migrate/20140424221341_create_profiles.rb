class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :name
      t.integer :user_id
      t.integer :sold_num
      t.integer :notsold_num

      t.timestamps
    end
  end
end
