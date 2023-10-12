import { formatedDate } from "../../shared/static/date";
import { RAPID_API_HOST, RAPID_API_KEY } from "../../shared/static/keys";
import { Container } from "./style";

export const Fixtures = () => {
  return (
    <Container
      srcDoc={`<div
            id="wg-api-football-fixtures"
            data-host=${RAPID_API_HOST}
            data-key=${RAPID_API_KEY}
            data-date=${formatedDate}
            data-league="39"
            data-season="2023"
            data-theme="dark"
            data-refresh="15"
            data-show-toolbar="true"
            data-show-errors="true"
            data-show-logos="true"
            data-modal-game="true"
            data-modal-standings="true"
            data-modal-show-logos="true"
        />
        <script type="module" src="https://widgets.api-sports.io/football/1.1.8/widget.js">
        </script>`}
    />
  );
};
