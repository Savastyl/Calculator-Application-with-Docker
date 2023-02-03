# Calculator Web Application

The calculator web application that performs basic arithmetic operations. This application is built using HTML, CSS, and JavaScript, and can be run using Docker.

![Alt text](Media/1.png)

### Prerequisites
+ Docker installed on your local machine
+ Text editor is Visual Studio Code,

### Build the Docker image by running the following command in your terminal:

```
docker build -t calculator-web-app .
```

### Run the Docker container:

```
docker run -d -p 8081:80 calculator-web-app
```

Open your web browser and navigate to http://localhost:8081


## Built With
+ HTML: Used to create the structure and content of the web page.
+ CSS: Used to style the web page.
+ JavaScript: Used to add interactivity and perform arithmetic operations.
+ Docker: Used to run the application in a container.


## To view Docker logs, use the command:

```
docker logs my_container
```

By default, the logs will show the latest logs. If you want to see all logs, use the --follow or -f option. For example:

```
docker logs -f my_container
```

```
...
172.17.0.1 - - [03/Feb/2023:04:01:13 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.
0 Safari/537.36" "-"
172.17.0.1 - - [03/Feb/2023:04:01:13 +0000] "GET /style.css HTTP/1.1" 304 0 "http://localhost:8081/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTM
L, like Gecko) Chrome/109.0.0.0 Safari/537.36" "-"
172.17.0.1 - - [03/Feb/2023:04:01:13 +0000] "GET /script.js HTTP/1.1" 304 0 "http://localhost:8081/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTM
L, like Gecko) Chrome/109.0.0.0 Safari/537.36" "-"
172.17.0.1 - - [03/Feb/2023:04:07:19 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.
0 Safari/537.36" "-"
172.17.0.1 - - [03/Feb/2023:04:10:22 +0000] "GET / HTTP/1.1" 200 1070 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0" "-"
172.17.0.1 - - [03/Feb/2023:04:10:22 +0000] "GET /style.css HTTP/1.1" 200 565 "http://localhost:8081/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/201001
01 Firefox/109.0" "-"
172.17.0.1 - - [03/Feb/2023:04:10:22 +0000] "GET /script.js HTTP/1.1" 200 414 "http://localhost:8081/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/201001
01 Firefox/109.0" "-"
2023/02/03 04:10:22 [error] 30#30: *11 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request:
 "GET /favicon.ico HTTP/1.1", host: "localhost:8081", referrer: "http://localhost:8081/"
172.17.0.1 - - [03/Feb/2023:04:10:22 +0000] "GET /favicon.ico HTTP/1.1" 404 153 "http://localhost:8081/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/2010
0101 Firefox/109.0" "-"
...

```
