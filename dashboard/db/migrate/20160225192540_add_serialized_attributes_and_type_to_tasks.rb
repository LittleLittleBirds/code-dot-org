class AddSerializedAttributesAndTypeToTasks < ActiveRecord::Migration[4.2]
  def change
    add_column :plc_tasks, :type, :string, null: false, default: 'Plc::Task'
    add_column :plc_tasks, :properties, :text
  end
end
