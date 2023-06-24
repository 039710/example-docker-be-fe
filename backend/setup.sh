!/bin/bash

# run migrations
npm run db-drop
npm run db-create
npm run db-migrate
npm run db-seed

# echo "Starting server"
#
echo "Starting server"
npm run start