1.

```bash
docker build -t counter-app:latest
```

2.

```bash
kubectl apply -f deployment.yaml
```

3.

```bash
kubectl get pods
```

4.

```bash
kubectl port-forward pod/counter-app-deployment-<uid> 3000:3000
```