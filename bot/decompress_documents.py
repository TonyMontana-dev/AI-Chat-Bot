"""
This file is used to decompress the documents stored in the documents.db database.
The script connects to the database, retrieves all rows from the "documents" table, and iterates through each row.
It creates a new folder named "documents" if it does not exist and writes the contents of each row to a text file in that folder.
The text files are named based on the URL of the document, with special characters replaced by underscores.
This process helps extract and save the documents in a readable format for further analysis or processing.
"""

import os 
if not os.path.exists('documents'):
    os.makedirs('documents')

import sqlite3
connection = sqlite3.connect('documents.db')
cursor = connection.cursor()
cursor.execute("SELECT * FROM documents")

result = cursor.fetchone()
while result:
    file=open("documents/"+result[0].replace(':', '_').replace('/', '_').replace('.', '_').replace('?', '_')+".txt", 'w', encoding='utf-8')
    file.write(result[1])
    file.close()
    result = cursor.fetchone()
# Close the cursor and connection
cursor.close()
connection.close()
