from flask import Flask, jsonify
from pymongo import MongoClient
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
port = 3000  # You can change this port if needed

@app.route('/api/users')
def get_users():
    client = MongoClient(app.config['MONGO_URI'])

    try:
        database = client.get_database('pbscybsec')  # Replace 'pbscybsec' with your actual database name
        collection = database.get_collection('users')  # Replace 'users' with your actual collection name

        # Projection to include only specified fields
        projection = {'firstName': 1, 'lastName': 1, 'impressions': 1, '_id': 0}

        users_data = list(collection.find({}, projection))

        if users_data:
            return jsonify(users_data)
        else:
            return jsonify({'message': 'No users found'})

    except Exception as e:
        print(f'Error fetching data: {e}')
        return jsonify({'error': 'Internal Server Error'}), 500

    finally:
        client.close()

if __name__ == '__main__':
    app.run(port=port)
