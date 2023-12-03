defmodule MyApp do
  use Plug.Router

  plug(:match)
  plug(:dispatch)

  @port 3000
  @uri "mongodb+srv://aryanstha4859:aryanstha4859@cluster1.5o59rtn.mongodb.net/pbscybsec?retryWrites=true&w=majority"

  get "/api/users" do
    {:ok, client} = Mongo.start_link(url: @uri)

    case Mongo.query(client, "pbscybsec", "users", %{}, [projection: ["firstName": 1, "lastName": 1, "impressions": 1, "_id": 0]]) do
      {:ok, users_data} when length(users_data) > 0 ->
        json(conn, users_data)
      _ ->
        json(conn, %{message: "No users found"})
    end
  rescue
    error ->
      IO.inspect(error, label: "Error fetching data:")
      send_resp(conn, 500, Poison.encode!(%{error: "Internal Server Error"}))
  ensure
    Mongo.stop(client)
  end

  defp json(conn, data) do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(data))
  end

  defp json(conn, status, data) do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(status, Poison.encode!(data))
  end

  def start do
    IO.puts "Server is running on http://localhost:#{@port}"
    {:ok, _} = Plug.Adapters.Cowboy.http MyApp.Router, [], port: @port  # Change this line
  end
end
