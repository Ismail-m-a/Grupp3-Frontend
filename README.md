### TTFHW - Frontend Server README

#### Beskrivning:

Frontend-serverkoden implementerar en enkel autentiseringsfunktionalitet och möjliggör interaktion med en backend-server för att hämta data. Nedan beskrivs de viktigaste funktionerna och hur du kommer igång.

#### Funktioner:

1. **Inloggning och Utloggning:**
   - Användaren kan logga in med e-post och lösenord.
   - Autentisering hanteras med användning av en access_token som lagras i sessionen.
   - Användaren kan logga ut för att avsluta sessionen.

2. **Notifieringar:**
   - Visar notifieringar för olika händelser som inloggning, fel och sessionens utgång.

3. **Datahämtning:**
   - Autentiserade användare kan hämta data från en backend-server.
   - Använder access_token för att autentisera och autorisera förfrågningar till backend.

#### Komma igång:

1. **Installera Nödvändiga Beroenden:**
   ```bash
   npm install
   ```

2. **Konfigurera Backend:**
   - Se till att backend-servern är konfigurerad och körs.

3. **Starta Frontend Server:**
   ```bash
   npm start
   ```

4. **Användning:**
   - Gå till [http://localhost:3000](http://localhost:3000) i webbläsaren.
   - Logga in med giltiga användaruppgifter.
   - Autentisering möjliggör datahämtning från backend.

#### Viktigt:

- **Session och Autentisering:**
  - Se till att sessionen och autentiseringen hanteras korrekt för att undvika problem med inloggning och datahämtning.
  
- **Backend-Konfiguration:**
  - Se till att backend-servern är korrekt konfigurerad för att svara på inloggnings- och datahämtningförfrågningar.

För ytterligare information eller problem, besök [https://github.com/Ismail-m-a/Grupp3-Frontend).
