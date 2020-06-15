FROM ubuntu:20.04

LABEL maintainer="HF Team"


WORKDIR /home/flashcard/
EXPOSE 3000

RUN apt-get update \ 
    && apt-get install -y git \
    && apt-get install -y curl gnupg \
    && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -y nodejs \
    && npm install yarn -g 

ADD /code/ /home/flashcard

COPY ./docker/entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["/usr/bin/entrypoint.sh"]
CMD echo "Hello World"


