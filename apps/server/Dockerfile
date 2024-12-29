# Nutze eine Node.js-Version als Basis
FROM node:18

# Installiere globale Abhängigkeiten (z. B. turbo, pnpm)
RUN npm install -g turbo pnpm

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere das gesamte Monorepo
COPY . .

# Installiere alle Abhängigkeiten des Monorepos
RUN pnpm install

# Wechsel ins Server-Verzeichnis und baue die Anwendung
WORKDIR /app/apps/server
RUN pnpm build

# Exponiere Port 8080
EXPOSE 8080

# Start der Anwendung
CMD ["pnpm", "start"]
