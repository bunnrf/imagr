class AddOrdinalToImages < ActiveRecord::Migration
  def change
    add_column :images, :ordinal, :integer
  end
end
