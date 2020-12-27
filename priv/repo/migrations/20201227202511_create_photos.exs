defmodule Cpf.Repo.Migrations.CreatePhotos do
  use Ecto.Migration

  def change do
    create table(:photos) do
      add :programId, :integer
      add :fileId, :integer
      add :desc, :string

      timestamps()
    end

  end
end
