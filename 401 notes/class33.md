# `<Login/>` and `<Auth/>`

## What is Role Based Controlled Access(RBAC)?

This is a way of restricting system access based on the roles and responsibilities of individual users within in organization.RBAC is most commonly used in computer systems or applications to enforce access control policies.

An example of RBAC paired with CRUD capabilities are:

    *  Manager: 
        - Can create, read, update, and delete users
        - Cannot create or delete roles
        - Can perform user management tasks
    * Viewer:
        - Can only read user data
        - Cannot create, update, or delete users or roles
        - View-only access

Benefits of using RBAC:

Improved security: Making sure that no one has too much access that does not correspond with their direct responsibilities within an organization.

Auditing: Allows the appropriate tracking of access and usage of acces-based roles and this helps with regulatory compliance.

Access Control Simplification: Centralized system of user access management. Makes it easier to assign and revoke permissions based on roles rather than individual user permissions.

## React Cookie Library vs React Cookies Component

The library is an API that manages brosweer cookies in React apps. The features include setting and retrieving cookies, configuring cookie options, and securing cookie support with HTTPS.

The component is a tool for handling cookies in React apps as well but some additional functionality added to it. You can set, get, and remove cookies, provide support for your cookies with time expiration, paths, and domains. You can also read and write multiple cookies at a time and have cookie encryption/decryption.

