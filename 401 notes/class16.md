# AWS Cloud Servers

## AWS EC2

EC2 stands for Elastic Compute Cloud. This is a web service provided by Amazon Web Services (AWS).

Some use cases for EC2 are web hosting for hosting web apps and websites. Another use case is for processing big data. EC2 has high CPU and memory configurations that can benefit big data frameworks at scale.

With so many web hosting services like Heroku, Digital Ocean, and render.com - it may be difficult to see a reason to add another hosting service to your list of tools. However, one thing to consider is how AWS has integrated containerized EC2 instances to give you more control over your environment. This is important because of how complex performance and security requirements can become. This all needs to be managed by a service that can handle these demands. AWS also offers other integrated services to make deploying containerized apps to the cloud easier.

## EC2 For Humans

To find EC2 on the console you have to have an AWS account. You can thing acccess EC2 from the compute category that will navigate you to the EC2 dashboard where all configurating takes place.

The differences bwteen T2 Micro and XL... well first you have to know that these are two separate instances of EC2. T2 Micro is the smallest istance type and can be used for apps with minimal CPU requirements. The biggest difference is there CPU performance and memory. Micro comes with 1 virtual CPU and 1GB of memory while XL has 4 virtual CPUs with 16GB of memory. The more virtual CPUs and memory, the more processing power the instance is capable of generating.

A compute cycle is the amount of time a computer or server spends running a program. Essentially. a compute cycle is a measurement of peformance.

A good example of when a compute cycle comes into play is when you're opening a Google Docs file. The program is going through a series of compute cycles in order for the document and all of its permissions to load.

## Elastic Beanstalk

Elastic Beeanstalk is a managed service by AWS to help woth deploying, scaling, and managing web apps. This is a platform of some sort that has compatibility with several languages.

Elastic beanstalk compliments EC2 by hosting the code of a web app. Elastic Beanstalk provisions and configures the necessary EC2 instances.

Some benefits of using Elastic Beanstalk is the ability to deploy easily by using command line tools, automatic scaling, cost optimization, and integration with other AWS services.
