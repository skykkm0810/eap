defmodule Cpf.Repo.Migrations.CreatePrograms do
  use Ecto.Migration

  def change do
    create table(:programs) do
      add :centerId, :integer
      add :manpowerId, :integer
      add :progress, :string
      add :title, :string
      add :desc, :text
      add :date, :naive_datetime

      timestamps()
    end

  end
end
