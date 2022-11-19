## Block Diagram

![Block Diagram](https://user-images.githubusercontent.com/29543196/202843608-e2bb2065-1c23-482d-ab52-452744df0927.jpg)

#### Traffic

Twitter now has 300M worldwide active users. Every second on an average, around 6,000 tweets are tweeted on Twitter. Also, every second 6,00,000 Queries made to get the timelines!!
Considerations:-
If you see all of the features, it looks like read heavy, compared to write
Its ok to have Eventual consistency, It's not much of a pain if the user sees the tweet of his follower a bit delayed
Space is not a problem as tweets are limited to 140 characters
