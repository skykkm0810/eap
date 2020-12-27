defmodule Cpf.Repo.Migrations.CreateNotices do
  use Ecto.Migration

  def change do
    create table(:notices) do
      add :centerId, :integer
      add :userId, :integer
      add :title, :string
      add :desc, :text

      timestamps()
    end

  end
end
