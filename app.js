const express = require("express");
const { default: axios } = require("axios");
const dayjs = require("dayjs");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

const version = "1.0.0";

app.get("/", async (req, res) => {
  const { data } = await axios.get("https://api.ipify.org/?format=json");

  res.send(`<html>
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Demo</title>
              </head>
              <body style="font-family: "Lato", sans-serif;
                background: #272727;
                color: #ffd868;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;">
                <div>
                  <div style="text-align: center;
                    margin-bottom: 10px;
                    font-size: 1.6rem;
                    font-weight: 600;">
                    <span style="text-align: center;
                      margin-bottom: 10px;
                      font-size: 2.25rem;
                      font-weight: 600;
                      color: rgb(220 38 38);">${data.ip}</span>
                  </div>
                  <div style="text-align: center;
                    margin-bottom: 10px;
                    font-size: 1.6rem;
                    font-weight: 600;">
                    <span>${dayjs(new Date()).format(
                      "DD/MM/YYYY hh:mm:ss"
                    )}</span>
                  </div>
                </div>
              </body>
            </html>`);
});

app.listen(port, () => {
  console.log(
    `[Version ${version}]: Server running at http://${hostname}:${port}/`
  );
});
