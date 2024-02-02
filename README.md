# FRONTEND-SERVER

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## FRONTEND-SERVER
Denna kod har några säkerhetsaspekter att överväga:

Lösenords- och e-posthantering: 
Lösenord och e-post sparas i tillståndsvariabler (useState). Det är bra att de används för att hålla reda på användarens inmatning, men det är viktigt att se till att känslig information inte exponeras på felaktiga platser eller sätt.

Autentisering:
Access token lagras i sessionslagring (sessionStorage). Sessionslagring är normalt säkrare än lokallagring, men det är fortfarande viktigt att se till att den hanteras korrekt och att tokens inte läcker ut på grund av sårbarheter som XSS (Cross-Site Scripting).

Autentiseringsheaders:
När du hämtar data från backend, skickas en Authorization-header med access token. Detta är standardpraxis för säker kommunikation med en server.

Hantering av API-anrop:
Användningen av fetch för att göra API-anrop är bra, men det är viktigt att hantera fel och statuskoder korrekt. Det görs genom att kontrollera response.ok och behandla olika situationer.

Hantering av notifieringar:
Notifieringar används för att meddela användaren om olika händelser. Denna hantering verkar vara ordentlig och ger användbara meddelanden. Det är viktigt att undvika att läcka för mycket information till slutanvändaren, särskilt om det kan vara säkerhetskänslig information.
Sessionshantering:
Inloggning och utloggning hanteras genom att sätta och ta bort access token från sessionslagring. Det är en standardmetod, men det är viktigt att se till att sessionen löper ut korrekt och att användaren alltid loggas ut när det behövs.

CORS (Cross-Origin Resource Sharing):
Om frontend-applikationen (http://localhost:3000, antas jag) och backend-servern (http://localhost:3001 och http://localhost:3002) körs på olika domäner, måste CORS vara korrekt konfigurerat på backend för att tillåta begäranden från frontend.

Känslig information i källkoden:
Hållningen av känslig information, som URL:er och tokens, direkt i källkoden bör undvikas i produktion. Det är säkrare att använda miljövariabler eller konfigurationsfiler för att hantera sådan information.

Det är alltid viktigt att hålla koll på säkerhetsaspekterna och vara medveten om potentiella hot. Kodgranskning och regelbundna säkerhetsrevisioner är en del av god praxis för att säkerställa att en webbapplikation är så säker som möjligt.
