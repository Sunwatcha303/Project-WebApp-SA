const config = require("../config");

const logging = (req, responseHandler, response) => {
    const HOST = req.hostname;
    const PORT = req.socket.localPort;

    const url = `http://${HOST}:${PORT}${req.originalUrl}`;
    console.log(`\nRequest from: ${url}`);
    console.log(`Time: ${getCurrentDateTime()}`);
    console.log(`Request body:`);
    console.log(req.body)
    console.log(`Response handler:`);
    console.log(responseHandler);
    console.log(`Response body:`);
    console.log(response);
};

const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}; 

module.exports = logging;