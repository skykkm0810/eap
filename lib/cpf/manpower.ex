defmodule Cpf.Manpower do
  use Ecto.Schema
  import Ecto.Changeset

  schema "manpowers" do
    field :centerId, :integer
    field :contact, :string
    field :fileId, :integer
    field :name, :string
    field :note, :string
    field :region, :string
    field :sector, :string

    timestamps()
  end

  @doc false
  def changeset(manpower, attrs) do
    manpower
    |> cast(attrs, [:centerId, :fileId, :name, :contact, :region, :sector, :note])
    |> validate_required([:centerId, :fileId, :name, :contact, :region, :sector, :note])
  end
end
