defmodule Cpf.Repo.Migrations.CreateFiles do
  use Ecto.Migration

  def change do
    create table(:files) do
      add :type, :string
      add :path, :string

      timestamps()
    end

  end
end
