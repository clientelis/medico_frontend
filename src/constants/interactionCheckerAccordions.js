import { details, main, sub } from "framer-motion/client";

export const interactionCheckerAccordions = [
    {
        title: "Qu\'est-ce qu'une interaction médicamenteuse ?",
        content: {
            description: "Une interaction médicamenteuse désigne une situation où un médicament influence l'activité d'un autre. Ces interactions peuvent entraîner des effets secondaires inattendus ou plus graves que prévu. Elles peuvent également réduire l'efficacité d'un ou des deux médicaments en neutralisant leurs effets.\n\nDes interactions peuvent aussi survenir entre des médicaments et des aliments ou boissons. Certains médicaments doivent être pris avec de la nourriture pour être efficaces, tandis que d'autres agissent mieux à jeun. Parfois, il est strictement déconseillé d’associer certains médicaments à des aliments ou boissons spécifiques – par exemple, le métronidazole et l'alcool – en raison du risque d'effets secondaires graves.\n\nLa plupart des interactions médicamenteuses sont mineures, mais certaines peuvent causer des dommages significatifs si elles ne sont pas identifiées et gérées correctement.\n",
            details:[]
        }
    },

    {
        title: "Comment surviennent les interactions médicamenteuses ?",
        content: {
            description:"Les interactions médicamenteuses peuvent être classées en deux grandes catégories :",

            details:[
                {title: "1. Les interactions pharmacocinétiques",
                content:"Ces interactions surviennent lorsqu'un médicament modifie le parcours d’un autre à travers l'organisme. Cela peut inclure, par exemple, une inhibition de l'élimination, du métabolisme ou de l'absorption du deuxième médicament. Ces interactions entraînent des niveaux anormalement élevés ou faibles du médicament affecté dans l'organisme, ce qui peut provoquer des effets secondaires graves ou rendre le traitement inefficace.",
                details:[]

                },
                {
                    title: "2. Les interactions pharmacodynamiques",
                    content:"Ces interactions se produisent lorsqu'un médicament modifie les effets cliniques de l'autre, de manière positive ou négative. Cela peut inclure : ",
                    details:[
                        "Un médicament qui s'oppose aux effets thérapeutiques de l'autre (ex. : Médicament A traite l'hypertension, mais Médicament B augmente la pression artérielle).",
                        "Deux médicaments aux effets similaires qui, pris ensemble, entraînent un résultat indésirable (ex. : Médicament A et Médicament B abaissent la pression artérielle, causant une hypotension excessive).",

                    ]
                }
            
            ]
        }
    },

    {
        title: "Comment gérer les interactions médicamenteuses ?",
        content: { 
            description: "Les interactions médicamenteuses sont mieux gérées avant l'administration des traitements. Les notices des médicaments et les monographies fournissent souvent des informations sur les interactions courantes ou significatives, ainsi que des stratégies pour les éviter.",
            details: [],

        },
    }



]