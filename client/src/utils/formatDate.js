import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function formatDate(timestamp) {
  return dayjs.utc(parseInt(timestamp)).format("MMM DD, YYYY");
}
