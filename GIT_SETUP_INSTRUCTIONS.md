# Git Setup Instructies

## Probleem: Git wordt niet herkend

Als je de foutmelding "git is not recognised" krijgt, betekent dit dat Git niet in je PATH staat.

## Oplossing 1: Git Bash gebruiken (Aanbevolen)

1. Open **Git Bash** (zoek in Start menu naar "Git Bash")
2. Navigeer naar je project:
   ```bash
   cd "/c/Users/luc54/OneDrive/Desktop/programmeren/somstyle website"
   ```
3. Voer de Git commando's uit:
   ```bash
   git status
   git add .
   git commit -m "Add high-definition favicon.ico and update favicon configuration"
   git push -u origin main
   ```

## Oplossing 2: Git toevoegen aan PATH

### Stap 1: Vind Git installatie locatie
Meestal staat Git hier:
- `C:\Program Files\Git\bin\git.exe`
- `C:\Program Files (x86)\Git\bin\git.exe`

### Stap 2: Voeg toe aan PATH

1. Druk op `Win + X` en kies "System"
2. Klik op "Advanced system settings"
3. Klik op "Environment Variables"
4. Onder "System variables", selecteer "Path" en klik "Edit"
5. Klik "New" en voeg toe:
   - `C:\Program Files\Git\bin`
   - OF `C:\Program Files (x86)\Git\bin` (als Git daar staat)
6. Klik "OK" op alle vensters
7. **Herstart PowerShell/Command Prompt** (belangrijk!)

### Stap 3: Test
```powershell
git --version
```

## Oplossing 3: Gebruik volledig pad

Je kunt Git ook direct aanroepen met het volledige pad:

```powershell
& "C:\Program Files\Git\bin\git.exe" status
& "C:\Program Files\Git\bin\git.exe" add .
& "C:\Program Files\Git\bin\git.exe" commit -m "Add high-definition favicon.ico and update favicon configuration"
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

## Oplossing 4: Git opnieuw installeren

Als Git niet geïnstalleerd is:

1. Download Git voor Windows: https://git-scm.com/download/win
2. Installeer met standaard instellingen
3. **Belangrijk**: Tijdens installatie, kies "Git from the command line and also from 3rd-party software"
4. Herstart je computer
5. Test: `git --version`

## Na setup: Push je wijzigingen

```bash
cd "C:\Users\luc54\OneDrive\Desktop\programmeren\somstyle website"
git add .
git commit -m "Add high-definition favicon.ico and update favicon configuration"
git push -u origin main
```


