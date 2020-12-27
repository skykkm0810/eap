defmodule Cpf.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :centerId, :integer
    field :class, :string
    field :contact, :string
    field :name, :string
    field :pwd, :string
    field :uid, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :uid, :pwd, :contact, :class, :centerId])
    |> validate_required([:name, :uid, :pwd, :contact, :class, :centerId])
  end
end
