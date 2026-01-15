FROM ubuntu:latest

WORKDIR /app 

COPY . /app/

ENV PORT=5252

RUN apt-get update && apt-get upgrade -y && apt-get install python3 -y && apt-get install python3-pip -y

RUN pip3 install flask --break-system-packages

RUN pip3 install flask-cors --break-system-packages

CMD ["python3", "api.py"]