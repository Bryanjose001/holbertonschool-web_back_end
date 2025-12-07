#!/usr/bin/env python3
"""Inserts doc into a collection"""


def insert_school(mongo_collection, **kwargs):
    """Inserts doc into a collection"""

    my_documentation = mongo_collection.insert_one(kwargs)
    return my_documentation
