export function buildURLParams(value, toString = false, parent = ''): { [key: string]: any } {
  if (typeof value !== 'object') {
    return value;
  }
  let params = {};
  const data = Object.assign({}, value);

  Object.keys(data).forEach(key => {
    const keyString = parent ? `${parent}[${key}]` : key;
    if (data[key] && typeof data[key] === 'object') {
      params = {
        ...params,
        ...buildURLParams(data[key], toString, keyString),
      };
    } else {
      params[keyString] = toString ? String(data[key]) : data[key];
    }
  });
  return params;
}
