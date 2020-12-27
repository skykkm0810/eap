defmodule Cpf.Repo.Migrations.CreateMeals do
  use Ecto.Migration

  def change do
    create table(:meals) do
      add :centerId, :integer
      add :userId, :integer
      add :fileId, :integer
      add :menu, :text

      timestamps()
    end

  end
end
