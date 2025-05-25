export default function deepClone(value) {
  const type = typeof value;
  if (value === null || type !== "object") {
    return value;
  }

  //In case of array
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  //In case of object
  let result = {};
  for (let key in value) {
    result[key] = deepClone(value[key]);
  }

  return result;
}
