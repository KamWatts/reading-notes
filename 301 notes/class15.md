# Authentication

## What is OAuth

1. What is OAuth?

Decouples authorization and authentication

OAuth is a secured, third-party sign sign-on user access authetication system. This allows users to sign in to different websites with credentials that exist in the form of two-factor authentication, biometric clarification, and multi-factor authentication amongst other options.

2. Give an example of what using OAuth would look like.

One example could be using your phone to recieve a unique id number to log onto a network on your laptop.

or

Using an authenticator app to log in to your crypto wallet.

3. How does OAuth work? What are the steps that it takes to authenticate the user?

Open Authoriztion **(Oauth)** uses more than one unrelated network or service to accomplish a task on behalf of the user. 

Oauth only works with HTTPS (secured hypertext transer protocols). 

The site with Oauth capabilities uses another website to verify the user credentials. This process involves one-time use tokens to navigate through the authentication steps. The `request token` eventually becomes an `acccess token ` after the user approves the second websites authorization transaction. Aftwards, the second website gives permission to the first website as proof of authentication on the user's behalf.

4. What is OpenID?

At first, OpenID served as a single sign-in that vouched for the identity of the user to access a website. 

Now, OpenID is now known as opId Connect and serves as an extra authentication layer in the Oauth world. OpenID has re-invented their niche by pairing with Oauth so the two components can now compliment each other.

## Authorization and Authentication flows

1. What is the difference between authorization and authentication?

Authorization = granted access, what you're allowed to do
Authentication = verified ID, you are who you say your are

2. What is Authorization Code Flow?

When the user tries to login to a website, they're redirected to an authorization prompt (second website). Using one of the configured authorization options, the user gets redirected back to the first application with an authorization code. AuthO's software development kit (SDK).

3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?



This is an extra step in the Authorization Code Flow to enhance the security of how tokens are stored on mobile device applications. 

4. What is Implicit Flow with Form Post?

Made for applications that cannot securely store Client Secrets (random questions with answers only known to the user), Implicit Flow refers to the ability to acccess a webpage without an ID token. Instead, Implicit Flow uses OpenID which obtains tokens without the need to store Client Secrets. With this method in place, it is not necessary to obtain, maintain, use, and protect a secret in an application.

5. What is Client Credentials Flow?

This is when a system authorizes access based on the client (front-end) credentials. This grants access to a recognized system as opposed to the person using the system. This is common in secure databases like an intranet that is accessed by computers specifically associated with a company.

6. What is Device Authorization Flow?

This is when another device is used to give another device authorization to use a website. An example of this is when you verify access for your iPad to use Gmail by using a code sent to your cell phone. Or when GitHub Mobile gives you a number to type into your laptop when you visit the site from a new desktop computer.

7. What is Resource Owner Password Flow?

Highly recommended to be used in an application that can be highly trusted in storing  credentials, Resource Owner Passwords are stored usernames and passwords. It is advised to only use this method only if Authorization Code Flow cannot be used.
