#!/usr/bin/env python3
"""function that returns a list of pagination parameters"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """function that has two interger arguments and returns a parameter"""
    return (((page * page_size) - page_size), (page * page_size))
