// test-backend.js

async function simulateDatabaseCrash() {
  console.log("Starting backend process...");
  
  try {
    // FAKE BUG: Developer ne naya config object banaya par usko define nahi kiya
    const dbConfig = undefined; 
    
    // Yeh line crash ho jayegi kyunki dbConfig undefined hai
    console.log("Connecting to database at: " + dbConfig.host); 

  } catch (error) {
    console.log("Error caught in Node.js! Sending to TraceLens...");

    await fetch('http://localhost:3000/api/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 80df8997-8564-4018-b818-b5a67fe26d61'
      },
      body: JSON.stringify({
        message: error.message,
        stackTrace: error.stack,
        service: 'testing-node-backend' 
      })
    });
    
    console.log("Error successfully reported to TraceLens Dashboard!");
  }
}

simulateDatabaseCrash();