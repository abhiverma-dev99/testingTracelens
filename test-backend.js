// test-backend.js

async function triggerLiveError() {
  console.log("Starting production auth service...");
  
  try {
    // FAKE BUG 2: API response null aayi, aur hum us par .map() chala rahe hain
    const apiResponse = null;
    
    // Yeh line crash hogi: Cannot read properties of null (reading 'map')
    const userNames = apiResponse.map(user => user.name); 

  } catch (error) {
    console.log("Crash detected! Sending to Live TraceLens Cloud...");

    // Yahan tumhara LIVE Back4App ka URL hai
    await fetch('https://tracelens-0dakofo6.b4a.run/api/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 80df8997-8564-4018-b818-b5a67fe26d61'
      },
      body: JSON.stringify({
        message: error.message,
        stackTrace: error.stack,
        service: 'production-auth-service' // Nayi service ka naam
      })
    });
    
    console.log("Error successfully reported to Live Dashboard!");
  }
}

triggerLiveError();