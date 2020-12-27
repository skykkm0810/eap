defmodule Cpf.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :userId, :integer
      add :events, :string
      add :presents, :integer
      add :taxi, :integer
      add :hospital, :integer
      add :desc, :text

      timestamps()
    end

  end
end
