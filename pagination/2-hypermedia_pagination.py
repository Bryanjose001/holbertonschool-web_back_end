#!/usr/bin/env python3
"""function that returns a list of pagination parameters"""
import csv
import math
from typing import List, Tuple, Dictionary

def index_range(page: int, page_size: int) -> Tuple:
    """function that has two interger arguments and returns a parameter"""
    return (((page * page_size) - page_size), (page * page_size))


class Server:
    """Server class to paginate a database of popular baby names. """

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """functions that uses assert for page maniging"""
        assert type(page) is int and page > 0
        assert type(page_size) is int and page_size > 0
        data = Server.dataset(self)
        memoria = index_range(page, page_size)
        return data[memoria[0]:memoria[1]]
    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        '''Returns a dicctionary in hypermedia pagination style'''
        my_dict = {
            'page_size':'', 
            'page': '',
            'data':'',
            'next_page':'',
            'prev_page':'',
            'total_pages':'',
        }
