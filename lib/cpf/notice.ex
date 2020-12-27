defmodule Cpf.Notice do
  use Ecto.Schema
  import Ecto.Changeset

  schema "notices" do
    field :centerId, :integer
    field :desc, :string
    field :title, :string
    field :userId, :integer

    timestamps()
  end

  @doc false
  def changeset(notice, attrs) do
    notice
    |> cast(attrs, [:centerId, :userId, :title, :desc])
    |> validate_required([:centerId, :userId, :title, :desc])
  end
end
