defmodule Cpf.Reference do
  use Ecto.Schema
  import Ecto.Changeset

  schema "references" do
    field :desc, :string
    field :eventId, :integer
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(reference, attrs) do
    reference
    |> cast(attrs, [:eventId, :title, :desc])
    |> validate_required([:eventId, :title, :desc])
  end
end
