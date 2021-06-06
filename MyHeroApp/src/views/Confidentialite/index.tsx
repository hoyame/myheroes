import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Socket } from 'socket.io-client';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';

const ConfidentialiteScreen = ({ navigation }) => {
    interface IProps {
        title: string;
        content: string;
    }

    const Props = (props: IProps) => {
        return (
            <>
               <Text style={{
                    fontSize: 19,
                    marginBottom: 8
                }}>{props.title}</Text>

                <Text style={{
                    marginBottom: 15
                }}>{props.content}</Text>
            </>
        )
    }

    return (
        <>
            <HeaderComponent title={I18n.t("confidentiality")} navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <ScrollView style={{
                    marginBottom: 180
                }}>
                    <Text style={{
                        fontSize: 22,
                        marginBottom: 20
                    }}>{I18n.t("cgu")}</Text>

                    <>
                        <Text style={{
                            fontSize: 19,
                            marginBottom: 8,
                            color: 'green'
                        }}>En utilisant l’application MyHeroes, vous acceptez les présentes conditions générales d’utilisation.</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>Sont notamment prohibées les commentaires ou images :</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>Offensants, irrespectueux ou méprisants envers les autres utilisateurs.</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>En contradiction avec les conditions générales d’utilisations propres à l’application</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>En opposition à la législation relative à la propriété intellectuelle</Text>
                        
                        <Text style={{
                            marginBottom: 4
                        }}>Diffamatoires, grossiers, agressives, injurieux, obscènes, discriminatoires ou sexuels</Text>
                        
                        <Text style={{
                            marginBottom: 4
                        }}>Incitant à la haine ou à la violence, assimilables à du harcèlement ou à une quelconque forme de menace</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>À visée publicitaires, promotionnelles ou commerciales</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>Nuisant au bon déroulement des échanges, incompréhensibles ou redondantes</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>Semblables à de la propagande ou sujettes à polémiques</Text>

                        <Text style={{
                            marginBottom: 4
                        }}>Contenant des informations sensibles ou confidentielles</Text>

                        <Text style={{
                            fontSize: 15,
                            marginBottom: 10,
                            color: 'red'
                        }}>Toute personne dérogeant à ces principes pourra se voir empêchée (de façon temporaire ou permanente) l’utilisation à l’application MyHeroes et les infos seront envoyées aux forces de l’ordre et une plainte peux être engagé si le cas est nécessaire.</Text>
                    </>
                    
                    <Props title={I18n.t("cgu1")} content={I18n.t("cgu01")} />
                    <Props title={I18n.t("cgu2")} content={I18n.t("cgu02")} />
                    <Props title={I18n.t("cgu3")} content={I18n.t("cgu03")} />
                    <Props title={I18n.t("cgu4")} content={I18n.t("cgu04")} />
                    <Props title={I18n.t("cgu5")} content={I18n.t("cgu05")} />
                    <Props title={I18n.t("cgu6")} content={I18n.t("cgu06")} />
                    <Props title={I18n.t("cgu7")} content={I18n.t("cgu07")} />
                    <Props title={I18n.t("cgu8")} content={I18n.t("cgu08")} />
                    <Props title={I18n.t("cgu9")} content={I18n.t("cgu09")} />
                    <Props title={I18n.t("cgu10")} content={I18n.t("cgu010")} />
                    <Props title={I18n.t("cgu11")} content={I18n.t("cgu011")} />
                    <Props title={I18n.t("cgu12")} content={I18n.t("cgu012")} />
                    <Props title={I18n.t("cgu13")} content={I18n.t("cgu013")} />
                    <Props title={I18n.t("cgu14")} content={I18n.t("cgu014")} />
                    <Props title={I18n.t("cgu15")} content={I18n.t("cgu015")} />
                    <Props title={I18n.t("cgu16")} content={I18n.t("cgu016")} />
                    <Props title={I18n.t("cgu17")} content={I18n.t("cgu017")} />
                    <Props title={I18n.t("cgu18")} content={I18n.t("cgu018")} />
                    <Props title={I18n.t("cgu19")} content={I18n.t("cgu019")} />
                    <Props title={I18n.t("cgu20")} content={I18n.t("cgu020")} />
                    <Props title={I18n.t("cgu21")} content={I18n.t("cgu021")} />
                    <Props title={I18n.t("cgu22")} content={I18n.t("cgu022")} />
                    <Props title={I18n.t("cgu23")} content={I18n.t("cgu023")} />
                
                    <Text style={{marginBottom: 15}}>
                        POLITIQUE DE CONFIDENTIALITÉ ET D'UTILISATION DES DONNÉES PERSONNELLES

                    </Text><Text style={{marginBottom: 15}}>
                        Définition des termes utilisés dans la politique de confidentialité
                        On désignera par la suite :
                                            </Text><Text style={{marginBottom: 15}}>

                            •	« Donnée personnelle » : se définit comme « toute information relative à une personne physique identifiée ou qui peut être identifiée, directement ou indirectement, par référence à un numéro d'identification ou à un ou plusieurs éléments qui lui sont propres », conformément à la loi Informatique et libertés du 6 janvier 1978.
                                               </Text><Text style={{marginBottom: 15}}>

                            •	« Service » : le service MyHeroes et l'ensemble de ses contenus.
                    </Text><Text style={{marginBottom: 15}}>

                            •	« Editeur » ou « Nous » : SAIDAT Wahib, personne morale ou physique responsable de l'édition et du contenu du Service.
                                                </Text><Text style={{marginBottom: 15}}>

                            •	« Utilisateur » ou « Vous » : l'internaute visitant et utilisant le Service.
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 1 - Introduction et rôle de la Politique de confidentialité
                        La présente charte vise à vous informer des engagements du Service eu égard au respect de votre vie privée et à la protection des Données personnelles vous concernant, collectées et traitées à l'occasion de votre utilisation du Service.
                        Il est important que vous lisiez la présente politique de confidentialité afin que vous soyez conscient des raisons pour lesquelles nous utilisons vos données et comment nous le faisons.
                        En vous inscrivant sur le Service, vous vous engagez à nous fournir des informations véritables vous concernant. La communication de fausses informations est contraire aux conditions générales figurant sur le Service.
                        Veuillez noter que la présente Politique de confidentialité est susceptible d’être modifiée ou complétée à tout moment, notamment en vue de se conformer à toute évolution législative, réglementaire, jurisprudentielle ou technologique. La date de sa mise à jour sera clairement mentionnée, le cas échéant.
                        Ces modifications vous engagent dès leur mise en ligne et nous vous invitons donc à consulter régulièrement la présente Politique de confidentialité afin de prendre connaissance des éventuelles modifications.
                        Vous trouverez également la description de vos droits à la protection de la vie privée et la façon dont la loi vous protège.
                        Si vous avez des questions concernant la présente politique de confidentialité ou si vous voulez exercer vos droits tels que décrit à l’article 10 de la présente Politique de confidentialité, veuillez nous contacter par e-mail à l’adresse : wsaidat@wanadoo.fr ou par courrier adressé à : 2 impasse des dahlias.
                        
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 2 - Données collectées sur le Site
                        Les Données collectées et ultérieurement traitées par le Service sont celles que vous nous transmettez volontairement en remplissant les différents formulaires présents au sein du Service. Pour certaines opérations sur les contenus, vous pourrez être amenés à transmettre des Données vous concernant à des tiers partenaires au travers de leurs propres services, plus spécifiquement lors des paiements que vous pourrez effectuer. Nous ne disposerons pas des dites données, leur collecte et leur traitement étant régis par les conditions propres à ces intervenants. Nous vous invitons à consulter leurs conditions avant de communiquer vos Données dans ce cadre.
                        Votre adresse IP (numéro d'identification attribué sur Internet à votre ordinateur) est collectée automatiquement. Vous êtes informés que le Service est susceptible de mettre en œuvre un procédé automatique de traçage (Cookie), auquel vous pouvez faire obstacle en modifiant les paramètres concernés de votre navigateur internet, comme expliqué dans les conditions générales du présent Service.
                        D’une manière générale, il vous est possible de visiter le Service MyHeroes sans communiquer aucune information personnelle vous concernant. Dans tous les cas, vous n’avez aucune obligation de transmettre ces informations. Néanmoins, en cas de refus, il se peut que vous ne puissiez pas bénéficier de certaines informations ou services.
                        Nous recueillons, utilisons et partageons également des données agrégées telles que des données statistiques ou démographiques quel qu’en soit l’usage. Les données agrégées peuvent provenir de vos informations personnelles mais ne sont pas concernées comme telles par la loi car ces données ne révèlent pas directement votre identité. Par exemple, nous pouvons agréger vos données d’utilisation afin de calculer le pourcentage d’utilisateurs qui accèdent à une fonctionnalité spécifique du Service.
                        Aux fins de fournir de meilleurs contenus et services, le Service MyHeroes utilise le service d’analyse de Google Analytics. Google Analytics ne suit pas vos habitudes de navigation sur des services tiers. Les informations vous concernant auxquelles Google Analytics a accès ne contiennent aucune donnée personnelle vous concernant.
                        Nous ne collectons pas de données dites « sensibles ».
                        Les coordonnées des Utilisateurs du Service qui se seront inscrits sur celui-ci seront sauvegardées, dans le respect des dispositions de la loi informatique et liberté du 6 janvier 1978. Conformément à cette dernière, ils disposent d’un droit d’accès, de retrait, de modification ou de rectification des Données qu’ils ont fournies. Pour cela, il leur suffit d’en faire la demande à l’adresse électronique suivante : wsaidat@wanadoo.fr, ou par courrier : 2 impasse des dahlias.
                        La collecte des Données personnelles des Utilisateurs par l'Editeur ne nécessite pas de déclaration auprès de l’autorité française de protection des Données personnelles (la Commission Nationale de l’Informatique et des Libertés – CNIL).
                        
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 3 - Identité du responsable du traitement
                        Le responsable du traitement est Monsieur SAIDAT Wahib .
                    </Text><Text style={{marginBottom: 15}}>

                        Article 4 - Finalité des Données collectées
                        Les Données identifiées comme étant obligatoires sur les formulaires du Service sont nécessaires afin de pouvoir bénéficier des fonctionnalités correspondantes du Service, et plus spécifiquement des opérations sur les contenus proposés au sein de celui-ci.
                        Le Service est susceptible de collecter et traiter les Données de ses Utilisateurs :
                                            </Text><Text style={{marginBottom: 15}}>

                            •	Aux fins de vous fournir les informations ou les services auxquels vous avez souscrit, notamment : Géolocalisation des personnes en danger et reconnaissance de personnes qui vont ou doivent etre sauvé.
                    </Text><Text style={{marginBottom: 15}}>

                            •	Aux fins de recueillir des informations nous permettant d’améliorer notre Service, nos produits et fonctionnalités (notamment par l’usage des cookies).
                    </Text><Text style={{marginBottom: 15}}>

                            •	Aux fins de pouvoir vous contacter à propos de : en cas de fausse alerte que l'on puisse les avertir en cas de banissement de leur compte.
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 5 - Destinataires et utilisation des Données collectées
                        Les Données collectées par nos soins sont traitées pour les besoins d’exécution des opérations sur les contenus du Service.
                        Vous êtes susceptible de recevoir des courriers électroniques (emails) de notre Service, notamment dans le cadre de newsletters que vous avez acceptées. Vous pouvez demander à ne plus recevoir ces courriers électroniques en nous contactant à l'adresse wsaidat@wanadoo.fr ou sur le lien prévu à cet effet dans chacun des courriers électroniques qui vous seront adressés.
                        Seul SAIDAT Wahib est destinataire de vos Informations personnelles. Celles-ci ne sont jamais transmises à un tiers, nonobstant les sous-traitants auxquels SAIDAT Wahib fait appel. Ni SAIDAT Wahib ni ses sous-traitants ne procèdent à la commercialisation des données personnelles des visiteurs et utilisateurs de son Service.
                        Vos données personnelles peuvent être partagées avec les parties indiquées ci-dessous aux fins définies dans la présente politique de confidentialité.
                        Nous exigeons que tous les tiers garantissent la sécurité de vos données personnelles et les traitent conformément à la loi. Nous ne permettons pas à nos fournisseurs de services tiers d’utiliser vos données.
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 6 - Fondements légaux régissant le traitement des données
                        Conformément au Règlement Général sur la Protection des Données (RGPD), SAIDAT Wahib ne traite des données à caractère personnel que dans les situations suivantes :
                            •	avec votre consentement ;
                            •	lorsqu'il existe une obligation contractuelle (un contrat entre SAIDAT Wahib et vous) ;
                            •	pour répondre à une obligation légale (en vertu de la législation UE ou nationale).
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 7 - Sécurité des Données
                        Vous êtes informés que vos Données pourront être divulguées en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire ou judiciaire compétente ou encore, si cela s'avère nécessaire, aux fins, pour l'Editeur, de préserver ses droits et intérêts.

                        Nous avons mis en place des mesures de sécurité appropriées afin d’empêcher que vos données personnelles ne soient accidentellement perdues, utilisées, modifiées, dévoilées ou consultées sans autorisation. De plus, l’accès à vos données personnelles est soumis à une procédure de sécurité définie et documentée.
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 8 - Durée de conservation des Données
                        Les Données sont stockées chez l'hébergeur du Service, dont les coordonnées figurent dans les mentions légales du Service, et sont conservées pour la durée strictement nécessaire à la réalisation des finalités visées ci-avant et ne saurait excéder 24 mois. Au-delà de cette durée, elles seront conservées à des fins exclusivement statistiques et ne donneront lieu à aucune exploitation, de quelque nature que ce soit.
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 9 - Prestataires habilités et transfert vers un pays tiers de l’Union Européenne
                        SAIDAT Wahib vous informe qu’il a recours à des prestataires habilités pour faciliter le recueil et le traitement des données que vous nous avez communiquées. Ces prestataires sont situés dans l’Union Européenne exclusivement.
                        SAIDAT Wahib s’est préalablement assuré de la mise en œuvre par ses prestataires de garanties adéquates et du respect de conditions strictes en matière de confidentialité, d’usage et de protection des données. Ces prestataires sont également soumis au Règlement Général sur la Protection des Données (RGPD).
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 10 - Droits informatiques et libertés
                        Conformément à la législation sur la protection des données personnelles, vous avez les droits détaillés ci-après que vous pouvez exercer, comme indiqué à l’Article 1 de la Présente Politique de confidentialité en nous écrivant à l’adresse postale mentionnée en tête (2 impasse des dahlias) ou en envoyant un courriel à wsaidat@wanadoo.fr :
                                             </Text><Text style={{marginBottom: 15}}>

                            •	Le droit d’information : nous avons l’obligation de vous informer de la manière dont nous utilisons vos données personnelles (tel que décrit dans la présente politique de confidentialité).
                    </Text><Text style={{marginBottom: 15}}>

                            •	Le droit d’accès : c’est votre droit d’effectuer une demande d’accès aux données vous concernant afin de recevoir une copie des données à caractère personnel que nous détenons ; Toutefois, en raison de l’obligation de sécurité et de confidentialité dans le traitement des données à caractère personnel qui incombe à SAIDAT Wahib, vous êtes informé que votre demande sera traitée sous réserve que vous rapportiez la preuve de votre identité, notamment par la production d’un scan ou d’une photocopie de votre titre d’identité valide.
                    </Text><Text style={{marginBottom: 15}}>

                            •	Le droit de rectification : le droit de nous demander de rectifier des données personnelles vous concernant qui seraient incomplètes ou inexactes. Au titre de ce droit, la législation vous autorise à demander la rectification, la mise à jour, le verrouillage ou encore l’effacement des données vous concernant qui peuvent être inexactes, erronées, incomplètes ou obsolètes.
                    </Text><Text style={{marginBottom: 15}}>

                            •	Le droit à l’effacement, aussi connu sous le nom de « droit à l’oubli » : dans certains cas, vous pouvez nous demander de supprimer les données personnelles que nous avons vous concernant (mis à part s’il existe une raison juridique impérieuse qui nous oblige à les conserver).
                    </Text><Text style={{marginBottom: 15}}>

                            •	Le droit à la limitation du traitement : vous avez le droit dans certains cas de nous demander de suspendre le traitement des données personnelles,
                    </Text><Text style={{marginBottom: 15}}>

                            •	Le droit à la portabilité des données : vous avez le droit de nous demander une copie de vos données personnelles dans un format courant (par exemple un fichier .csv).
                    </Text><Text style={{marginBottom: 15}}>


                            •	Le droit d’opposition : vous avez le droit de vous opposer au traitement de vos données personnelles (par exemple, en nous interdisant de traiter vos données à des fins de marketing direct).
                     </Text><Text style={{marginBottom: 15}}>

                        Cependant, l’exercice de ce droit n’est possible que dans l’une des deux situations suivantes : lorsque l’exercice de ce droit est fondé sur des motifs légitimes ou lorsque l’exercice de ce droit vise à faire obstacle à ce que les données recueillies soient utilisées à des fins de prospection commerciale.
                        Contactez-nous si vous souhaitez exercer l’un des droits décrits ci-dessus en nous écrivant à 2 impasse des dahlias ou par courriel à wsaidat@wanadoo.fr
                        Vous n’aurez pas de frais à payer pour l’accès à vos données personnelles (ni pour l’exercice de tout autre droit). Cependant, nous pourrons vous facturer des frais raisonnables si votre demande est manifestement infondée, répétitive ou excessive. Dans ce cas, nous pouvons aussi refuser de répondre à votre demande.
                        SAIDAT Wahib sera en droit, le cas échéant, de s’opposer aux demandes manifestement abusives de par leur caractère systématique, répétitif, ou leur nombre.
                        Nous pouvons vous demander des informations spécifiques afin de confirmer votre identité et d’assurer votre droit d’accès à vos données personnelles (ou pour exercer tout autre droit). Il s’agit d’une mesure de sécurité pour garantir que ces données personnelles ne soient pas délivrées à une personne non autorisée à les recevoir. Nous pouvons aussi vous contacter pour obtenir plus d’informations concernant votre demande, afin de vous donner une réponse plus rapide.
                        Nous essayons de répondre à toutes les demandes légitimes dans un délai d’un mois. Ce délai d’un mois peut être dépassé dans le cas où votre demande est particulièrement complexe ou si vous en avez fait plusieurs. Dans ce cas, nous vous préviendrons et vous tiendrons informé.
                                            </Text><Text style={{marginBottom: 15}}>

                        Article 11 - Plainte auprès de l’Autorité de protection des données
                        Si vous considérez que SAIDAT Wahib ne respecte pas ses obligations au regard de vos Informations Personnelles, vous pouvez adresser une plainte ou une demande auprès de l’autorité compétente. En France, l’autorité compétente est la CNIL à laquelle vous pouvez adresser une demande par voie électronique à l'adresse suivante : https://www.cnil.fr/fr/plaintes/internet.
                    </Text><Text style={{marginBottom: 15}}>

                        Article 12 - Politique relative aux cookies
                        Lors de votre première utilisation du Service MyHeroes, vous êtes avertis par un bandeau que des informations relatives à votre navigation sont susceptibles d’être enregistrées dans des fichiers alphanumériques dénommés « cookies ». Notre politique d’utilisation des cookies vous permet de mieux comprendre les dispositions que nous mettons en œuvre en matière de navigation sur notre Service. Elle vous informe notamment sur l’ensemble des cookies présents sur notre Service, leur finalité et vous donne la marche à suivre pour les paramétrer.
                    </Text><Text style={{marginBottom: 15}}>

                        a) Informations générales sur les cookies présents sur le site
                        SAIDAT Wahib, en tant qu’éditeur du présent Service, pourra procéder à l’implantation de cookies sur le disque dur de votre terminal (ordinateur, tablette, mobile etc.) afin de vous garantir une navigation fluide et optimale sur notre Service.
                        Les « cookies » (ou témoins de connexion) sont des petits fichiers texte de taille limitée qui nous permettent de reconnaître votre ordinateur, votre tablette ou votre mobile aux fins de personnaliser les services que nous vous proposons.
                        Les informations recueillies par le biais des cookies ne permettent en aucune manière de vous identifier nominativement. Elles sont utilisées exclusivement pour nos besoins propres afin d’améliorer l’interactivité et la performance de notre Service et de vous adresser des contenus adaptés à vos centres d’intérêts. Aucune de ces informations ne fait l’objet d’une communication auprès de tiers sauf lorsque SAIDAT Wahib a obtenu au préalable votre consentement ou bien lorsque la divulgation de ces informations est requise par la loi, sur ordre d’un tribunal ou toute autorité administrative ou judiciaire habilitée à en connaître.
                        Pour mieux vous éclairer sur les informations que les cookies identifient, vous trouverez un tableau listant les différents types de cookies susceptibles d’être utilisés sur le Service de SAIDAT Wahib, leur nom, leur finalité ainsi que leur durée de conservation à l'adresse .
                    </Text><Text style={{marginBottom: 15}}>

                        b) Configuration de vos préférences sur les cookies
                        Vous pouvez accepter ou refuser le dépôt de cookies à tout moment.
                        Lors de votre première utilisation du Service MyHeroes, une bannière présentant brièvement des informations relatives au dépôt de cookies et de technologies similaires apparaît en bas de votre écran. Cette bannière vous avertit qu’en poursuivant votre navigation sur le Service de SAIDAT Wahib (en chargeant une nouvelle page ou en cliquant sur divers éléments du Service par exemple), vous acceptez le dépôt de cookies sur votre terminal.
                        Selon le type de cookie en cause, le recueil de votre consentement au dépôt et à la lecture de cookies sur votre terminal peut être impératif.
                    </Text><Text style={{marginBottom: 15}}>

                        c) Les cookies exemptés de consentement
                        Conformément aux recommandations de la Commission Nationale de l’Informatique et des Libertés (CNIL), certains cookies sont dispensés du recueil préalable de votre consentement dans la mesure où ils sont strictement nécessaires au fonctionnement du Service ou ont pour finalité exclusive de permettre ou faciliter la communication par voie électronique. Il s’agit notamment des cookies d’identifiant de session, d’authentification, de session d’équilibrage de charge ainsi que des cookies de personnalisation de votre interface. Ces cookies sont intégralement soumis à la présente politique dans la mesure où ils sont émis et gérés par SAIDAT Wahib.

                    </Text><Text style={{marginBottom: 15}}>
                        d) Les cookies nécessitant le recueil préalable de votre consentement
                        Cette exigence concerne les cookies émis par des tiers et qui sont qualifiés de « persistants » dans la mesure où ils demeurent dans votre terminal jusqu'à leur effacement ou leur date d’expiration.
                        De tels cookies étant émis par des tiers, leur utilisation et leur dépôt sont soumis à leurs propres politiques de confidentialité dont vous trouverez un lien ci-dessous. Cette famille de cookie regroupe les cookies de mesure d’audience, les cookies publicitaires, auxquels SAIDAT Wahib a recours, ainsi que les cookies de partage de réseaux sociaux (Facebook, YouTube, Twitter, LinkedIn, etc.). Les cookies de partage des réseaux sociaux sont émis et gérés par l’éditeur du réseau social concerné. Sous réserve de votre consentement, ces cookies vous permettent de partager facilement une partie du contenu publié sur le Service, notamment par l’intermédiaire d’un « bouton » applicatif de partage selon le réseau social concerné.
                        Les cookies de mesure d’audience établissent des statistiques concernant la fréquentation et l’utilisation de divers éléments du Service (comme les contenus / pages que vous avez visité). Ces données participent à l’amélioration de l’ergonomie du Service. Sur le Service MyHeroes, un outil de mesure d’audience (Google Analytics) est utilisé ; sa politique de confidentialité est disponible en français à l'adresse internet suivante : https://www.google.com/analytics/learn/privacy.html
                    </Text><Text style={{marginBottom: 15}}>

                        e) Outils de paramétrage des cookies
                        La plupart des navigateurs Internet sont configurés par défaut de façon à ce que le dépôt de cookies soit autorisé. Votre navigateur vous offre l’opportunité de modifier ces paramètres standards de manière à ce que l’ensemble des cookies soit rejeté systématiquement ou bien à ce qu’une partie seulement des cookies soit acceptée ou refusée en fonction de leur émetteur.
                        ATTENTION : Nous attirons votre attention sur le fait que le refus du dépôt de cookies sur votre terminal est néanmoins susceptible d’altérer votre expérience d’utilisateur ainsi que votre accès à certains services ou fonctionnalités du présent Service. Le cas échéant, SAIDAT Wahib décline toute responsabilité concernant les conséquences liées à la dégradation de vos conditions de navigation qui interviennent en raison de votre choix de refuser, supprimer ou bloquer les cookies nécessaires au fonctionnement du Service. Ces conséquences ne sauraient constituer un dommage et vous ne pourrez prétendre à aucune indemnité de ce fait.
                        Votre navigateur vous permet également de supprimer les cookies existants sur votre terminal ou encore de vous signaler lorsque de nouveaux cookies sont susceptibles d’être déposés sur votre terminal. Ces paramétrages n’ont pas d’incidence sur votre navigation mais vous font perdre tout le bénéfice apporté par le cookie.
                        Veuillez ci-dessous prendre connaissance des multiples outils mis à votre disposition afin que vous puissiez paramétrer les cookies déposés sur votre terminal.

                    </Text><Text style={{marginBottom: 15}}>
                        f) Paramétrage de votre navigateur internet
                        Chaque navigateur Internet propose ses propres paramètres de gestion des cookies. Pour savoir de quelle manière modifier vos préférences en matière de cookies, vous trouverez ci-dessous les liens vers l’aide nécessaire pour accéder au menu de votre navigateur prévu à cet effet.
                        Google Chrome : https://support.google.com/chrome/answer/95647?hl=frInternet Explorer : https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-11Mozilla Firefox : https://support.mozilla.org/fr/kb/activer-desactiver-cookiesOpera : http://help.opera.com/Windows/10.20/fr/cookies.htmlSafari https://support.apple.com/kb/PH21411?viewlocale=fr_FR&locale=fr_FRPour de plus amples informations concernant les outils de maîtrise des cookies, vous pouvez consulter le site internet de la CNIL : https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.
                        Pour toute interrogation ou demande complémentaire d’informations relative à la présente politique des cookies, merci de bien vouloir nous contacter.
                    </Text><Text style={{marginBottom: 15}}>

                        g) Liste des cookies
                        La liste détaillée des cookies utilisés sur le Service MyHeroes est disponible à l'adresse suivante : .
                        Tous droits réservés - 17 novembre 2020

                    </Text>
                </ScrollView>

            </View>
        </>
    );
}

export default ConfidentialiteScreen;