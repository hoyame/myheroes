lancement alerte: 
    envoyeur: 
        - send api request
    api: 
        - get data for all apps
    receveur: 
        - boucle qui trie la pos de la personne qui lance l'alerte par rapport a la distance de la personne
        - get les donnes que return la boucle et boucle qui affiche les données sur la map et load les alertes dans la page alerte

si click alerte: 
    receveur: page info alerte
        si prise: 
            envoyeur: 
                - notif: envoie le get le profil de la personne qui propose de l'aider (nom, avis, etoiles, xp) a partir de l'id

                choixs: 
                    si accepter: envoie la pos au receveur et (si possible, envoie l'iteneraire)
