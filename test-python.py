import urllib.request
import json
import traceback
import ssl

def trigger_python_crash():
    print("Starting Python analytics worker...")
    try:
        # FAKE BUG: RuntimeError: dictionary changed size during iteration
        active_users = {'user1': 'online', 'user2': 'offline', 'user3': 'online'}
        
        # Iteration ke dauran dictionary modify karna allow nahi hai
        for user, status in active_users.items():
            if status == 'offline':
                del active_users[user] 
                
    except Exception as e:
        print("Python crash detected! Sending to TraceLens...")
        
        payload = {
            "message": str(e),
            "stackTrace": traceback.format_exc(),
            "service": "python-analytics-worker"
        }
        
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        req = urllib.request.Request(
            'https://tracelens-7hdm.onrender.com/api/incidents',
            data=json.dumps(payload).encode('utf-8'),
            headers={
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 80df8997-8564-4018-b818-b5a67fe26d61'
            },
            method='POST'
        )
        
        try:
            urllib.request.urlopen(req, context=ctx)
            print("Error successfully reported from Python!")
        except Exception as req_err:
            print("Failed to send:", req_err)

trigger_python_crash()