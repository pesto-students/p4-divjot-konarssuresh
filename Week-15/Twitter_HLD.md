## Block Diagram

![Block Diagram](https://user-images.githubusercontent.com/29543196/202843608-e2bb2065-1c23-482d-ab52-452744df0927.jpg)

#### Traffic

Twitter now has 300M worldwide active users. Every second on an average, around 6,000 tweets are tweeted on Twitter. Also, every second 6,00,000 Queries made to get the timelines!!
Considerations:-
If you see all of the features, it looks like read heavy, compared to write
Its ok to have Eventual consistency, It's not much of a pain if the user sees the tweet of his follower a bit delayed
Space is not a problem as tweets are limited to 140 characters

#### Database

We can use Sql database for this containing 3 tables

1. User Table
2. Tweet Table - Many to 1 relationship with user
3. Follower table - Many to 1 relationship with user

### Services:-

There will be 3 services

1. Tweet writer service -> it uses fanout async approach to save the tweet made by user to database as well as redis. and it also passes tweet to Apache storm queue to that calculates trending tweet
2. Timeline Service -> this service will build timeline to display into user based on trending tweets and people he follows
3. Search Service -> this service will return search results from indexed search based on keywords.

#### HTTP PUSH Web sockets

This will be used to maintain real time connection. pushing notifications to users etc those are already logged in.
