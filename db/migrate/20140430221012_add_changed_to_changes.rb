class AddChangedToChanges < ActiveRecord::Migration
  def change
    add_column :changes, :changed, :boolean
  end
end
