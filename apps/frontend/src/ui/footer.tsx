import { RoundedBox } from "./rounded-box";

export function Footer() {
  const randomFact =
    buergergeldFacts[Math.floor(Math.random() * buergergeldFacts.length)];

  return (
    <footer>
      <RoundedBox>
        <p className="italic">Wussten Sie schon?</p>
        <p>{randomFact}</p>
        <p>
          Quelle:{" "}
          <a href={source} target="_blank" rel="noopener noreferrer">
            Bundesregierung.de
          </a>
        </p>
      </RoundedBox>
    </footer>
  );
}

const buergergeldFacts: string[] = [
  "Damit die Leistungsberechtigten sich auf die Arbeitsuche konzentrieren können, gilt im ersten Jahr des Bürgergeldbezugs nun eine sogenannte Karenzzeit: Die Kosten für Unterkunft werden in tatsächlicher Höhe, die Heizkosten in angemessener Höhe anerkannt und übernommen.",
  "Wer auf Bürgergeld angewiesen ist, darf in der Karenzzeit das Ersparte behalten. So darf Vermögen erst ab 40.000 Euro angetastet werden, für jede weitere Person in der Bedarfsgemeinschaft ab 15.000 Euro.",
  "Wer zwischen 520 und 1.000 Euro verdient, kann jetzt mehr von seinem Einkommen behalten. Die Freibeträge in diesem Bereich werden auf 30 Prozent angehoben. Zudem erhöhen sich die Freibeträge für Einkommen von Schülerinnen und Schülern sowie Studierenden auf 520 Euro. Auch für Auszubildende gelten höhere Freibeträge für die Ausbildungsvergütung.",
  "Der sogenannte Vermittlungsvorrang in Arbeit wird abgeschafft. Stattdessen werden Geringqualifizierte auf dem Weg zu einer beruflichen Weiterbildung unterstützt, um ihnen den Zugang zum Fachkräftearbeitsmarkt zu öffnen. Eine umfassende Betreuung (Coaching) hilft Leistungsberechtigten, die aufgrund vielfältiger individueller Probleme besondere Schwierigkeiten haben, Arbeit aufzunehmen.",
  "Zusätzlich zu ihrem Arbeitslosengeld haben Empfangsberechtigte von Arbeitslosengeld I eine Einmalzahlung von 100 Euro erhalten. Voraussetzung war, dass im Juli 2022 an mindestens einem Tag Anspruch auf Arbeitslosengeld I bestand.",
];
const source = "https://www.bundesregierung.de/breg-de/buergergeld-2125010";
