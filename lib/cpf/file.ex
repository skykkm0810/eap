defmodule Cpf.File do
  use Ecto.Schema
  import Ecto.Changeset

  schema "files" do
    field :path, :string
    field :type, :string

    timestamps()
  end

  @doc false
  def changeset(file, attrs) do
    file
    |> cast(attrs, [:type, :path])
    |> validate_required([:type, :path])
  end
end
