import { format } from "date-fns";
import { DateRange } from "react-day-picker";

export const displayedDate = (eventStartAndEndDates: DateRange | undefined) => {
    if (eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to) {
        return format(eventStartAndEndDates.from, "d' de 'LLL") + " até " + format(eventStartAndEndDates.to, "d' de 'LLL");
    }
}