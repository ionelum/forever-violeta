const allProducts = [
    {
        ref: 61,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Gelée Aloès",
        price: 23.46,
        description:
            "Particulièrement riche en Aloe Vera, ce gel transparent non gras possède toutes les vertus de la plante. Il hydrate*, apaise et régénère l'épiderme. Il est idéal contre les irritations superficielles de la peau et les agressions extérieures. Hydratation des couches supérieures de l'épiderme",
        volume: "118 ml",
        content: "84.46 % de gel d'aloès",
        use: "Appliquer généreusement sur une peau parfaitement nettoyée.",
    },
    {
        ref: 51,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe Propolis Creme",
        price: 31.25,
        description:
            "L'aloès associé à la propolis, font de cette crème à la texture riche, un véritable soin anti-bactérien et réparateur, qui apaise les irritations cutanées. La camomille, l'allantoïne et les vitamines A et E apportent à la peau douceur et souplesse. Elle peut être utilisée sur les peaux sèches et rugueuses.",
        volume: "113 g",
        content: "74.17 % de gel d'aloès, 0.55 % de propolis",
        use: "Appliquer sur une peau parfaitement nettoyée.",
    },
    {
        ref: 3,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Instant Hand Cleanser",
        price: 16.07,
        description:
            "Une formule gel pour nettoyer vos mains en toute sécurité où que vous soyez. Enrichie en Aloe vera, sa formule parfume délicatement les mains sans les dessécher.",
        volume: "250ml",
        content: "Aloe Vera, miel, alcool à friction , glycérine.",
        use: "Verser une noisette de gel dans le creux de la main et frotter les mains l’une contre l’autre jusqu’à ce qu’elles soient sèches. Utiliser régulièrement.",
    },
    {
        ref: 633,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe Liquid Soap",
        price: 22.94,
        description:
            "L'Aloe Liquid Soap est un savon pour le visage, le corps et les cheveux à destination de toute la famille (à partir de 3 ans). Sa formule très douce nettoie délicatement, respecte la peau et les cheveux, hydrate et préserve du dessèchement, apaise, adoucit tout en laissant la peau souple.",
        volume: "473 ml",
        content:
            "39% de gel d'Aloe vera Agents lavants issus d’acides gras de noix de coco Extrait de concombre et de jojoba Huile d’Argan Glycérine végétale Extraits de fleur d'Arnica",
        use: " Appliquer sur les mains, le visage, le corps ou les cheveux. Faire mousser. Rincer soigneusement.",
    },
    {
        ref: 955,
        category: "Les Pack",
        cat: "packs",
        name: "Pack V3 Vitalite",
        price: 145.06,
        description:
            "Vous êtes sportif, quel que soit votre âge, le pack Vitalité soutient vos défenses naturelles et vous accompagne dans la préparation et récupération de votre activité sportive.",
        volume: "3 Produits",
        content: "Forever Aloe Vera Gel, Forever Activ Pro-B, Forever ARGI+",
        use: "En commandant l'un de nos packs produits proposés ou environ 250€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -15% sur toutes vos prochaines commandes. ",
    },
    {
        ref: 950,
        category: "Les Pack",
        cat: "packs",
        name: "Pack V3 Bien-Etre",
        price: 112.13,
        description:
            "Vous êtes sédentaire, quelque soit votre âge cette association de produits est parfaite pour optimiser vos défenses immunitaires, conserver des fonctions cognitives et cardiaques au top !",
        volume: "3 Produits",
        content:
            "Forever Aloe Vera Gel, Forever Activ Pro-B, Forever Arctic Sea",
        use: "En commandant l'un de nos packs produits proposés ou environ 250€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -15% sur toutes vos prochaines commandes.",
    },
    {
        ref: 1055,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Privilège #1",
        price: 57.89,
        description:
            "Découvrez nos produits grâce au Pack Privilège #1. Ce pack contient 3 soins essentiels parmi nos indispensables pour avoir le meilleur de Forever à portée de main à savoir : Le Shampoing Aloe Jojoba pour des cheveux souples, doux et brillants. L’Aloe Body Lotion, l’indispensable pour une peau souple, douce et hydratée. L’Aloe Liquid Soap, le savon Corps, Cheveux, pour tous les épidermes et pour toute la famille. ",
        volume: "3 Produits",
        content: "Shampoing Aloe-Jojoba, Aloe Body Lotion, Aloe Liquid Soap.",
        use: "",
    },
    {
        ref: 1060,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Privilège #2",
        price: 57.89,
        description:
            "Découvrez nos produits grâce au Pack Privilège #1. Ce pack contient 3 soins essentiels parmi nos indispensables pour avoir le meilleur de Forever à portée de main à savoir : Le Shampoing Aloe Jojoba pour des cheveux souples, doux et brillants. L’Aloe Body Lotion, l’indispensable pour une peau souple, douce et hydratée. L’Aloe Liquid Soap, le savon Corps, Cheveux, pour tous les épidermes et pour toute la famille. ",
        volume: "3 Produits",
        content: "Aloe Cooling Lotion, Gelée Aloès, Aloe Propolis Crème.",
        use: "",
    },
    {
        ref: 634,
        category: "Les Pack",
        cat: "packs",
        name: "Start Your Journey Pack",
        price: 393.97,
        description:
            "C’est un pack de 13 produits parmi nos meilleures ventes : Il contient la Mini Pulpe / Pro B , la gelée d’Aloes, le Bright et la propolis mais également pour tous ceux qui souhaitent expérimenter une détox et perdre du poids, notre programme phare le Programme C9 qui vous permettra de vous reprendre en main, de perdre quelques kilos et de faire une détox complète.Et pour les actifs ou sportifs ou tout ceux qui aiment bouger : vous aurez l’Argi+ et la Thermogène. Ce programme est vendu avec son livret de conseils et de suivi journalier, son mètre ruban et son shaker.",
        volume: "13 Produits",
        content:
            "Forever Vanille ou Chocolat, Mini Tripack Pulpes Mixte, Forever ARGI+, Aloe Vera Gelly, Aloe Propolis Crème, Aloe Heat Lotion, Stick Déodorant Aloes, Forever Bright Toothgel, Forever Activ Pro-B, Stick Aloe Lèvres.",
        use: "En commandant l'un de nos packs produits proposés ou environ 250€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -15% sur toutes vos prochaines commandes.",
    },
    {
        ref: 1,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Start Your Personal Use",
        price: 447.86,
        description:
            "Obtenir 30% de remise et devenir entrepreneur Forever avec des produits pour toute la famille! C’est un pack de 17 produits qui couvrent tous les besoins de la famille. En effet, l’offre de produits de ce pack est très large et couvre les besoins quotidiens en matière d’hygiène et de soins pour les femmes et les hommes. Elle s’accompagne également des indispensables Pulpes d’Aloe vera, Berry Nectar et Aloe Pêche, de l’Argi plus et du Pro B.",
        volume: "17 Produits",
        content:
            "Forever Aloe Gel, Aloe Berry Nectar, Forever Aloe Pêche, Aloe Vera Gelly, Aloe Propolis Crème, Aloe Heat Lotion, Stick Déodorant Aloès, Forever Bright Toothgel, Aloe Jojoba Shampoo, Aloe Jojoba Conditioning, Aloe Liquid Soap, Aloe First, Aloe Activ Pro-B, Forever ARGI+, Soin Hydratant Intense SONYA, Gentleman's Pride, Stick Aloe Lèvre.",
        use: "En commandant l'un de nos packs produits proposés ou environ 397€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -30% sur toutes vos prochaines commandes.",
    },
    {
        ref: 830,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Go2FBO",
        price: 416.85,
        description:
            "Profitez de -30% sur tous vos produits ! Démarrez votre activité Forever dans les meilleurs conditions possibles avec ce pack conçu et proposé par Forever France ! Ces 18 produits phares de la gamme Forever seront utiles à votre consommation personnelle & revente mais vont vous surtout permettre d'écquérirer de la connaissance sur les produits Forever pour ainsi mieux les partager autour de vous et apporter du bien-être à votre entourage.",
        volume: "18 Produits",
        content:
            "Forever Aloe Vera Gel, Aloe Berry Nectar, Forever Aloe Vera Pêche, Forever Freedom, Absorbant-C, Forever Arctic Sea, Forever Kids, Aloe Vera Gelly, Aloe Propolis Crème, Aloe Heat Lotion, Stick Déodorant Aloès, Forever Bright Toothgel, Aloe Jojoba Conditioning, Aloe Liquid Soap, Aloe First, Forever Be-Pollen, Forever Active Pro-B, Forever Aloe Scrub, Stick Aloe Lèvres.",
        use: "En commandant l'un de nos packs produits proposés ou environ 397€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -30% sur toutes vos prochaines commandes.",
    },
    {
        ref: 196,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Forever Freedom",
        price: 48.93,
        description:
            "Délicieusement aromatisé à l’orange, Forever Freedom est une formule unique et originale qui, grâce à la vitamine C, contribue à la formation normale du collagène ainsi qu’à la fonction normale des os et des cartilages.",
        volume: "1L",
        content: "88.99 % de pulpe d'Aloe Vera stabilisée, 1.25 % de sulfate de glucosamine, 1.17 % de sulfate de chondroïtine, 0.6 % de Méthyl Sulfonyl Méthane (MSM). Contient des traces de crustacés ",
        use: "40 ml, 2 fois par jour, soit 80 ml. Secouer légèrement avant de servir. Déconseillé aux enfants de moins de 12 ans, aux femmes enceintes et allaitantes. L'usage prolongé est déconseillé.",
    },
    {
        ref: 3715,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Pulpe d'Aloe vera ",
        price: 106.51,
        description:
            "Délicieusement aromatisé à l’orange, Forever Freedom est une formule unique et originale qui, grâce à la vitamine C, contribue à la formation normale du collagène ainsi qu’à la fonction normale des os et des cartilages.",
        volume: "3 x 1 litre",
        content: "88.99 % de pulpe d'Aloe Vera stabilisée, 1.25 % de sulfate de glucosamine, 1.17 % de sulfate de chondroïtine, 0.6 % de Méthyl Sulfonyl Méthane (MSM). Contient des traces de crustacés.",
        use: "40 ml, 2 fois par jour, soit 80 ml. Secouer légèrement avant de servir. Déconseillé aux enfants de moins de 12 ans, aux femmes enceintes et allaitantes. L'usage prolongé est déconseillé.",
    },
    {
        ref: 3734,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Aloe Berry Nectar",
        price: 106.51,
        description:
            "Une large dose (90,7%) de pulpe d'Aloe vera, un soupçon de jus de pomme et de canneberge, de la vitamine C, aucun conservateur et un emballage 100% recyclable. Et voilà le secret de la toute nouvelle formule de l'Aloe Berry Nectar. Retrouvez toutes les vertus de l'Aloe vera au coeur d'une formule au goût acidulé, pour un plaisir sain et toujours autant de bien-être. 3 x 1 litre.",
        volume: "3 x 1 litre",
        content: "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 3777,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Aloe Peche",
        price: 106.51,
        description:
            "La nouvelle formule de l'Aloe Pêche associe de l'Aloe vera (84,5%), de la purée de pêche et du jus concentré de raisin blanc pour une saveur douce et savoureuse, ainsi qu'une dose synergique de vitamine C. Le packaging, quant à lui, est 100% recyclable. Retrouvez la toute nouvelle version de l'Aloe Pêche pour une pause saine et gourmande ! 3 x 1 litre.",
        volume: "3 x 1 litre",
        content: "84,5% de pulpe d'Aloe vera, purée de pêche naturelle, jus concentré de raisin blanc, arôme pêche.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 7333,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack mix - Pulpe d'Aoe vera - Berry - Peche",
        price: 106.51,
        description:
            "L'Aloe vera Forever fait peau neuve ! Riche d'un savoir-faire de 40ans, Forever a revisité son produit signature et a créé une toute nouvelle version sans conservateur et riche en vitamine C, dans un emballage 100% recyclable. Cette formule optimisée vous apportera toujours plus de bien-être. Le secret, 99,7% de gel d'Aloe vera, la plante aux milles vertus et une dose synergique de vitamine C, molécule antioxydante aux nombreux bienfaits. 3 x 1 Litre.",
        volume: "3 x 1 litre",
        content: "1 litre de Pulpe d'Aloe Vera - réf. 715 1 litre d'Aloe Berry Nectar - réf. 734 1 litre d'Aloe Peaches (Pêches) - réf. 777.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 71612,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Forever Aloe vera 330 ml x 12",
        price: 147.61,
        description:
            "La famille Forever s'agrandit! Découvrez la version mini aloe de 330 ml! En vente par lot de 12 mini aloe.",
        volume: "330 ml x 12",
        content: "99,7% de gel d'Aloe vera.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 73512,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Forever Aloe Berry Nectar 330 ml x 12",
        price: 147.61,
        description:
            "Une large dose (90,7%) de pulpe d'Aloe vera, un soupçon de jus de pomme et de canneberge, de la vitamine C, aucun conservateur et un emballage 100% recyclable. Et voilà le secret de la toute nouvelle formule de l'Aloe Berry Nectar. Retrouvez toutes les vertus de l'Aloe vera au coeur d'une formule au goût acidulé, pour un plaisir sain et toujours autant de bien-être. ",
        volume: "330 ml x 12",
        content: "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 77812,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Peche 330 ml x 12",
        price: 147.61,
        description:
            "La nouvelle formule de l'Aloe Pêche associe de l'Aloe vera (84,5%), de la purée de pêche et du jus concentré de raisin blanc pour une saveur douce et savoureuse, ainsi qu'une dose synergique de vitamine C. Le packaging, quant à lui, est 100% recyclable. Retrouvez la toute nouvelle version de l'Aloe Pêche pour une pause saine et gourmande !",
        volume: "330 ml x 12",
        content: "84,5% de pulpe d'Aloe vera, purée de pêche naturelle, jus concentré de raisin blanc, arôme pêche",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 71633,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Mini Aloe - ARGI +",
        price: 44.90,
        description:
            "Optimisez vos objectifs de mise en forme avec le duo idéal : gel d’Aloe vera et ARGI +. Energie,endurance et récupération! Le nouveau pack combiné de Forever comprend trois mini Aloe (330 ml) et trois sachets d’ARGI +. ",
        volume: "3x330ml+3xArgi",
        content: "3 mini Aloe 330 ml + 3 doses Argi +",
        use: "Prendre un sachet de ARGI+ par jour, dilué dans un verre de pulpe d’Aloe Vera. Agiter avant utilisation.",
    },
    {
        ref: 734,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Berry Nectar",
        price: 35.86,
        description:
            "Une large dose (90,7%) de pulpe d'Aloe vera, un soupçon de jus de pomme et de canneberge, de la vitamine C, aucun conservateur et un emballage 100% recyclable. Et voilà le secret de la toute nouvelle formule de l'Aloe Berry Nectar. Retrouvez notre Aloe vera au coeur d'une formule au goût acidulé, pour un plaisir sain et toujours autant de bien-être.",
        volume: "1 litre",
        content: "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 715,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Vera Gel",
        price: 35.86,
        description:
            "L'Aloe vera Forever fait peau neuve ! Riche d'un savoir-faire de 40ans, Forever a revisité son produit signature et a créé une toute nouvelle version sans conservateur et riche en vitamine C, dans un emballage 100% recyclable. Cette formule optimisée vous apportera toujours plus de bien-être. Le secret, 99,7% de gel d'Aloe vera et d'une dose synergique de vitamine C, molécule antioxydante. ",
        volume: "1 litre",
        content: "99,7% de gel d'Aloe vera",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 777,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Peche",
        price: 35.86,
        description:
            "La nouvelle formule de l'Aloe Pêche associe de l'Aloe vera (84,5%), de la purée de pêche et du jus concentré de raisin blanc pour une saveur douce et savoureuse, ainsi qu'une dose synergique de vitamine C. Le packaging, quant à lui, est 100% recyclable. Retrouvez la toute nouvelle version de l'Aloe Pêche pour une pause saine et gourmande !",
        volume: "1 litre",
        content: "84,5% de pulpe d'Aloe vera, purée de pêche naturelle, jus concentré de raisin blanc, arôme pêche",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 3736,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Aloe Mangue",
        price: 106.51,
        description:
            "La nouvelle formule de l'Aloe Mangue est l'alliance parfaite entre notre Aloe vera (86%) et de la purée de mangue naturelle. Les mangues utilisées sont récoltées à pleine maturité pour garantir leur saveur et leur richesse en nutriments, vitamines et anti-oxydants tels que la vitamine C. L’Aloe vera va aider votre corps à stimuler le métabolisme, à favoriser la digestion et à maintenir le fonctionnement normal de votre système immunitaire.",
        volume: "3 x 1 L",
        content: "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 736,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Mangue",
        price: 35.86,
        description:
            "La nouvelle formule de l'Aloe Mangue est l'alliance parfaite entre notre Aloe vera (86%) et de la purée de mangue naturelle. Les mangues utilisées sont récoltées à pleine maturité pour garantir leur saveur et leur richesse en nutriments, vitamines et anti-oxydants tels que la vitamine C. L’Aloe vera va aider votre corps à stimuler le métabolisme, à favoriser la digestion et à maintenir le fonctionnement normal de votre système immunitaire.",
        volume: "1L",
        content: "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 27,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Bee Propolis",
        price: 45.15,
        description:
            "La propolis est une résine collectée et métabolisée par les abeilles mellifères à partir des arbres et utilisée pour protéger la ruche.",
        volume: "60 comprimés",
        content: "Propolis, Miel. Contient du soja.",
        use: "Prendre 2 comprimés par jour. Déconseillé chez les femmes ayant des antécédents personnels ou familiaux de cancer du sein. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée. ",
    },
    {
        ref: 207,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Miel - Forever Bee Honey",
        price: 23.80,
        description:
            "Le miel aussi appelé “or de la ruche” est produit par les abeilles à partir du nectar des fleurs. Avec sa texture fluide, le Forever Bee Honey™ s'ajoute facilement à l'alimentation. Son flacon est facile à utiliser pour doser.",
        volume: "500 g",
        content: "Miel du nectar des fleurs",
        use: "Utiliser le miel pour sucrer yaourts et boissons en remplacement du sucre. Ne convient pas aux enfants de moins de 12 mois.",
    },
    {
        ref: 26,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Bee Pollen",
        price: 21.62,
        description:
            "Collecté sur les fleurs par les abeilles, le pollen améliore leur vitalité et leur résistance tout au long de leurs vies.",
        volume: "100 comprimés",
        content: "86 % de pollen (500 mg par comprimé), 12 % de miel.",
        use: "Prendre jusqu'à 3 comprimés par jour, pendant les repas. Déconseillé aux personnes allergiques aux produits de la ruche. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 36,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Royal Jelly",
        price: 46.75,
        description:
            "La Gelée Royale est le produit le plus précieux de la ruche. Secrétée par les jeunes abeilles, elle transforme en quelques jours une larve en Reine.",
        volume: "60 comprimés",
        content: "75.5 mg de gelée royale lyophilisée équivalent à 250 mg de gelée royale fraîche par comprimé.",
        use: "Prendre 1 à 2 comprimés par jour. Précautions d'emploi : Une consommation excessive peut avoir des effets laxatifs. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 307,
        category: "Pour la maison",
        cat: "maison",
        name: "Forever Aloe MPD 2X",
        price: 38.98,
        description:
            "Détergent multi-usages ultra-concentré, très efficace pour décoller la saleté tenace, dissoudre les graisses et enlever les taches.Très doux, vous pouvez l'utiliser en toute sécurité sur toutes les surfaces lavables de la maison , pour la vaisselle et pour le linge. Utilisation non recommandée en lave-vaisselle en raison de son fort pouvoir moussant. Dangereux. Respecter les précautions d'emploi. Biodégradable.",
        volume: "946 ml",
        content: "Tensioactifs anioniques (15 à 30%), Tensioactifs non ioniques (5 à 15%), Aloe MPD est une solution aqueuse qui contient en surface des agents actifs : sodium, alkylaryl, sulfonate et Alkyl, Phenyl, Polyethoxyl, alcools, un conditionneur (Aloe Vera, parfum) et des agents de blanchissement.",
        use: "Pour Linge peu sale: Eau douce - 10 ml,  Dureté Moyenne - 12 ml, Eau dure - 15 ml.<br>Pour Linge sale: Eau douce - 12 ml,  Dureté Moyenne - 15 ml, Eau dure - 18 ml. <br>Pour Linge très sale: Eau douce - 15 ml, Dureté Moyenne - 18 ml, Eau dure - 20 ml.",
    },
    {
        ref: 512,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Coffret des huiles essentielles",
        price: 104.63,
        description:
            "Retrouvez nos 4 huiles essentielles dans un pack en édition limitée : Lavande vraie, Citron, Menthe Poivrée et Défense.",
        volume: "4 x 15 ml",
        content: "100% huile essentielle",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 506,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle Lavande vraie",
        price: 31.75,
        description:
            "L'huile essentielle de de Lavande Vraie Forever est issue de la lavande cultivée et récoltée en Bulgarie. Avec son arôme fruité et doux, elle sera l'allié parfait pour un moment de détente.",
        volume: "15 ml",
        content: "100% huile essentielle de lavande",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 507,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle Lavande vraieHuile Essentielle de Citron",
        price: 18.14,
        description:
            "Les citrons utilisés dans L’Huile Essentielle de Citron ont été récoltés à la main, à pleine maturité en Argentine et en Californie. Leur parfaite maturité permet d’obtenir un citron très aromatique qui produit une huile essentielle d’excellente qualité. L’huile essentielle de citron est connue pour son odeur rafraîchissante, énergisante et revitalisante.",
        volume: "15 ml",
        content: "100% huile essentielle de citron",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 508,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle de Menthe Poivree",
        price: 22.08,
        description:
            "La menthe poivrée de chez Forever est fabriquée à partir de feuilles récoltées dans les collines de l’Himalaya en Inde, où le climat et le sol confèrent une menthe poivrée de qualité supérieure. C'est notre huile essentielle la plus stimulante, sa fragrance est fraîche, revigorante et agréable.",
        volume: "15 ml",
        content: "100% huile essentielle Menthe Poivrée",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 510,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle Defense",
        price: 32.66,
        description:
            "L'huile essentielle Défense de Forever est un mélange de sept huiles essentielles de haute qualité issues de six pays à travers le monde. Le clou de girofle et la cannelle de Madagascar, l’orange des États-Unis, l’huile essentielle d’encens de Somalie, le romarin de Hongrie, l’huile d’eucalyptus citronnée d’Australie et les baies de genièvre du Népal agissent en synergie pour maintenir et renforcer la vitalité. ",
        volume: "15 ml",
        content: "Mélange d'huiles essentielles",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 67,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Stick Déodorant Aloès",
        price: 11.30,
        description:
            "Sans alcool, sans sels d'aluminium et discrètement parfumé, ce déodorant assure une protection efficace sans tacher vos vêtements. Sa formule à l'aloès adoucit et hydrate* la peau. *Hydrate les couches supérieures de l'épiderme.",
        volume: "92.1 g",
        content: "Gel d'aloès.",
        use: "Appliquer le matin ou avant l'effort sur une peau propre et sèche.",
    },
    {
        ref: 1318,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Forever Hand Sanitizer - unite",
        price: 4.97,
        description:
            "Une formule bactéricide pour nettoyer, désinfecter et assainir parfaitement vos mains où que vous soyez. Enrichi en Aloe Vera et en miel, sa formule parfume délicatement les mains sans les dessécher. Dangereux. Respecter les précautions d'emploi.",
        volume: "59 ml",
        content: "Gel d’aloès, miel.",
        use: "Verser une noisette de gel dans le creux de la main et frotter les mains l’une contre l’autre jusqu’à ce qu’elles soient complètement sèches.",
    },
    {
        ref: 284,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Savon Corps et Visage à l'Aloe et à l'Avocat",
        price: 7.88,
        description:
            "Enrichi en ingrédients naturels comme l’huile d’avocat pur et l’Aloe vera, le savon Visage et Corps Aloe Avocado nettoie et hydrate la peau en la laissant plus lisse, plus douce et plus éclatante, même les peaux les plus sensibles. Son léger parfum citronné vous aidera à vous réveiller le matin pour une douceur qui perdurera toute la journée.",
        volume: "142 g",
        content: "Huile d’avocat et Aloe vera.",
        use: "Emulsionner chaque jour sur peau mouillée.",
    },
    {
        ref: 40,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe First",
        price: 31.25,
        description:
            "Aloe First est la brume à utiliser quotidiennement, en toute saison, pour hydrater*, rafraîchir et tonifier l'épiderme du visage et du corps. Elle est tonifiante pour la peau et le cuir chevelu grâce à sa formule exceptionnelle enrichie de 11 extraits de plantes, d'Aloe Vera, de propolis et d'allantoïne. Son pH neutre s'adapte aux peaux les plus sensibles même à celles des enfants. * Hydratation des couches supérieures de l'épiderme.",
        volume: "473 ml",
        content: "80.3 % de gel d'aloès.",
        use: "Avant l'application de soins cosmétiques et à tout moment de la journée pour hydrater* la peau. En été, pour rafraîchir la peau après le soleil.",
    },
    {
        ref: 28,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Forever Bright Toothgel",
        price: 12.00,
        description:
            "Ce gel dentaire, sans fluor et non abrasif, ravive la blancheur de vos dents. Son complexe à la chlorophylle, sans menthol, procure une sensation de fraîcheur naturelle. Sa formule complète à base de propolis et d'aloès aide à préserver votre l'hygiène buccale.",
        volume: "130 g",
        content: "35.5 % de gel d'aloès.",
        use: "Pour un soin complet, se brosser les dents après chaque repas et prendre régulièrement rendez-vous chez le dentiste.",
    },
    {
        ref: 22,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe Lèvres",
        price: 5.51,
        description:
            "Une formule nourrissante et protectrice pour ce baume lèvres qui associe Aloe Vera, huile de jojoba et cire d'abeille. Il apporte un confort revitalisant pour les lèvres les plus desséchées. * Hydratation des couches supérieures de l'épiderme.",
        volume: "4,5 g",
        content: "27.6 % de gel d'aloès, 20.4 % d'huile de jojoba.",
        use: "Appliquer sur les lèvres dès que le besoin se fait sentir.",
    },
    {
        ref: 617,
        category: "Les Solaires",
        cat: "solaires",
        name: "Aloe Sunscreen",
        price: 25.10,
        description:
            "La Forever Aloe Sunscreen combine le pouvoir apaisant de l'aloès avec de l'oxyde de zinc naturel pour une protection SPF 30 avancée contre les rayons UVA et UVB. Cette crème solaire protège, apaise et hydrate. Adaptée à tous les types de peaux, elle sera votre alliée incontournable cet été.",
        volume: "118 ml",
        content: "Aloe vera, Vitamine E, Oxyde de Zinc.",
        use: "Appliquer uniformément et généreusement sur la peau avant toute exposition au soleil. Renouveler l’application toutes les 2 heures. Il est conseillé d'éviter les expositions aux heures d’ensoleillement maximum, entre 12h et 16h.",
    },
    {
        ref: 205,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe MSM Gel ",
        price: 36.43,
        description:
            "Le methyl sulfonyl méthane (MSM) est une source stable, riche et naturelle de soufre organique. Le soufre est présent en concentration particulièrement élevée dans les articulations où il participe à la production du sulfate de chondroïtine et des glucosamines. Utilisé comme gel de massage, le MSM gel améliore le confort articulaire.",
        volume: "118 ml",
        content: "40 % de gel d'aloès, 15 % MSM.",
        use: "Appliquer en massages généreux sur les zones inconfortables.",
    },
    {
        ref: 640,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Shampoing Aloe-Jojoba",
        price: 25.81,
        description:
            "Le shampoing Aloe-Jojoba a été conçu pour nettoyer en profondeur et hydrater tous les types de cheveux. Vos cheveux seront hydratés, brillants, sains et doux. En associant l’Aloe vera pur (39.7%) à l’huile de jojoba (fortifiante pour les cheveux), Forever vous propose une nouvelle formule du shampooing Forever Aloe-Jojoba qui sera parfaite pour un usage quotidien et fera ressortir le meilleur de vos cheveux. Sans sulfates ajoutés, il aide à maintenir l'équilibre hydrique de votre cuir chevelu tout en le gardant apaisé.",
        volume: "118 ml",
        content: "39.7 % de gel d'aloès Huile de Jojoba Huile d'Argan Huile d'Eglantier",
        use: "Déposer une noix de produit les cheveux et sur le cuir chevelu, masser puis rincer. Répéter l'opération si nécessaire. Pour de meilleurs résultats, utiliser l'Après Shampoing Aloe-Jojoba.",
    },
    {
        ref: 641,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Apres-Shampoing Aloe-Jojoba",
        price: 28.13,
        description:
            "L’après-shampoing est un soin indispensable à associer à sa routine capillaire pour adoucir, démêler, nourrir les cheveux et leur donner de la brillance. La nouvelle formule de l’après-shampoing Aloe-Jojoba stimulera également l'hydratation des cheveux et du cuir chevelu, sans sulfate. Notre formule est parfaite pour un usage quotidien et comprend trois huiles différentes pour retenir l'humidité sans alourdir les cheveux.",
        volume: "118 ml",
        content: "40.7 % de gel d'aloès Huile de Jojoba Huile d'Argan Huile d'Eglantier",
        use: "Appliquer une noix de produit sur l'ensemble de la chevelure en insistant sur les pointes. Laisser agir quelques minutes avant de rincer abondamment.",
    },
    {
        ref: 647,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Body Lotion",
        price: 27.00,
        description:
            "L'Aloe Body Lotion apaise, hydrate* et protège la peau du dessèchement. Grâce à sa texture légère et non grasse, elle pénètre rapidement et laisse la peau souple, douce et d’apparence plus lisse. Un parfum frais et délicat. Sans silicone. Convient aux peaux sensibles. Peut être utilisée en après solaire. *Hydratation des couches supérieures de l'épiderme ",
        volume: "118 ml",
        content: "66% de gel d'aloes.",
        use: "Appliquer quotidiennement sur une peau propre et sèche sur l'ensemble du corps, en insistant sur les zones sèches. Masser jusqu'à complète absorption de l'émulsion.",
    },
    {
        ref: 646,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Body Wash",
        price: 27.22,
        description:
            "Grâce à sa formule très douce, L’Aloe Body Wash nettoie et revitalise la peau délicatement tout en respectant son équilibre. Sa texture émulsion-gel fraîche fond sur la peau pour y laisser un parfum envoutant. Votre peau est propre, douce et rafraichie. Formule pH neutre. Sans sulfates. Convient aux peaux sensibles.",
        volume: "118 ml",
        content: "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel/gel d’aloès officinal stabilisé*), Water (Aqua/Eau), Cocamidopropyl Betaine, Cocamidopropyl Hydroxysultaine, Propanediol, Sodium Methyl 2-Sulfolaurate, Sodium Cocoyl Glycinate, Sodium Cocoamphoacetate, Polyacrylate Crosspolymer-6, Disodium 2-Sulfolaurate, Lauryl Glucoside, Hydrolyzed Jojoba Esters, Chondrus Crispus Extract",
        use: "Appliquer sur une houppette de douche, un luffa ou une éponge et savonner délicatement tout le corps en effectuant des mouvements circulaires. Bien rincer.",
    },
    {
        ref: 564,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Cooling Lotion",
        price: 17.28,
        description:
            "Relax and recharge with the refreshing feel of aloe, menthol, eucalyptus and other soothing ingredients. Perfect to massage into muscles and joints / affected areas after a long day or a challenging workout. ",
        volume: "118 ml",
        content: "Gel Aloe Vera 42,9%, Huile d'Eucalyptus, Menthol, Camphre",
        use: "Appliquer généreusement sur les zones nécessaires et masser pour faire pénétrer.",
    },
    {
        ref: 522,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Jojoba Conditioning",
        price: 24.94,
        description:
            "Non disponible en France. L'Après Shampoing Aloe-Jojoba, formulé avec de l'Aloe Vera stabilisée, est enrichi avec un complexe de pro vitamines B, trois huiles naturelles, ainsi qu'une touche d'huile essentielle de Lavande vraie, pour un parfum délicat. Cet après shampoing a été formulé pour agir en synergie avec le Shampoing Aloe Jojoba. Il laisse les cheveux doux et brillants. Non vendu en metropole.",
        volume: "296 ml",
        content: "Aloe Vera (37,3%) ",
        use: "Laver les cheveux à l'aide du Shampoing Aloe Jojoba puis appliquer l'Après Shampoing Aloe Jojoba et laisser poser 2 à 3 minutes. Rincer soigneusement et sécher les cheveux.",
    },
    {
        ref: 376,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Arctic Sea",
        price: 42.44,
        description:
            "La recrudescence des fast-foods et les repas pris rapidement sur le pouce ne nous encouragent pas à entretenir une alimentation saine et équilibrée. Forever Arctic-Sea se compose d’acides gras insaturés, l’EPA (acide eicosapentaénoïque) et le DHA (acide docosahexaénoïque) présents dans les huiles de poissons et de calamar, et qui font partie de la famille des Oméga-3. Ces acides gras sont dits « essentiels » car l’organisme ne sait pas les synthétiser. Il est nécessaire d’en consommer car le DHA contribue au fonctionnement normal du cerveau aide à maintenir une vision normale. L’EPA et le DHA contribuent à une fonction normale du cœur.",
        volume: "120 capsules, poids net 78g",
        content: "45.91 % d’huile de poissons, 16.69 % d’huile de calamar, 11.31% d’huile d’olive extra vierge.",
        use: "Prendre 2 capsules 3 fois par jour de préférence pendant les repas, soit 6 capsules par jour. Déconseillé aux femmes enceintes et allaitantes et aux enfants de moins de 6 ans.",
    },
];

const allCategories = [
    {
        cat: "bienetre",
        name: "Les bases du bien-etre",
    },

    {
        cat: "packs",
        name: "Les packs",
    },

    {
        cat: "indispensables",
        name: "Les indispensables",
    },

    {
        cat: "nutrition",
        name: "Nutrition",
    },

    {
        cat: "fitness",
        name: "Fitness & Minceur",
    },

    {
        cat: "visage",
        name: "Visage",
    },

    {
        cat: "solaires",
        name: "Les solaires",
    },

    {
        cat: "laruche",
        name: "Les produits de la ruche",
    },

    {
        cat: "huiles",
        name: "Les huiles essentielles",
    },

    {
        cat: "bienetre",
        name: "Les bases du bien-etre",
    },

    {
        cat: "maison",
        name: "Pour la maison",
    },

    {
        cat: "parfums",
        name: "Les parfums",
    },
]
export { allProducts };
export { allCategories };
