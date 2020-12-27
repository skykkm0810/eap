defmodule Cpf.Repo.Migrations.CreateCctvs do
  use Ecto.Migration

  def change do
    create table(:cctvs) do
      add :dataId, :integer
      add :deviceId, :integer
      add :fileId, :integer

      timestamps()
    end

  end
end
