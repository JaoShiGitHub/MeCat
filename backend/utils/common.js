export function isEmail(input) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

export function validateEmail(email, res) {
  if (!isEmail(email)) {
    res
      .status(400)
      .json({ success: false, message: "Please enter a valid email address" });
    return false;
  }
  return true;
}

export function validateRequiredFields(requiredFields, res) {
  for (const [field, value] of Object.entries(requiredFields)) {
    if (!value) {
      return res.status(400).json({
        success: false,
        message: `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required!`,
      });
    }
  }
  return true;
}
