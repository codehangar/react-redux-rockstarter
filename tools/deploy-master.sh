#!/usr/bin/env bash

# Create tarball
# tar -C dist -cvf artifacts/${REV_NAME}.tar .
#tar -C dist -cvf ${REV_NAME}.tar .
#CMD_RESULT=$?
#if [ $CMD_RESULT -ne 0 ]; then
#  echo "Tarball Packaging Failed"
#  echo $CMD_RESULT
#  exit $CMD_RESULT
#fi

ssh root@datgoat.com "
    mkdir -p /var/www/hobbygoblin-api/public;
"
CMD_RESULT=$?
if [ ${CMD_RESULT} -ne 0 ]; then
  echo "Failed: create public directory at /var/www/hobbygoblin-api/public"
  echo ${CMD_RESULT}
  exit ${CMD_RESULT}
fi

