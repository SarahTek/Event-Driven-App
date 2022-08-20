Phase 2 Requirements

In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called Socket.io so that clients can communicate over a network. Socket.io manages the connection pool for us, making broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but our developer story changes to reflect the work needed for refactoring.

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.
- And as developers, here is our updated story relevant to the above.

- As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and client applications

### Technical Requirements / Notes

In order to switch from Node Events to Socket.io, the refactoring process will involve changes to each application to use the core features of `Socket.io`.

### Overview

The goal of this lab is to create a namespaced Socket.io event server, and to configure Vendor and Driver Client Modules.

- The Socket Server will create a namespace of caps that will receive all CAPS event traffic.
Each Vendor and Driver Client will connect to the caps namespace.
- The server will emit specific events to each socket that is listening for their designated events from the Global Event Pool defined in the Server.
- Each Vendor will only emit and listen for specific events based on their Vendor ID. This will be managed by rooms within Socket.io.
- Each Driver will “pick up” a package when the vendor notifies the Server that an “order” is ready and simulate “in-transit” and “delivered” events.

## Collaborators

- Tony
- Danny
- Martha
