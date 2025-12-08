#!/usr/bin/env python3
''' Log stats'''
from pymongo import MongoClient


def log_stats():
    ''' yes more stuff provides some stasts for it to log on the mongom db'''
    client = MongoClient('mongodb://127.0.0.1:27017')
    my_db = client.logs
    my_collection = my_db.nginx

    total_logs = my_collection.count_documents({})
    print(f"{total_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = my_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check = my_collection.count_documents(
        {"method": "GET", "path": "/status"})
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
