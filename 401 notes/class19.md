# AWS Events

## AWS SQS vs SNS

Amazon's Simple Queue Service (SQS) and Simple Notification Service (SNS) are messaging services. The use cases between the two obviously differ, so let's decouple the differences below:

Amazon SQS manages message querying for sending, storing, and receiving mesages between software components. Using SQS guarantees that any mesage wil be processed atleast once and in the same order they were sent.

Amazon SQS manages public and sub messaging. With SNS you can publish and deliver messages to multiple recipients using an array of protocols.

Uses for Amazon SQS are asynchronous mesaging, bath processing and delayed processing.

Uses for Amazon SNS include evet-driven architecture, notications, and application integration.

## AWS SQS and SNS

SQS and SNS utilizes a "fanout" pattern. This means messages are first published to an SNS topic, then distributed to SQS queues. In order it goes as follows:

1. Create SNS topic
2. Create SQS queues
3. Subscribe queues to the SNS topic
4. Publish message to SNS topic
5. Consume messages from SQS queues

Push notifications send real-time messages to mobile apps, web apps, and any other device that allows. For SNS usage the following steps can be followed.

1. Create an SNS topic
2. Create an endpoint
3. Subscribe to the endpoint in the SNS topic
4. Publish messahe to the SNS topic
5. Handle incoming notifications

## SQS and SNS Basics

A large scale distributed application can make use of a queue in a variety of ways and this could be for decoupling components, scaling horizontally, ensuring reliability, managing traffic, and message priotizing.
