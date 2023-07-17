---
title: Kafka Manual Topic Creation
---

Recently, I enrolled on a udemy course on microservices. It's a good point to mention I am a noob in some of the topics below. 

One of the tools it utilizes is bitnami/kafka. The instructor was able to create 2 containers(one for kafka and one for zookeeper) through a docker compose file and when instructor ran his code, consumer seamlessly created a topic on kafka. But that was not the case for me. In the first attempt, I saw that kafka kept restarting and it was unreachable. I specified version as 3.1.2 and that fixed that problem.

Then when I run my code, I started getting this error on consumer's end:

```
Subscribed topic not available Broker: Unknown topic or partition
```

It seems that [1] [2] [3], normally it is expected for consumer or producer to auto create topic but currently that part has some issues around it. So here's what I tried and what worked for me:


## Did not work: Explicitly set flag 
There is a flag to autocreate topics. It worked for some people [4] but not me.

I added it to my yml file. I tried with false too and I tried removing it completely. Nothing(apparently) changed. Give it a shot, it might work for you.

```
- KAFKA_AUTO_CREATE_TOPICS_ENABLE=true
```

## Worked for me: Manually create a consumer 
What worked for me was creating a topic manually through kafka-topics.sh file.

I found this code [5]
```sh
kafka-topics.sh --bootstrap-server localhost:9092 --topic MyTopicsName --create --partitions 3 --replication-factor 1
```

But to be able to run the code, I needed to find where `kafka-topics.sh` was in my container first. In your container's terminal, run:

```sh
find . -name kafka-topics.sh
```

CD to directory of the file, then run your script. You must get an information message:

```
Created topic MyTopicsName.
```

## Have not tried yet: Use admin api
Another way to create a topic, which I have not tried yet is to use admin api. You can find some ready to run codes for it around [6], needless to say to be ran at your own risk.

# References
* [1]: https://stackoverflow.com/a/53911281  "stackoverflow.com"
* [2]: https://stackoverflow.com/a/65614333  "stackoverflow.com"
* [3]: https://github.com/confluentinc/confluent-kafka-go/issues/788  "github.com"
* [4]: https://github.com/confluentinc/confluent-kafka-dotnet/issues/1366  "github.com"
* [5]: https://www.conduktor.io/kafka/kafka-topics-cli-tutorial/#Example-0  "conduktor.io"
* [6]: https://github.com/confluentinc/confluent-kafka-go/blob/master/examples/admin_create_topic/admin_create_topic.go  "github.com"