// test-backend.js

async function triggerLiveError() {
  console.log("Starting production auth service...");
  
  try {
    // FAKE BUG 3: Token validation fail ho gaya aur object undefined reh gaya
    const decodedToken = undefined;
    
    // Yeh line crash hogi: TypeError: Cannot destructure property 'userId' of 'decodedToken' as it is undefined.
    const { userId, role } = decodedToken; 

    console.log("User verified:", userId);

  } catch (error) {
    console.log("Crash detected! Sending to Render TraceLens Cloud...");

    // UPDATE: Yahan naya Render ka API URL daala hai
    await fetch('https://tracelens-7hdm.onrender.com/api/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 80df8997-8564-4018-b818-b5a67fe26d61'
      },
      body: JSON.stringify({
        message: error.message,
        stackTrace: error.stack,
        service: 'production-auth-service'
      })
    });
    
    console.log("Error successfully reported to Live Dashboard!");
  }
}

triggerLiveError();