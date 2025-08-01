#!/usr/bin/env python3
"""Async function to create a task"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """wait for a random delay and return a task"""
    return asyncio.create_task(wait_random(max_delay))
