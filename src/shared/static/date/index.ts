const timestamp = Date.now();
const date = new Date(timestamp);
const formatedDate = date.toISOString().slice(0, 10);

export { formatedDate };
