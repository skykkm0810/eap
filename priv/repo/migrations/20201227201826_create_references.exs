defmodule Cpf.Repo.Migrations.CreateReferences do
  use Ecto.Migration

  def change do
    create table(:references) do
      add :eventId, :integer
      add :title, :string
      add :desc, :text

      timestamps()
    end

  end
end
