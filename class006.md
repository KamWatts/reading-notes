# Authentication

## Securing Passwords

As a developer, I understand the importance of privacy when it comes to user accounts on my website. Every account needs to have protections in place to prevent hackers from sabotaging and taking over an account for whatever reason. The most common way for a profile to be hacked is through password hacking.

Luckily there are ways to prevent this type of activity using hashing algorithms. Hashing algorithms encrypt passwords into unintelligible patterns of letters and numbers. This prevents a user's password from being saved in plaintext. In the case of a major security breach, hackers will not be able to parse through scrambled data.

Bcrypt is an algorithm that hashes passwords securely. It is essentially a language for password encryption with safe storage integration.

One may use Bcrypt because the iteration count in the encryption can adapt over time and cause bcrupt to scale with computing power.

## Basic Auth

Basic authentication is an HTTP method to provide a user name and password. This can also be referred to as a challenge-response mechanism. It's the means of authenticating an end user before granting them access to resources.

The Authorization header contains a base-64 encoded username:password string. Base-64 is a group of binary-to-text encodinng schemes that represent binary data in sequences of 24-bit.

## OWASP auth cheatsheet

The authentication lifestyle goes as such: Authorization request, Authorization grant, Access token, Protected resource. There responses and requests are sent back and forth between the Client, User, Authorizations server, and Resource server.

Error messaging should respond generically for the purpose of user ID and password enumeration. 