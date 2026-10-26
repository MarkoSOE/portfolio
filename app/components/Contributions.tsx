import { cacheLife } from "next/cache";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

async function getContributions(username: string) {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    );
    if (!res.ok) return null;
    const data: { total: { lastYear: number }; contributions: Day[] } =
      await res.json();
    return { total: data.total.lastYear, days: data.contributions };
  } catch {
    return null;
  }
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

export default async function Contributions({ username }: { username: string }) {
  const data = await getContributions(username);

  if (!data) {
    return <p className="contributions-loading">couldn&apos;t load github contributions</p>;
  }

  // Pad the first week so each column runs sunday → saturday.
  const firstWeekday = new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay();
  const cells: (Day | null)[] = [...Array(firstWeekday).fill(null), ...data.days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  // Label a column when a new month starts in it.
  let lastMonth = -1;
  const monthLabels = weeks.map((week) => {
    const first = week.find(Boolean);
    const month = first ? new Date(`${first.date}T00:00:00Z`).getUTCMonth() : -1;
    if (month === lastMonth) return "";
    lastMonth = month;
    return MONTHS[month];
  });
  // Drop a label that starts too close to the next one (usually the partial first month).
  monthLabels.forEach((label, i) => {
    if (label && monthLabels.slice(i + 1, i + 3).some(Boolean)) monthLabels[i] = "";
  });

  return (
    <div className="contributions">
      <div className="contributions-scroll">
        <div className="contributions-months" style={{ gridTemplateColumns: `repeat(${weeks.length}, var(--cell))` }}>
          {monthLabels.map((label, i) => (
            <span key={i}>{label}</span>
          ))}
        </div>
        <div className="contributions-grid" style={{ gridTemplateColumns: `repeat(${weeks.length}, var(--cell))` }}>
          {weeks.map((week, w) =>
            week.map((day, d) =>
              day ? (
                <span
                  key={day.date}
                  className="contribution-cell"
                  data-level={day.level}
                  title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                />
              ) : (
                <span key={`pad-${w}-${d}`} />
              ),
            ),
          )}
        </div>
      </div>
      <div className="contributions-footer">
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          {data.total.toLocaleString()} contributions in the last year
        </a>
        <span className="contributions-legend" aria-hidden="true">
          less
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className="contribution-cell" data-level={l} />
          ))}
          more
        </span>
      </div>
    </div>
  );
}
