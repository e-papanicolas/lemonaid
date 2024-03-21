### Development

Use `docker compose watch` to run the application containers in watch mode during development.

Use `docker compose up -d` to run in detached mode, ie: not in the current terminal.

Using `volumes` lets you persist data even when the container is trashed and restarted.

Use bind mount to access local folders for hot reload during development:

```
app:
    # ...
    volumes:
      - ./app:/usr/src/app
      - /usr/src/app/node_modules
```

The volumes element tells Compose to mount the local folder ./app to /usr/src/app in the container for the todo-app service. This particular bind mount overwrites the static contents of the /usr/src/app directory in the container and creates what is known as a development container. The second instruction, /usr/src/app/node_modules, prevents the bind mount from overwriting the container's node_modules directory to preserve the packages installed in the container.

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References

-   [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
