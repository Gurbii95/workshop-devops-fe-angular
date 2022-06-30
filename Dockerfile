FROM nginx

RUN # apk update && apk add nginx

COPY nginx-location.conf /usr/share/nginx/html

COPY dist/workshop-devops-fe-angular /usr/share/nginx/html

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
