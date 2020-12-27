defmodule CpfWeb.CpfChannel do
  use CpfWeb, :channel

  @impl true
  def join("cpf:device", payload, socket) do
    if authorized?(payload) do
      send(self(), :after_join)
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (cpf:lobby).
  # @impl true
  # def handle_in("shout", payload, socket) do
  #   broadcast socket, "shout", payload
  #   {:noreply, socket}
  # end

  def handle_in("deviceAdd", payload, socket) do
    Cpf.Device.changeset(%Cpf.Device{}, payload) |> Cpf.Repo.insert  
    {:noreply, socket}
  end

  def handle_info(:after_join, payload, socket) do
    Cpf.Device.get_devices()
    |> Enum.each(fn data -> push(socket, "deviceList", %{
        id: data.id,
        type: data.type,
        name: data.name,
        location: data.location,
        status: data.status
      }) end)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
