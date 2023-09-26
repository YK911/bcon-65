document
  .querySelector('[name="reviews-form"]')
  .addEventListener('submit', event => {
    event.preventDefault();
    const { user_name, user_email } = event.target.elements;

    console.log('User name: ', user_name.value);
    console.log('User email: ', user_email.value);

    event.target.reset();
  });
