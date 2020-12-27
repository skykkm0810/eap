defmodule Cpf.Data do
  use Ecto.Schema
  import Ecto.Changeset

  schema "datas" do
    field :desc, :string
    field :emergency, :boolean, default: false
    field :endedData, :naive_datetime
    field :eventId, :integer
    field :progress, :string
    field :seniorId, :integer
    field :subtitle, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(data, attrs) do
    data
    |> cast(attrs, [:eventId, :seniorId, :title, :subtitle, :desc, :progress, :endedData, :emergency])
    |> validate_required([:eventId, :seniorId, :title, :subtitle, :desc, :progress, :endedData, :emergency])
  end
end
