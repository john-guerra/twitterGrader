#Dump tweets
```
mongoexport --db tweetometro --collection mainApp_tweet --out tweets.json
```
#Copy them to the local machine
```
scp -i ~/Dropbox/tweetometro_paz.pem ubuntu@54.236.233.192:tweetometro/tweets.json .
mongoimport -h 127.0.0.1:3001 --db meteor --collection mainApp_tweet --type json --file tweets.json
```
# twitterGrader
