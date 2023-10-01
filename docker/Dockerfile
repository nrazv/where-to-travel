FROM ubuntu

RUN apt update

RUN apt install openjdk-17-jdk -y

RUN apt-get update && apt-get install -y mysql-server && apt-get clean

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

VOLUME [ "/images" ]

ADD /whertotravel-0.0.1-SNAPSHOT.jar whertotravel.jar

EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]
