
build:
	docker build . -t react

run:
	docker run --name="react" -d -P react

clean:
	docker rm $$(docker ps -aq)

bash:
	docker exec --rm -it react /bin/bash
