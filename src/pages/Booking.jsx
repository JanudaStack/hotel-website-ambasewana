import { Helmet } from "react-helmet-async";

import FormTwo from "../features/booking/FormTwo";

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Hotel Ambasewana | Book Your Reservation</title>
        <meta
          name="description"
          content="Book your stay at Ambasewana Hotel. Luxury rooms, weddings, and events in Ussapitiya. Best prices guaranteed."
        />
        <meta
          name="keywords"
          content="hotel, sri lanka, rooms, wedding hall, ambasewana"
        />
      </Helmet>
      <FormTwo />
    </>
  );
};

export default Booking;
