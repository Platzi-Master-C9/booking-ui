import { useState } from "react";
import "../assets/styles/Calendar.css";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

export default function App() {
    const [startDate, setStartDate] = useState(new Date());
    return ( < DatePicker selected = { startDate }
            onChange = {
                (date) => setStartDate(date)
            }
            dateFormat = "dd/MM/yyyy"
            locale = "es"
            showYearDropdown showMonthDropdown scrollableYearDropdown yearDropdownItemNumber = { 5 }
            dropdownMode = "select"
            calendarStartDay = { 1 }
            minDate={new Date("01-01-2022")}
            maxDate={new Date("01-31-2030")}
            />
        );
}