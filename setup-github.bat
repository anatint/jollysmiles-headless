@echo off
SET GIT="C:\Program Files\Git\bin\git.exe"
%GIT% config --global user.email "deploy@jollysmiles.com"
%GIT% config --global user.name "Jolly Smiles"
%GIT% branch -M main
%GIT% remote add origin https://github.com/anatint/jollysmiles-headless.git
%GIT% commit -m "Initial commit - Jolly Smiles dental website"
echo.
echo ===== COMMIT DONE =====
echo Now pushing to GitHub...
%GIT% push -u origin main
echo.
echo ===== PUSH COMPLETE =====
pause
