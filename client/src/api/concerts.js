export async function postConcert(concerts) {
  const response = await fetch("http://localhost:4000/concerts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(concerts),
  });
  const createdConcert = await response.json();
  return createdConcert;
}

// User should be redirect to created concert

export async function getConcert(concertId) {
  const response = await fetch(`http://localhost:4000/concerts/${concertId}`);
  const concert = await response.json();
  return concert;
}

export async function getConcerts() {
  const response = await fetch(
    `http://localhost:4000/concerts?_sort=id&_order=desc`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const concerts = await response.json();
  return concerts;
}
