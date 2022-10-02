# Setup Test Data
These scripts setup the required test data
```
### Data Structure
```shell script
jobs (Collection)
 +-- [jobId] (Doc)
     +-- applications (Collection)
         +-- cancelled (Collection)
             +-- [userId] User Doc
         +-- rejected (Collection)
             +-- [userId] User Doc
         +-- shortListed (Collection)
             +-- [userId] User Doc
venues (Collection)
  +-- [venueId] Venue (Doc)
      +-- workers (Collection)
          +-- [workerId] Worker Doc
messages (collection)
 +-- [userId] collection
     +-- message (doc)
users
  [userId] User (Doc)
  +-- employmentHistory (collection)
      +-- [jobId] Job (Doc)
  +-- ratings (Collection)
      +-- [ratingId] Rating (Doc)
  +-- favourites (Collection)
      +-- [jobId] Job (Doc)
  +-- qualifications (Collection)
     +-- [qualificationId] Qualification (Doc)
  
```

## Deploying
```shell script
nvm use
yarn install
firebase login
firebase use okbossapp
firebase deploy --only functions
```
