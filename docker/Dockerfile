FROM nginx
# creation: docker build -t rq170/x47:1.0.0 .

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
