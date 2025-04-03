from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

# Dummy match data
dummy_matches = [
    {"name": "John Doe", "address": "123 Main St", "city": "New York", "state": "NY"},
    {"name": "Jane Smith", "address": "456 Oak Ave", "city": "Los Angeles", "state": "CA"},
    {"name": "Alice Johnson", "address": "789 Pine Rd", "city": "Chicago", "state": "IL"}
]


def get_best_match(name, address, city, state):
    return random.choice(dummy_matches)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_match', methods=['POST'])
def get_match():
    data = request.json
    name, address, city, state = data["name"], data["address"], data["city"], data["state"]

    # Get the best match (dummy logic for now)
    best_match = get_best_match(name, address, city, state)

    return jsonify(best_match)


if __name__ == "__main__":
    app.run(debug=True)
