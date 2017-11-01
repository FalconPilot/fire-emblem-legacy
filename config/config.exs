# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :fireemblemlegacy,
  ecto_repos: [Fireemblemlegacy.Repo]

# Configures the endpoint
config :fireemblemlegacy, FireemblemlegacyWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "lJA3h9CISt9jR827QN0xcwoiJkCTiNGYs4X6TSDV5m7Cb4NgMVIhCkmmXSQRWbVv",
  render_errors: [view: FireemblemlegacyWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Fireemblemlegacy.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
