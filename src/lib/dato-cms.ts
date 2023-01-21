const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = "c9255daeecaebf92a9405bdca837f4";

async function fetchCMS(query: string, variables: object = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllSlide() {
  const data = await fetchCMS(`
    {
      allSlides {
        id
        title
        subtitle
        description
        image {
          url
        }
      }
    }
  `);

  return data.allSlides;
}

export async function getallPlan() {
  const data = await fetchCMS(`
  {
    allPlans(orderBy: _firstPublishedAt_ASC) {
      id
      price
      time
      title
      benefits
    }
  }  
  `);

  return data.allPlans;
}
