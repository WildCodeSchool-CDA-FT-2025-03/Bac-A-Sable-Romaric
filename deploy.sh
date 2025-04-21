cd Bac_A_Sable_Romaric/ # O se déplace a la racine du dossier de projet

git switch deploy@docker # On force la bascule sur notre branche de référence (main en cas de merge)

git pull # On met à jour la branche

docker stop $(docker ps -a -q) # On arrête tous les containers en cours

docker compose up --build -d # On relance l'orchestration des containers. Cette commande peut être ajustée si certains paramètres supplémentaires sont nécessaires (fichier d'env, nom du fichier, ...)

docker system prune -a -f # On supprime tous les résidus d'images non utilisé (Cela libère les ressources)