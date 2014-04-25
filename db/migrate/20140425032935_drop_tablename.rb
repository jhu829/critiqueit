class DropTablename < ActiveRecord::Migration
  def up
    drop_table :videos
  end

  def down
    create_table :tablename do |t|
      t.string :table_column
      t.references :anothertable

      t.timestamps        
    end
    add_index :tablenames, :anothertable_id
  end
end
