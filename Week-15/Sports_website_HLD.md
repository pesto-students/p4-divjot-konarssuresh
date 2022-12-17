## Block Diagram

![sports_hld_1](https://user-images.githubusercontent.com/29543196/202840107-0656b946-14d7-4198-b881-626f46e8b0a4.jpg)

#### Traffic

i have taken similar sports based website daily traffic data from similarweb.com and traffic found was about 480M per month 13570 req per min.

There can be 2 ways in which data is updated manual or automated using some software by push/pull socket

#### System APIs

There are two types of APIs

1. Core APIs - These are the APIs which returns low level data from DBs. These APIs will be called internally.
2. Product APIs - These are the APIs which returns combined data from multiple core APIs and return it to the users.

Binder is the component which handles calling core APIs (asynchronously) and merging and returning to product API.
If any one of the core API fails 500 is returned in response to end user

#### Caching

Three tiers of caching will be used

1. Local cache to save hot/famous APIs and its local because to avoid network calls to distributed cache
2. If the data is not found in the Local cache then go to Distributed cache
3. Varnish between the binder and Core APIS to avoid stampede effect. eg: when about 30 to 40 calls for the same API are coming to varnish, it combines all of that API calls and get it once and cache it for few seconds

#### Hystrix

Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable.

### How scores will be updated to the users

There is two possible ways to do it

1. Live Updates: - way to push data to the clients via web sockets. There will be a scheduled API which will call product API at certain intervals which could be 15-20 secs lets say.Data fetched will be queued to be pushed to users connected for live wpdates via web socket.
2. Pull based mechanism: this is more generic approach user have to pull the data through browsers etc

#### Possible Databases to be used

MongoDB
Couch DB
Cassandra
