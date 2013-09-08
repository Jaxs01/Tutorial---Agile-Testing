#!/bin/sh

# assumes that node & grunt are installed
# also `chmod +x release.sh` (make this file executable)

rm -rf dist
mkdir dist

grunt

cd app
npm install

zip -r ../dist/app.zip *

# now deploy
# please be careful this is unrestricted access

bees app:deploy -k 09F13925BDE9CAA6 -s AMM4EYHPVCNDH++JWGBJCMN6Q67XGCRQLGY8UWXKT5K= -a assurity-co/agiletesting -t nodejs -RPLUGIN.SRC.nodejs=https://s3.amazonaws.com/clickstacks/admin/nodejs-plugin-0.10.5.zip ../dist/app.zip

