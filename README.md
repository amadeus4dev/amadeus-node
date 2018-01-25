# Amadeus Node SDK

[![Gem Version](http://img.shields.io/gem/v/amadeus-node.svg)][gem]
[![Build Status](http://img.shields.io/travis/amadeus-node.svg)][travis]
[![Contact Support](https://img.shields.io/badge/contact-support-blue.svg)][support]

Amadeus provides a set of APIs for the travel industry. Flights, Hotels, Locations and more.

For more details see the [Node documentation](https://developer.amadeus.com/docs/node) on [Amadeus.com](https://developer.amadeus.com).

## Installation

This gem requires Node 2.2+. You can install install it directly or via bundler.

```node
gem install 'amadeus'
```

__Next__: [Get Started with the Node SDK.](https://developer.amadeus.com/docs/node/get_started/initialize)

## Getting Started

To send make your first API call you will need to [register for an Amadeus Developer Account](https://developer.amadeus.com/register) and [set up your first application](https://dashboard.developer.amadeus.com/applications).

```node
require 'amadeus'

amadeus = Amadeus::Client.new({
  client_id: '[YOUR_CLIENT_ID]',
  client_secret: '[YOUR_CLIENT_SECRET]'
})

amadeus.reference_data.locations.get({ keyword: 'Lon' })
#=> Returns a list of locations (Airport ad City codes)
#   that match this string in some way
```

__Next__: [Learn more about Locations](https://developer.amadeus.com/docs/node/get_started/locations) with our Node SDK.

## Initialization

The client can be initialized directly or via environment variables.

```node
# Initialize using parameters
amadeus = Amadeus::Client.new(client_id: '...', client_secret: '...')

# Alternative: Initialize using environment variables
# * AMADEUS_CLIENT_ID
# * AMADEUS_CLIENT_SECRET
amadeus = Amadeus::Client.new
```

Your credentials can be found on the [Amadeus dashboard](https://dashboard.developer.amadeus.com/client_ids). [Sign up](https://developer.amadeus.com/register) for an account today.

__Next__: [Learn more about our initializing the Node SDK](https://developer.amadeus.com/docs/node/get_started_initialize) in our documentation.

## Logging & Debugging

The SDK makes it easy to add your own logger.

```node
amadeus = Amadeus::Client.new(
  client_id: '...',
  client_secret: '...',
  logger: MyOwnLogger.new
)
```

Additionally, to enable more verbose logging, you can set the appropriate level either via a parameter on initialization, or using the `AMADEUS_LOG_LEVEL` environment variable.

```node
amadeus = Amadeus::Client.new(
  client_id: '...',
  client_secret: '...',
  log_level: 1 # defaults to silent, 0
)
```

## Documentation

Amadeus has a large set of APIs, and our documentation is here to get you started today.

* [Get Started](https://developer.amadeus.com/docs/node/get_started) documentation
  * [Initialize the SDK](https://developer.amadeus.com/docs/node/get_started/initialize)
  * [Find an Airport](https://developer.amadeus.com/docs/node/get_started/find_an_airport)
  * [Book a Flight](https://developer.amadeus.com/docs/node/get_started/book_a_flight)
  * [Get Flight Inspiration](https://developer.amadeus.com/docs/node/get_started/get_flight_inspiration)

Alternatively, head over to our [Reference](https://developer.amadeus.com/docs/node/reference) documentaton for in-depth information about every SDK method, it's arguments and return types.

## License

This library is released under the [MIT License](LICENSE).

## Help

Our [developer support team](https://developer.amadeus.com/developers) is here to help you. You can find us on [Twitter](#), [StackOverflow](#), and [email](#).

[gem]: https://nodegems.org/gems/amadeus-node
[travis]: http://travis-ci.org/amadeus-node
[support]: http://developer.amadeus.com/support
