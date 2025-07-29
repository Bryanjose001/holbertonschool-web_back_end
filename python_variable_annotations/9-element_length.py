#!/usr/bin/env python3
"""just a script that defines a function"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """You get brownie points if you get that reference"""
    return [(i, len(i)) for i in lst]
