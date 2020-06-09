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
    subject: `Appointment confirmed with ${doctor.name} on ${dayjs(date).format('DD-MM-YYYY')}`,
    // eslint-disable-next-line max-len
    text: `Hi ${name}, this is a just a short message to confirm your appointment with ${doctor.name} at
      ${doctor.company} (${doctor.address}) on ${dayjs(date).format('ddd, MMM D, YYYY')}
      at ${dayjs(date).format('h:mm A')}`,
    textHtml: `
      <h3>Appointment Confirmation</h3>
      <p>
        Hi ${name}, this is a just a short message to confirm your appointment with
        ${' '}${doctor.name} at ${doctor.company} (${doctor.address}) on${' '}
        ${dayjs(date).format('ddd, MMM D, YYYY')} at ${dayjs(date).format('h:mm A')}.
      </p>
      <p>
        If you need to contact us, please email your doctor at <a href='mailto:${doctor.email}'>${doctor.email}</a>
        ${' '}or call us on <a href='tel:${doctor.phone}'>${doctor.phone}</a>.
      </p>
    `,
  };
  const response = await fetch('http://localhost:8081/confirm-booking', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'http://localhost',
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.info('booking confirmed!');
  return response.json();
};
