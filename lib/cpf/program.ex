defmodule Cpf.Program do
  use Ecto.Schema
  import Ecto.Changeset

  schema "programs" do
    field :centerId, :integer
    field :date, :naive_datetime
    field :desc, :string
    field :manpowerId, :integer
    field :progress, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(program, attrs) do
    program
    |> cast(attrs, [:centerId, :manpowerId, :progress, :title, :desc, :date])
    |> validate_required([:centerId, :manpowerId, :progress, :title, :desc, :date])
  end
end
