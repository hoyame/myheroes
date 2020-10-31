#include <stdio.h>
#include <stdlib.h>

int returnA(int value) {
    int a1[3] = {1.45, 3.60, 7};
    int a2[3] = {1.70, 3.35, 4.60};
    int a3[3] = {2.35, 3.00, 2.85}; 

    int e;

    switch(value) {
        case 1: 
            e = a1;
            return e;
        case 2: 
            e = a2;
            return e;
        case 3: 
            e = a3;
            return e;
        default: return 0;
    }
}

int main()
{
    int a1[3] = {1.45, 3.60, 7};
    int a2[3] = {1.70, 3.35, 4.60};
    int a3[3] = {2.35, 3.00, 2.85};

    int a;  // match interessée
    int b;  // pari (Victoire: 1, Null: 2, Defaite: 3")
    int c;  // mise en €
    int d;  // quote
    int e; 
    int f;

    printf("Choisissez un match qui vous interesse: \n\n");
    scanf("%d",&a); // assigne le match

    printf("Choisissez le resultat sur lequel vous souhaitez parier (Victoire: 1, Null: 2, Defaite: 3): \n\n")
    scanf("%d",&b); // assigne le resultat

    printf("Choisissez le montant que vous souhaitez miser: \n\n")
    scanf("%d",&c); // assigne la mise

    printf("Votre choix: \n\n")

    printf("Match interessée: %d", a)
    printf("Resultat: %d", b)
    printf("Mise: %d", c)

    e = returnA(a) // assigne la quote correspondant au match interessée
    f = (c * e[b]) // calcul des gains potentiels

    printf("Gain potentiel: %d", f)

    return 0;
}