FROM nginx

COPY ./dist /html

COPY ./nginx.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf

RUN nginx -t

EXPOSE 8085
