import cron from "cron";
import https from "https";

const URL = "https://trackify-k7u8.onrender.com";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request sent successfully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (error) => {
      console.error("Error while sending request", error);
    });
});

export default job;
