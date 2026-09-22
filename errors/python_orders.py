# Intentional bug: checkout payload has no customer_id.
def create_order(payload):
    customer_id = payload["customer_id"]
    return {"customer_id": customer_id, "status": "created"}
