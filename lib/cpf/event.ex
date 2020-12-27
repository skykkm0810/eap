defmodule Cpf.Event do
  use Ecto.Schema
  import Ecto.Changeset

  schema "events" do
    field :centerId, :integer
    field :deviceId, :integer
    field :type, :string
    field :userId, :integer
    field :venderId, :integer

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:centerId, :userId, :venderId, :deviceId, :type])
    |> validate_required([:centerId, :userId, :venderId, :deviceId, :type])
  end
end
