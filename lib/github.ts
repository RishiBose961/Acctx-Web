export async function getGitHubDownloads(): Promise<number> {
  try {
    const res = await fetch("https://api.github.com/repos/RishiBose961/Acctx-Web/releases", {
      headers: {
        "User-Agent": "Acctx-Web",
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 900 }, // Refreshes every 15 minutes
    });

    if (!res.ok) {
      return 20;
    }

    const releases = await res.json();
    if (!Array.isArray(releases)) return 20;

    let total = 0;
    for (const release of releases) {
      if (Array.isArray(release.assets)) {
        for (const asset of release.assets) {
          total += asset.download_count || 0;
        }
      }
    }

    return total > 0 ? total : 20;
  } catch {
    return 20;
  }
}

