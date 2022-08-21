const POLL_RATE = 500

setInterval(async () => {
    messages = await fetch('https://api.mychatapp.com/messages');
} , POLL_RATE);