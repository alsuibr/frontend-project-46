gendiff:
	./bin/gendiff.js
lint:
	npx eslint .
test:
	npx jest

install:
	npm ci

test:
	npx jest

test-coverage:
	npx jest --coverage