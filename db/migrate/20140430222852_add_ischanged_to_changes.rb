class AddIschangedToChanges < ActiveRecord::Migration
  def change
    add_column :changes, :ischanged, :boolean
  end
end
