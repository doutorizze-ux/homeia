const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyA...'); // We don't have the API key here
    // Actually we need the real api key or it will fail authentication maybe.
}
run();
