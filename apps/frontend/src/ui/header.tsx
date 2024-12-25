import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoundedBox } from "./rounded-box";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header>
      <RoundedBox>
        <h1 className="text-xl flex items-center gap-2">
          <FontAwesomeIcon icon={faHandshakeAngle} size="2xl" />
          Bürgergeld-Rechner
        </h1>
        <p className="mt-2">
          Finden Sie schnell und einfach heraus, wie viel Unterstützung Ihnen
          zusteht.
        </p>
      </RoundedBox>
    </header>
  );
}
