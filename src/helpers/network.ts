import dayjs from 'dayjs';

export const bookAppointment = async (doctor: Doctor, date: Date, user: { email: string, name: string } ) => {
  const { email, name } = user;
  const data = {
    name,
    email,
    subject: `Booking confirmed with ${doctor.name} on ${dayjs(date).format('DD-MM-YYYY HH:mm')}`,
    text: '',
    textHtml: '',
  };
  console.log({ data });
  // const response = await fetch('http://localhost:8081/confirm-booking', {
  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //   body: JSON.stringify(data), // body data type must match "Content-Type" header
  // });
  // return response.json();
  console.log('booked!');
};
