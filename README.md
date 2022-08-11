### GET STARTED
https://thegraph.com/docs/en/developer/quick-start/

### TO COMPILE 
```
yarn codegen
```

### TO BUILD
```
yarn build
```

### To set up the graph
```
yarn global add @graphprotocol/graph-cli
```
### To set up local db
```
brew install postgres
```

### Testing using matchstick
- Must export the test functions in the mappings file when running the tests. These exports must be commented out during production.

Run the tests with this command:
```
yarn test
```

Run tests without building with this command:
```
graph test
```

- Helpful docs:
https://github.com/LimeChain/matchstick

https://github.com/LimeChain/demo-subgraph

https://limechain.tech/blog/matchstick-what-it-is-and-how-to-use-it/

### To rerun locally
```
yarn remove-local
yarn deploy-local
```

### To deploy (Aurora Mainnet)
```
graph auth --product hosted-service (ACCESS CODE)
graph deploy --product hosted-service 0xluckyg/path
```

### To deploy (Aurora Testnet)
Because aurora testnet has significantly reduced performance, aurora testnet subgraph has been deployed using AWS ECS. The following commands allow you to create and deploy subgraphs to public AWS ECS.
```
yarn build --network aurora-testnet

# Move to docker-test folder and create/deploy renaissance subgraph.
cd docker-test
yarn run create:subgraph:aurora-testnet
yarn run deploy:subgraph:aurora-testnet
```

### To deploy local
Move to docker-dev folder and run
```
sh start.sh
```

```
yarn codegen (if has not been run)
yarn create-local
yarn remove-local
yarn deploy-local
```

Query 
http://localhost:8000/subgraphs/name/renaissance-subgraph