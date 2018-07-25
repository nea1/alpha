# Alpha

Running locally:

```
skaffold dev

minikube service sleeper
```

CI build/docker push:

```
export TAG=1.0 && skaffold build -p ci
```