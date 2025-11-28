# Git Push Instructies

## Gewijzigde bestanden die gepusht moeten worden:

1. **app/layout.tsx** - Favicon configuratie bijgewerkt (root favicon toegevoegd)
2. **public/favicon.ico** - Nieuw bestand (root favicon voor Google/browsers)
3. **scripts/generate-favicon.js** - Nieuw script voor high-definition favicon generatie
4. **package.json** - Script toegevoegd voor favicon generatie
5. **FAVICON_INSTRUCTIONS.md** - Nieuwe documentatie

## Stappen om te pushen:

### Als dit nog geen Git repository is:

```bash
# 1. Initialiseer Git repository
git init

# 2. Voeg remote repository toe
git remote add origin https://github.com/habtiaet/Somstyle_website.git

# 3. Haal bestaande code op (als er al commits zijn)
git pull origin main --allow-unrelated-histories
```

### Voeg alle wijzigingen toe en push:

```bash
# 1. Voeg alle bestanden toe
git add .

# 2. Commit de wijzigingen
git commit -m "Add high-definition favicon.ico and update favicon configuration"

# 3. Push naar GitHub
git push -u origin main
```

### Als je al een repository hebt:

```bash
# 1. Check status
git status

# 2. Voeg wijzigingen toe
git add .

# 3. Commit
git commit -m "Add high-definition favicon.ico and update favicon configuration"

# 4. Push
git push
```

## Belangrijke wijzigingen:

- ✅ Favicon.ico toegevoegd aan root (`public/favicon.ico`) zodat Google het kan vinden
- ✅ Favicon configuratie bijgewerkt in `app/layout.tsx`
- ✅ Script toegevoegd voor het genereren van high-definition favicons
- ✅ Documentatie toegevoegd voor favicon generatie

