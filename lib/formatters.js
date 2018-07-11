const phone = value => {
  if (typeof value === 'string' && value.length) {
    return `+${value.replace(/[^0-9]/g, '')}`;
  }

  return value;
};

module.exports = {
  phone,
};
