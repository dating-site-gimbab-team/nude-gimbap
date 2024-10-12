import json
import random as rnd

import requests
from tqdm import tqdm

base_url = "http://localhost:8080"


def create_users():
    with open("script/dummy.json", "r") as f:
        rows = json.load(f)
    for row in tqdm(rows):
        row["name"] = row["first_name"] + " " + row["last_name"]
        del row["first_name"]
        del row["last_name"]
        row["provider"] = "fake"
        row["age"] = int(rnd.randint(18, 39))

        def generate_phone_number():
            first_part = str(rnd.randint(1000, 9999))
            second_part = str(rnd.randint(1000, 9999))
            return f"010-{first_part}-{second_part}"

        row["phone_number"] = generate_phone_number()
        response = requests.post(f"{base_url}/api/users", json=row)
        if response.status_code != 201:
            print(f"Failed to create user: {row['name']}")


create_users()
