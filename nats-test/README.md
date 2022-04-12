## Nats Streaming server test

### purpose for testing

```
$  k port-forward nats-depl-6d96b7547c-5z8d6 4222:4222
```

### purpose for monitoring

```
$ k port-forward nats-depl-6d96b7547c-5z8d6 8222:8222
```

#### browser test (localhost:8222/streaming)

- http://localhost:8222/streaming/channelsz?subs=1
- 
