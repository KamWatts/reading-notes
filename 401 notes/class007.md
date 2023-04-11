# Bearer Authorization

## Intro to Json Web Tokens(JWT)

A JWT is a self-contained way to securely transmir information in the form of a JSON object between separate parties.

JWTs are primarily used for authentication and authorization purposes for web applications. It's a secure way of transmitting information between parties.

In the second component of a JWT, known as the payload component, is where the claims or statements about the user is made. It can be standard claims such as 'issuer', 'user', 'subject'. Claims can be custom and are usually base-64 encoded.

## Are JWTs Secure?

The security of a JWT comes from the fact that it is digitally signed and can be verified to ensure it has not been tampered with. This improves the security of a JWT because it increases the steps that includes recalculations and client verifications.

Usually the sender and receiver both know the secret or public key. This key is used to verify and sign the JWT.

Concatenated content and secret content can be sent using a cryptic algorithm to create a hash or message that represents the combined data.

## JWTs Explained

There are several reasons to use JWTs and this is because JWTs are stateless, portable, secure, flexible, and supported across many frameworks and libraries.

A good way to explain a compact JWT is comparing it to an Apple Wallet. Instead of holding all of your valuable information in a wallet that could get lost with your cridet cards, social security card, and identification cards in it - storing most of your info in an apple wallet actually encrypts your data and places extra security measures in the way in order to access the cards and information to use them.

There are three components to every JWT and they include the following:

    * Header
    * Payload
    * Signature

The overall structure of a JWT is constructed to provide a secure way to transit information between systems and applications.
