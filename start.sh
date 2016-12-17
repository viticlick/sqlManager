#!/bin/sh
docker run -d --name mynginx -p 8000:80 -v $(pwd)/front/:/usr/share/nginx/html sqlnginx
