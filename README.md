# Alpha

Running locally:

```
skaffold dev

minikube service alpha
```

CI build/docker push:

```
export TAG=1.4 && skaffold build -p ci
```