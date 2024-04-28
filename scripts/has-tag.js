const GHCR_TOKEN = process.env.GHCR_TOKEN;
const TAG_TO_CHECK = process.env.TAG;

const REPOSITORY = "brpaz/commitlint";

if (!GHCR_TOKEN) {
  console.error("GHCR_TOKEN env variable is required");
  process.exit(1);
}

if (!TAG_TO_CHECK) {
  console.error("TAG env variable is required");
  process.exit(1);
}

const url = `https://ghcr.io/v2/${REPOSITORY}/tags/list`;
const headers = {
  Authorization: `Bearer ${GHCR_TOKEN}`,
};

async function fetchTags() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.tags;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function run() {
  const tags = await fetchTags();
  console.log(tags);

  if (!tags.includes(TAG_TO_CHECK)) {
    console.log(`Tag ${TAG_TO_CHECK} not found in repository ${REPOSITORY}`);
    process.exit(2);
  }
}

run();
