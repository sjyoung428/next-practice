export const getPeople = async () => {
  const data = await fetch("https://billions-api.nomadcoders.workers.dev/");
  const json = await data.json();
  return json;
};

export const getPerson = async (id) => {
  const data = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );
  const json = await data.json();
  return json;
};
