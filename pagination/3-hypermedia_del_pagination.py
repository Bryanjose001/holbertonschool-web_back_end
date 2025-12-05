#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List,Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        '''function thatg gets hyper like KSI'''
        more_data = self.indexed_dataset()
        assert index < len(more_data) and index >= 0
        data = []
        next_index = index + page_size
        index1 = index
        for index1 in range(page_size):
            if not more_data.get(index1):
                next_index += 1
                index1 += 1
            data.append(more_data.get(index1))
            index1 += 1
        my_other_dict = {
            'index': index ,
            'next_index': next_index,
            'page_size': page_size,
            'data':data

        }
        return my_other_dict