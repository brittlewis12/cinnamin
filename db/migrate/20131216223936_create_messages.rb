class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text        :content,   null: false
      t.references  :author,    null: false,  index: true
      t.references  :group,     null: false,  index: true

      t.timestamps
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
          ALTER TABLE messages
            ADD CONSTRAINT fk_message_authors
            FOREIGN KEY (author_id)
            REFERENCES users(id),

            ADD CONSTRAINT fk_messages_groups
            FOREIGN KEY (group_id)
            REFERENCES groups(id)
        SQL
      end
    end
  end
end
