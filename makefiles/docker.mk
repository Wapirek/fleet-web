### DOCKER ###

# ustawianie nazwy tagu poprzed dodanie branchu
TAG = $(shell git branch --show-current)

docker.build:
	docker build --no-cache -t wiotrek/fleet-web:${TAG} -f Dockerfile .
	docker push wiotrek/fleet-web:${TAG}
