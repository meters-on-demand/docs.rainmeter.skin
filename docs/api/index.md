# How to consume the mond API

How to use the Meters on Demand API. The API currently only supports HTTP GET as it's meant to work with Rainmeter and [WebParser](https://docs.rainmeter.net/manual/measures/webparser/). If you complain enough or [contribute](https://github.com/meters-on-demand/mond-api) you can get POST support.

## All skins

Find all skins in the database

```shell
GET https://api.rainmeter.skin/skins
```

## Searching

You can search any field by specifying the field name as a query parameter, with the search as its value:

`?full_name=reisir/jiffy`

```shell
GET https://api.rainmeter.skin/skins?full_name=reisir/jiffy
```

To search nested fields like the repository owners name, use dot notation:

`?owner.name=reisir`
```shell
GET https://api.rainmeter.skin/skins?owner.name=reisir
```

You can also search using regex patterns: 

`?full_name=/.*?hyper/`
```shell
GET https://api.rainmeter.skin/skins?full_name=/.*?hyper/
```

You may not specify regex options. The queries are always case-insensitive.

See [example requests](#example-requests) for more detailed examples.

## Options

You can specify query options the same way fields are queried. Query options affect the order and amount of results the API returns.

`?option=value`

|Option|Value|Description|Default|
|--|--|--|--|
|sort|a field name|which property to sort by|_id|
|direction|ascending \| descending|which direction to sort|descending|
|limit|positive integer|limits the amount of skins returned|0|
|skip|positive integer|how many results to skip|0|

### Pagination

The limit and skip options can be combined to paginate the results. If you want `n` results per page, set limit to `n` and skip to `n * page` where page is the current page, starting from 0.

# Example requests

All skins by a specific user

```sh
curl https://api.rainmeter.skin/skins?owner.name=reisir
```

All skins with the topic #visualizer

```sh
curl https://api.rainmeter.skin/skins?topics=visualizer
```

Get the 5th page of all skins sorted by the latest update, with 10 items per page.

```sh
curl https://api.rainmeter.skin/skins?sort=updatedAt&limit=10&skip=40
```

