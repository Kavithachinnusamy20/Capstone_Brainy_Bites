export default function validate(values) {
  const errors = {};

  // Username validation
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  // Email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Password validation
  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  // Confirm Password validation
  if (!values.password2.trim()) {
    errors.password2 = "Confirm password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}