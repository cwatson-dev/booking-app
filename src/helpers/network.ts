import dayjs from 'dayjs';

export const bookAppointment = async (doctor: Doctor, date: Date, user: { email: string, name: string } ) => {
  const { email, name } = user;
  if (!(name.length > 1)) {
    return console.error('No name provided!');
  }
  // eslint-disable-next-line max-len
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    return console.error('Invalid email provided!');
  }
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
