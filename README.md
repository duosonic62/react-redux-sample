# Create-react-app with docker-compose

## USAGE
1. build   
```$ docker-compose build```

1. create-react-app  
```$ docker-compose run --rm node npx create-react-app react-redux-learning```

1. npm install  
```docker-compose run --rm node yarn install``

1. yarn add
```docker-compose run --rm node sh -c "cd react-redux-learning && yarn add" ```

1. run react app  
```docker-compose run --rm --service-ports node sh -c "cd react-redux-learning && yarn start" ```
react-redux-learning

* --rm  
runが終了した際にimageを削除してくれるため
* sh -c "cd [APP_NAME] && yarn start
2つのコマンドを一気に処理してもらうため
