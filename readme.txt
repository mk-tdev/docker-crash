Docker commands

docker images
docker ps

docker pull nginx:1.25
docker run -d nginx:1.25 [d for detach mode]

docker logs <id>

port binding: [expose to local host]
docker run -d -p 8081:80 nginx:1.25 

docker stop <id>
docker start <id>

list of all containers:
docker ps -a

start with own name:
docker run --name web-app -d -p 8081:80 nginx:1.25

build docker image:
docker build -t mk-n-server:1.0 .