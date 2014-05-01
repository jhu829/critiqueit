class RemoveChangedFromChange < ActiveRecord::Migration
  def change
    remove_column :changes, :changed, :boolean
  end
end
