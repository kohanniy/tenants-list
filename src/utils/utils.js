export const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

export const adaptData = (data) => {
  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      data[key] = '';
    }
  });

  return data;
};
