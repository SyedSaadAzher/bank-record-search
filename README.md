# bank-record-search

hosted at: http://ec2-3-14-85-79.us-east-2.compute.amazonaws.com:3000/.

Disclaimer: Since the free version of aws EC2 is not that resource rich and there are close to 40 thousand records in MongoDb
it takes a lot of time for displaying and searching the records on the hosted website. It is advisable to deploy this at the localhost and test.


To deploy please clone the repository and follow the steps below
  
    cd bank-record-search
    npm install
    
    cd backend
    
    npm install
    
    install mongodb and use banks.json file to import db and collections to mongodb
    
    make sure mongodb is running
    
    open another terminal
    
    run npm start from backend directory to start the backend
    
    now run npm start from bank-record-search directory to run the frontend
    
    You can now access the website from localhost:3000
    
    
#email verification is necessary for registration on the website
