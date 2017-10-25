build-img:
	docker build . -t react

run: # --mount type=bind,source=$$(pwd)/src,target=/src,bind-propagation=shared == -v $$(pwd)/src:/src:shared
	docker run -d --name react -v $$(pwd)/src:/src:shared -p 8080:8080 react

logs:
	docker logs react

down:
	docker stop react; docker logs react; docker rm react

clear:
	docker rm $$(docker ps -qa); docker rmi $$(docker images -qf "dangling=true")

remove-img:
	docker rmi react

bash:
	docker exec -it react /bin/bash
