---
path: "/cache-npm-install-on-docker"
date: "2015-09-13"
title: "Cache npm install on docker"
---

Docker had a great cache mechanism, and you can easily use it to improve your image build time.

![](/images/2015/09/docker-node.jpeg)

## Node Application Dockerfile

You can use the below Dockerfile to run a simple nodejs application, but for every image build the command `npm install` will be executed.

```Dockerfile
FROM node

ADD . /code
WORKDIR /code

RUN npm install

CMD npm start
```

## Use docker layer cache

A great optimization to the previous Dockerfile is to run `npm install` before adding your codebase. For this you will have to add `package.json` and to run `nmp install`, before you add your codebase.

```Dockerfile
FROM node

ADD ./package.json /code/package.json
WORKDIR /code
RUN npm install

ADD . /code

CMD npm start
```

### Conclusion

Now your `npm install` are cached and will be rerunned only if your `package.json` changes, making your image build time faster.

