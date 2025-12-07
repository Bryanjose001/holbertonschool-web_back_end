#!/usr/bin/env python3 
"""some imports"""
from typing import List


def list_all(mongo_collection: object) -> List:
    """a Python function that lists all documents in a collection"""

    my_documentation = list(mongo_collection.find())
    return my_documentation