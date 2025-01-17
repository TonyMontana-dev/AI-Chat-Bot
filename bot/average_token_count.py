"""
This file calculates the average token count of the documents stored in the "documents.db" database.
It connects to the database, retrieves all rows from the "documents" table, and iterates through each row.
It uses the chatGPT-3.5-turbo's tokenizer to calculate the token count of each document.
The total token count is accumulated, and the average token count is calculated by dividing the total token count by the number of documents.
The average token count is then printed to the console.
"""

#The average token count is: 1574.4411512946715

import os
import re
import time
import sqlite3
connection = sqlite3.connect('documents.db')
cursor = connection.cursor()
cursor.execute("SELECT * FROM documents")
result = cursor.fetchone()

import tiktoken
encoding = tiktoken.get_encoding("cl100k_base") #using chatGPT-3.5-turbo's tokenizer for speed, and to avoid Google API rate limit
def count_tokens(string):
    return len(encoding.encode(string))
  
average=0
count=0

while result:
    count+=1
    average+=count_tokens(result[1])
    result = cursor.fetchone()

print(f"The average token count is: {average/count}")
cursor.close()
connection.close()