// Time preferences for user
import * as moment from "moment";

const defaultStart = moment("09:00", "HH:mm").toDate();
const defaultEnd = moment("23:00", "HH:mm").toDate();
console.log(defaultStart, defaultEnd);
export default {
  state: {
    defaultAvailable: {
      start: defaultStart,
      end: defaultEnd
    }
  }
};
