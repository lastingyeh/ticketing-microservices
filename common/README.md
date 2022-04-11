## Common

### Modify package.json
```json
{"name": "@lastingtickets/common"...}
```

### Login

```
$ npm login
```

### Add to Git

```
$ git init
$ git add .
$ git commit -m "init"

```

### publish to npm (first)

```
# first publish to npm
$ npm publish access --public

# if update common libs that integrated git & build & publish
$ npm run pub
```

### init typescript

```
$  tsc --init
```

### update libs (update at applied project)

```
# run at project path
$ npm update @lastingtickets/common --save
```