const axios = require('axios');
require('dotenv').config();

(async() => {
   try {
       const config = { method: 'get', url: process.env.PING_URL }
       const ans = await axios(config);
       const { status, data } = ans;
       console.log({ status, data });
   } catch (error) {
       console.log({ error });
   }
})()

