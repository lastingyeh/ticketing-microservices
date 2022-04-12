# Microservices Overview

## Microservices concept

1. build as central library as an NPM module
2. precisely define all of events on shared library
3. strong with Typescript
4. test write as much as possible
5. k8s cluster in cloud / local
6. handle concurrency code

## Environment
### [Dev] Minikube
```
# enable ingress
$ minikube addons enable ingress

# mac env
$ code /etc/hosts
```

### [Dev] skaffold

- [test auth](https://skaffold.dev/)

- [skaffold](https://skaffold.dev/docs/references/yaml/)

```
# modify src file
$ ts-node-dev --poll src/index.ts

# run
$ skaffold dev
```

### [Dev] k8s config

- auth-depl.yaml
- auth-mongo-depl.yaml
- ingress-srv.yaml

```
# create secret for jwt key at auth 
k create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

```
# test auth at browser
# chrome at browser (typepo 'thisisunsafe')

### Microservices concept

1. build as central library as an NPM module
2. precisely define all of events on shared library
3. strong with Typescript
4. test write as much as possible
5. k8s cluster in cloud / local
6. handle concurrency code

### Typescript initialize
```
### [Dev] nvm
```
$ nvm install [varsion]

$ nvm use [varsion]

$ which npm

$ npm config set prefix $NVM_DIR/versions/node/[version]

```

### [Dev] typescript setup
```
$ npm install -g typescript ts-node
```

## APIs architecture
### Resources

- Users
- Tickets
- Order
- Charge
- Common

#### Services

- auth (mongodb)
- signup
- signin
- signout
- currentuser
- tickets (mongodb)
- orders (mongodb)
- expiration (redis)
- payments (mongodb)

#### Common 

- middlewares
- events

#### Event Bus

- [Nats Streaming Server](https://docs.nats.io)
- [Nats Streaming at docker hub](https://hub.docker.com/_/nats-streaming)
- 

##### Events definition

- UserCreated
- UserUpdated
- OrderCreated
- OrderCancelled
- OrderExpired
- TicketCreated
- TicketUpdated
- ChargeCreated

#### TEST

- Basic Request Handling
- Some tests around models
- Event emitting + receiving
- Jest (npm run test)
- Libs
  
```
# test setup
$ npm install --save-dev @types/jest @types/supertest jest ts-jest supertest mongodb-memory-server
```