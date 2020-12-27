defmodule Cpf.Photo do
  use Ecto.Schema
  import Ecto.Changeset

  schema "photos" do
    field :desc, :string
    field :fileId, :integer
    field :programId, :integer

    timestamps()
  end

  @doc false
  def changeset(photo, attrs) do
    photo
    |> cast(attrs, [:programId, :fileId, :desc])
    |> validate_required([:programId, :fileId, :desc])
  end
end
