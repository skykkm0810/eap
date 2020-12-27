defmodule Cpf.Repo.Migrations.CreateDatas do
  use Ecto.Migration

  def change do
    create table(:datas) do
      add :eventId, :integer
      add :seniorId, :integer
      add :title, :string
      add :subtitle, :string
      add :desc, :string
      add :progress, :string
      add :endedData, :naive_datetime
      add :emergency, :boolean, default: false, null: false

      timestamps()
    end

  end
end
