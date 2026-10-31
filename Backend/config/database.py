import mysql.connector  
from mysql.connector import Error

def get_db_connection():


 try:
    dbConnection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="password",
        database="python_mentor_challenge",
        port=3306
    )

    if dbConnection.is_connected():
        print("MySQL Database Connected Successfully!")

    return dbConnection

 except Error as error:
    print("Database Connection Failed:", error)
    return None


# Test database connection

if __name__ == "__main__":

  dbConnection = get_db_connection()

if dbConnection:

    try:
        dbCommand = dbConnection.cursor()

        dbCommand.execute("SELECT DATABASE()")

        result = dbCommand.fetchone()

        print("Current Database:", result[0])

        dbCommand.close()

    except Error as error:
        print("Query Error:", error)

    finally:
        dbConnection.close()
        print("Database Connection Closed.")

