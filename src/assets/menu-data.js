const data = {
  tree: [
    {
      id: "R10",
      name: "Bio et Ecologie",
      type: "food",
      link: "/r/bio-et-ecologie",
      icon: "/images/icons/main-navigation/R10.svg",
      children: [
        {
          id: "R10F01",
          name: "Le MarchÃ©",
          link: "/r/bio-et-ecologie/le-marche",
          visual:
            "/media/195x195/PhotositeArbo/R10F01_PhotoArbo_20160601_151900.png",
          children: [
            {
              name: "LÃ©gumes et Fruits",
              id: "R10F01SF03",
              slug: "legumes-et-fruits",
              link: "/r/bio-et-ecologie/le-marche/legumes-et-fruits"
            },
            {
              name: "LÃ©gumes secs et Fruits secs",
              id: "R10F01SF02",
              slug: "legumes-secs-et-fruits-secs",
              link: "/r/bio-et-ecologie/le-marche/legumes-secs-et-fruits-secs"
            },
            {
              name: "Boucherie et Poissonnerie",
              id: "R10F01SF01",
              slug: "boucherie-et-poissonnerie",
              link: "/r/bio-et-ecologie/le-marche/boucherie-et-poissonnerie"
            },
            {
              name: "Boulangerie et Viennoiserie",
              id: "R10F01SF04",
              slug: "boulangerie-et-viennoiserie",
              link: "/r/bio-et-ecologie/le-marche/boulangerie-et-viennoiserie"
            }
          ]
        },
        {
          id: "R10F02",
          name: "CrÃ¨merie ",
          link: "/r/bio-et-ecologie/cremerie",
          visual:
            "/media/195x195/PhotositeArbo/R10F02_PhotoArbo_20160601_151900.png",
          children: [
            {
              name: "Lait et Åufs",
              id: "R10F02SF01",
              slug: "lait-et-oeufs",
              link: "/r/bio-et-ecologie/cremerie/lait-et-oeufs"
            },
            {
              name: "Beurre et crÃ¨me",
              id: "R10F02SF02",
              slug: "beurre-et-creme",
              link: "/r/bio-et-ecologie/cremerie/beurre-et-creme"
            },
            {
              name: "Fromage",
              id: "R10F02SF03",
              slug: "fromage",
              link: "/r/bio-et-ecologie/cremerie/fromage"
            },
            {
              name: "Yaourts et desserts",
              id: "R10F02SF04",
              slug: "yaourts-et-desserts",
              link: "/r/bio-et-ecologie/cremerie/yaourts-et-desserts"
            }
          ]
        },
        {
          id: "R10F03",
          name: "Frais et surgelÃ©s",
          link: "/r/bio-et-ecologie/frais-et-surgeles",
          visual:
            "/media/195x195/PhotositeArbo/R10F03_PhotoArbo_20160601_151900.png",
          children: [
            {
              name: "Charcuterie bio",
              id: "R10F03SF01",
              slug: "charcuterie-bio",
              link: "/r/bio-et-ecologie/frais-et-surgeles/charcuterie-bio"
            },
            {
              name: "Traiteur bio",
              id: "R10F03SF02",
              slug: "traiteur-bio",
              link: "/r/bio-et-ecologie/frais-et-surgeles/traiteur-bio"
            },
            {
              name: "SurgelÃ©s bio",
              id: "R10F03SF03",
              slug: "surgeles-bio",
              link: "/r/bio-et-ecologie/frais-et-surgeles/surgeles-bio"
            }
          ]
        },
        {
          id: "R10F04",
          name: "Epicerie SalÃ©e",
          link: "/r/bio-et-ecologie/epicerie-salee",
          visual:
            "/media/195x195/PhotositeArbo/R10F04_PhotoArbo_20170725_180408.png",
          children: [
            {
              name: "ApÃ©ritif",
              id: "R10F04SF01",
              slug: "aperitif",
              link: "/r/bio-et-ecologie/epicerie-salee/aperitif"
            },
            {
              name: "Soupes et potages",
              id: "R10F04SF02",
              slug: "soupes-et-potages",
              link: "/r/bio-et-ecologie/epicerie-salee/soupes-et-potages"
            },
            {
              name: "PÃ¢tes, riz et fÃ©culents",
              id: "R10F04SF03",
              slug: "pates-riz-et-feculents",
              link: "/r/bio-et-ecologie/epicerie-salee/pates-riz-et-feculents"
            },
            {
              name: "Sauces et condiments",
              id: "R10F04SF04",
              slug: "sauces-et-condiments",
              link: "/r/bio-et-ecologie/epicerie-salee/sauces-et-condiments"
            },
            {
              name: "Conserves et plats cuisinÃ©s",
              id: "R10F04SF05",
              slug: "conserves-et-plats-cuisines",
              link:
                "/r/bio-et-ecologie/epicerie-salee/conserves-et-plats-cuisines"
            }
          ]
        },
        {
          id: "R10F05",
          name: "Epicerie sucrÃ©e",
          link: "/r/bio-et-ecologie/epicerie-sucree",
          visual:
            "/media/195x195/PhotositeArbo/R10F05_PhotoArbo_20190228_114248.png",
          children: [
            {
              name: "Petit dÃ©jeuner bio",
              id: "R10F05SF01",
              slug: "petit-dejeuner-bio",
              link: "/r/bio-et-ecologie/epicerie-sucree/petit-dejeuner-bio"
            },
            {
              name: "Galettes de riz et pains",
              id: "R10F05SF02",
              slug: "galettes-de-riz-et-pains",
              link:
                "/r/bio-et-ecologie/epicerie-sucree/galettes-de-riz-et-pains"
            },
            {
              name: "ThÃ©s, cafÃ©s et infusions",
              id: "R10F05SF03",
              slug: "thes-cafes-et-infusions",
              link: "/r/bio-et-ecologie/epicerie-sucree/thes-cafes-et-infusions"
            },
            {
              name: "Gouters, biscuits et chocolat",
              id: "R10F05SF04",
              slug: "gouters-biscuits-et-chocolat",
              link:
                "/r/bio-et-ecologie/epicerie-sucree/gouters-biscuits-et-chocolat"
            },
            {
              name: "Desserts, sucres et farines",
              id: "R10F05SF05",
              slug: "desserts-sucres-et-farines",
              link:
                "/r/bio-et-ecologie/epicerie-sucree/desserts-sucres-et-farines"
            }
          ]
        },
        {
          id: "R10F06",
          name: "Boissons",
          link: "/r/bio-et-ecologie/boissons",
          visual:
            "/media/195x195/PhotositeArbo/R10F06_PhotoArbo_20170725_180325.png",
          children: [
            {
              name: "Jus de fruits",
              id: "R10F06SF01",
              slug: "jus-de-fruits",
              link: "/r/bio-et-ecologie/boissons/jus-de-fruits"
            },
            {
              name: "Sodas, thÃ©s glacÃ©s et sirops",
              id: "R10F06SF02",
              slug: "sodas-thes-glaces-et-sirops",
              link: "/r/bio-et-ecologie/boissons/sodas-thes-glaces-et-sirops"
            },
            {
              name: "Soja et boissons vÃ©gÃ©tales",
              id: "R10F06SF03",
              slug: "soja-et-boissons-vegetales",
              link: "/r/bio-et-ecologie/boissons/soja-et-boissons-vegetales"
            },
            {
              name: "Vins, cidres et biÃ¨res",
              id: "R10F06SF04",
              slug: "vins-cidres-et-bieres",
              link: "/r/bio-et-ecologie/boissons/vins-cidres-et-bieres"
            }
          ]
        },
        {
          id: "R10F07",
          name: "BÃ©bÃ©",
          link: "/r/bio-et-ecologie/bebe",
          visual:
            "/media/195x195/PhotositeArbo/R10F07_PhotoArbo_20170731_112150.png",
          children: [
            {
              name: "CÃ©rÃ©ales et laits",
              id: "R10F07SF01",
              slug: "cereales-et-laits",
              link: "/r/bio-et-ecologie/bebe/cereales-et-laits"
            },
            {
              name: "Repas bÃ©bÃ©",
              id: "R10F07SF02",
              slug: "repas-bebe",
              link: "/r/bio-et-ecologie/bebe/repas-bebe"
            },
            {
              name: "GoÃ»ters et desserts",
              id: "R10F07SF03",
              slug: "gouters-et-desserts",
              link: "/r/bio-et-ecologie/bebe/gouters-et-desserts"
            },
            {
              name: "PuÃ©riculture et hygiÃ¨ne",
              id: "R10F07SF04",
              slug: "puericulture-et-hygiene",
              link: "/r/bio-et-ecologie/bebe/puericulture-et-hygiene"
            }
          ]
        },
        {
          id: "R10F08",
          name: "HygiÃ¨ne beautÃ©",
          link: "/r/bio-et-ecologie/hygiene-beaute",
          visual:
            "/media/195x195/PhotositeArbo/R10F08_PhotoArbo_20170725_180530.png",
          children: [
            {
              name: "Soins corps ",
              id: "R10F08SF01",
              slug: "soins-corps",
              link: "/r/bio-et-ecologie/hygiene-beaute/soins-corps"
            },
            {
              name: "Soins visage",
              id: "R10F08SF02",
              slug: "soins-visage",
              link: "/r/bio-et-ecologie/hygiene-beaute/soins-visage"
            },
            {
              name: "Soins cheveux",
              id: "R10F08SF03",
              slug: "soins-cheveux",
              link: "/r/bio-et-ecologie/hygiene-beaute/soins-cheveux"
            },
            {
              name: "Huiles essentielles",
              id: "R10F08SF04",
              slug: "huiles-essentielles",
              link: "/r/bio-et-ecologie/hygiene-beaute/huiles-essentielles"
            }
          ]
        },
        {
          id: "R10F09",
          name: "Produits mÃ©nagers Ã©cologiques",
          link: "/r/bio-et-ecologie/produits-menagers-ecologiques",
          visual:
            "/media/195x195/PhotositeArbo/R10F09_PhotoArbo_20190215_155458.png",
          children: []
        }
      ]
    },
    {
      id: "R01",
      name: "Fruits et LÃ©gumes",

      type: "food",
      link: "/r/fruits-et-legumes",
      icon: "/images/icons/main-navigation/R01.svg",
      children: [
        {
          id: "R01F01",
          name: "Fruits",
          link: "/r/fruits-et-legumes/fruits",
          visual:
            "/media/195x195/PhotositeArbo/R01F01_PhotoArbo_20181030_165213.png",
          children: [
            {
              name: "Fruits de saison",
              id: "R01F01SF01",
              slug: "fruits-de-saison",
              link: "/r/fruits-et-legumes/fruits/fruits-de-saison"
            },
            {
              name: "Melons et pastÃ¨ques",
              id: "R01F01SF09",
              slug: "melons-et-pasteques",
              link: "/r/fruits-et-legumes/fruits/melons-et-pasteques"
            },
            {
              name: "Fruits rouges",
              id: "R01F01SF06",
              slug: "fruits-rouges",
              link: "/r/fruits-et-legumes/fruits/fruits-rouges"
            },
            {
              name: "Bananes, kiwis, raisins ...",
              id: "R01F01SF04",
              slug: "bananes-kiwis-raisins",
              link: "/r/fruits-et-legumes/fruits/bananes-kiwis-raisins"
            },
            {
              name: "Fruits exotiques",
              id: "R01F01SF05",
              slug: "fruits-exotiques",
              link: "/r/fruits-et-legumes/fruits/fruits-exotiques"
            },
            {
              name: "Pommes et poires",
              id: "R01F01SF03",
              slug: "pommes-et-poires",
              link: "/r/fruits-et-legumes/fruits/pommes-et-poires"
            },
            {
              name: "Agrumes",
              id: "R01F01SF02",
              slug: "agrumes",
              link: "/r/fruits-et-legumes/fruits/agrumes"
            }
          ]
        },
        {
          id: "R01F02",
          name: "LÃ©gumes",
          link: "/r/fruits-et-legumes/legumes",
          visual:
            "/media/195x195/PhotositeArbo/R01F02_PhotoArbo_20181107_154935.png",
          children: [
            {
              name: "LÃ©gumes de saison",
              id: "R01F02SF01",
              slug: "legumes-de-saison",
              link: "/r/fruits-et-legumes/legumes/legumes-de-saison"
            },
            {
              name: "Aubergines, courgettes et poivrons",
              id: "R01F02SF02",
              slug: "aubergines-courgettes-et-poivrons",
              link:
                "/r/fruits-et-legumes/legumes/aubergines-courgettes-et-poivrons"
            },
            {
              name: "Tomates, concombres et avocats",
              id: "R01F02SF03",
              slug: "tomates-concombres-et-avocats",
              link: "/r/fruits-et-legumes/legumes/tomates-concombres-et-avocats"
            },
            {
              name: "Salades ",
              id: "R01F02SF04",
              slug: "salades",
              link: "/r/fruits-et-legumes/legumes/salades"
            },
            {
              name: "Carottes, radis et betterave",
              id: "R01F02SF05",
              slug: "carottes-radis-et-betterave",
              link: "/r/fruits-et-legumes/legumes/carottes-radis-et-betterave"
            },
            {
              name: "Herbes aromatiques et Ã©pices",
              id: "R01F02SF11",
              slug: "herbes-aromatiques-et-epices",
              link: "/r/fruits-et-legumes/legumes/herbes-aromatiques-et-epices"
            },
            {
              name: "Champignons",
              id: "R01F02SF12",
              slug: "champignons",
              link: "/r/fruits-et-legumes/legumes/champignons"
            },
            {
              name: "Choux, poireaux et navets",
              id: "R01F02SF15",
              slug: "choux-poireaux-et-navets",
              link: "/r/fruits-et-legumes/legumes/choux-poireaux-et-navets"
            },
            {
              name: "Pommes de terre",
              id: "R01F02SF08",
              slug: "pommes-de-terre",
              link: "/r/fruits-et-legumes/legumes/pommes-de-terre"
            },
            {
              name: "LÃ©gumes verts et Asperges",
              id: "R01F02SF07",
              slug: "legumes-verts-et-asperges",
              link: "/r/fruits-et-legumes/legumes/legumes-verts-et-asperges"
            },
            {
              name: "Ail, oignons et Ã©chalotes",
              id: "R01F02SF10",
              slug: "ail-oignons-et-echalotes",
              link: "/r/fruits-et-legumes/legumes/ail-oignons-et-echalotes"
            },
            {
              name: "LÃ©gumes d'antan",
              id: "R01F02SF14",
              slug: "legumes-d-antan",
              link: "/r/fruits-et-legumes/legumes/legumes-d-antan"
            }
          ]
        },
        {
          id: "R01F06",
          name: "Fruits et lÃ©gumes Bio",
          link: "/r/fruits-et-legumes/fruits-et-legumes-bio",
          visual:
            "/media/195x195/PhotositeArbo/R01F06_PhotoArbo_20181030_165305.png",
          children: [
            {
              name: "Fruits Bio",
              id: "R01F06SF01",
              slug: "fruits-bio",
              link: "/r/fruits-et-legumes/fruits-et-legumes-bio/fruits-bio"
            },
            {
              name: "LÃ©gumes Bio",
              id: "R01F06SF02",
              slug: "legumes-bio",
              link: "/r/fruits-et-legumes/fruits-et-legumes-bio/legumes-bio"
            }
          ]
        },
        {
          id: "R01F03",
          name: "PrÃªt-Ã -consommer",
          link: "/r/fruits-et-legumes/pret-a-consommer",
          visual:
            "/media/195x195/PhotositeArbo/R01F03_PhotoArbo_20170323_152921.png",
          children: [
            {
              name: "Fruits frais dÃ©coupÃ©s",
              id: "R01F03SF01",
              slug: "fruits-frais-decoupes",
              link:
                "/r/fruits-et-legumes/pret-a-consommer/fruits-frais-decoupes"
            },
            {
              name: "Salades prÃªtes Ã  l'emploi",
              id: "R01F03SF03",
              slug: "salades-pretes-a-l-emploi",
              link:
                "/r/fruits-et-legumes/pret-a-consommer/salades-pretes-a-l-emploi"
            },
            {
              name: "LÃ©gumes prÃªts Ã  l'emploi",
              id: "R01F03SF05",
              slug: "legumes-prets-a-l-emploi",
              link:
                "/r/fruits-et-legumes/pret-a-consommer/legumes-prets-a-l-emploi"
            }
          ]
        },
        {
          id: "R01F07",
          name: "Jus de fruits et lÃ©gumes frais",
          link: "/r/fruits-et-legumes/jus-de-fruits-et-legumes-frais",
          visual:
            "/media/195x195/PhotositeArbo/R01F07_PhotoArbo_20171123_092724.png",
          children: []
        }
      ]
    },
    {
      id: "R02",
      name: "Viandes et Poissons",
      type: "food",
      link: "/r/viandes-et-poissons",
      icon: "/images/icons/main-navigation/R02.svg",
      children: [
        {
          id: "R02F01",
          name: "Boucherie",
          link: "/r/viandes-et-poissons/boucherie",
          visual:
            "/media/195x195/PhotositeArbo/R02F01_PhotoArbo_20160601_151900.png",
          children: [
            {
              name: "Mon boucher",
              id: "R02F01SF09",
              slug: "mon-boucher",
              link: "/r/viandes-et-poissons/boucherie/mon-boucher"
            },
            {
              name: "BÅuf ",
              id: "R02F01SF01",
              slug: "boeuf",
              link: "/r/viandes-et-poissons/boucherie/boeuf"
            },
            {
              name: "Veau",
              id: "R02F01SF02",
              slug: "veau",
              link: "/r/viandes-et-poissons/boucherie/veau"
            },
            {
              name: "Porc",
              id: "R02F01SF04",
              slug: "porc",
              link: "/r/viandes-et-poissons/boucherie/porc"
            },
            {
              name: "Saucisses et grillades",
              id: "R02F01SF05",
              slug: "saucisses-et-grillades",
              link: "/r/viandes-et-poissons/boucherie/saucisses-et-grillades"
            },
            {
              name: "Viande hachÃ©e",
              id: "R02F01SF06",
              slug: "viande-hachee",
              link: "/r/viandes-et-poissons/boucherie/viande-hachee"
            },
            {
              name: "Autres viandes et prÃ©parations",
              id: "R02F01SF07",
              slug: "autres-viandes-et-preparations",
              link:
                "/r/viandes-et-poissons/boucherie/autres-viandes-et-preparations"
            }
          ]
        },
        {
          id: "R02F02",
          name: "Volaille et RÃ´tisserie",
          link: "/r/viandes-et-poissons/volaille-et-rotisserie",
          visual:
            "/media/195x195/PhotositeArbo/R02F02_PhotoArbo_20190207_142058.png",
          children: [
            {
              name: "RÃ´tisserie",
              id: "R02F02SF07",
              slug: "rotisserie",
              link: "/r/viandes-et-poissons/volaille-et-rotisserie/rotisserie"
            },
            {
              name: "Poulets",
              id: "R02F02SF01",
              slug: "poulets",
              link: "/r/viandes-et-poissons/volaille-et-rotisserie/poulets"
            },
            {
              name: "Dindes",
              id: "R02F02SF03",
              slug: "dindes",
              link: "/r/viandes-et-poissons/volaille-et-rotisserie/dindes"
            },
            {
              name: "Lapins et autres volailles",
              id: "R02F02SF04",
              slug: "lapins-et-autres-volailles",
              link:
                "/r/viandes-et-poissons/volaille-et-rotisserie/lapins-et-autres-volailles"
            },
            {
              name: "Magrets et gÃ©siers",
              id: "R02F02SF05",
              slug: "magrets-et-gesiers",
              link:
                "/r/viandes-et-poissons/volaille-et-rotisserie/magrets-et-gesiers"
            },
            {
              name: "Cordons bleus, nuggets & grignottes",
              id: "R02F02SF02",
              slug: "cordons-bleus-nuggets-grignottes",
              link:
                "/r/viandes-et-poissons/volaille-et-rotisserie/cordons-bleus-nuggets-grignottes"
            }
          ]
        },
        {
          id: "R02F03",
          name: "Poissonnerie",
          link: "/r/viandes-et-poissons/poissonnerie",
          visual:
            "/media/195x195/PhotositeArbo/R02F03_PhotoArbo_20160601_151900.png",
          children: [
            {
              name: "Mon poissonnier ",
              id: "R02F03SF11",
              slug: "mon-poissonnier",
              link: "/r/viandes-et-poissons/poissonnerie/mon-poissonnier"
            },
            {
              name: "Saumons et truites",
              id: "R02F03SF01",
              slug: "saumons-et-truites",
              link: "/r/viandes-et-poissons/poissonnerie/saumons-et-truites"
            },
            {
              name: "Filets et pavÃ©s",
              id: "R02F03SF09",
              slug: "filets-et-paves",
              link: "/r/viandes-et-poissons/poissonnerie/filets-et-paves"
            },
            {
              name: "Crevettes et fruits de mer",
              id: "R02F03SF03",
              slug: "crevettes-et-fruits-de-mer",
              link:
                "/r/viandes-et-poissons/poissonnerie/crevettes-et-fruits-de-mer"
            },
            {
              name: "Boutique Sushis",
              id: "R02F03SF04",
              slug: "boutique-sushis",
              link: "/r/viandes-et-poissons/poissonnerie/boutique-sushis"
            },
            {
              name: "Saumons fumÃ©s",
              id: "R02F03SF05",
              slug: "saumons-fumes",
              link: "/r/viandes-et-poissons/poissonnerie/saumons-fumes"
            },
            {
              name: "Surimis",
              id: "R02F03SF06",
              slug: "surimis",
              link: "/r/viandes-et-poissons/poissonnerie/surimis"
            },
            {
              name: "Les apÃ©ritifs de la mer",
              id: "R02F03SF07",
              slug: "les-aperitifs-de-la-mer",
              children: [
                {
                  name: "CanapÃ©s et blinis",
                  id: "R02F03SF07SS01",
                  slug: "canapes-et-blinis",

                  link: {
                    uri:
                      "/r/viandes-et-poissons/poissonnerie/les-aperitifs-de-la-mer/canapes-et-blinis",
                    target: "_self"
                  }
                },
                {
                  name: "Tartinables ",
                  id: "R02F03SF07SS02",
                  slug: "tartinables",

                  link: {
                    uri:
                      "/r/viandes-et-poissons/poissonnerie/les-aperitifs-de-la-mer/tartinables",
                    target: "_self"
                  }
                },
                {
                  name: "Åufs de poissons",
                  id: "R02F03SF07SS03",
                  slug: "oeufs-de-poissons",

                  link: {
                    uri:
                      "/r/viandes-et-poissons/poissonnerie/les-aperitifs-de-la-mer/oeufs-de-poissons",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/viandes-et-poissons/poissonnerie/les-aperitifs-de-la-mer"
            },
            {
              name: "Poissons cuisinÃ©s et panÃ©s",
              id: "R02F03SF08",
              slug: "poissons-cuisines-et-panes",
              link:
                "/r/viandes-et-poissons/poissonnerie/poissons-cuisines-et-panes"
            },
            {
              name: "Soupes de poisson et accompagnements",
              id: "R02F03SF10",
              slug: "soupes-de-poisson-et-accompagnements",
              link:
                "/r/viandes-et-poissons/poissonnerie/soupes-de-poisson-et-accompagnements"
            }
          ]
        }
      ]
    },
    {
      id: "R03",
      name: "Pains et PÃ¢tisseries",

      type: "food",
      link: "/r/pains-et-patisseries",
      icon: "/images/icons/main-navigation/R03.svg",
      children: [
        {
          id: "R03F01",
          name: "Mon boulanger",
          link: "/r/pains-et-patisseries/mon-boulanger",
          visual:
            "/media/195x195/PhotositeArbo/R03F01_PhotoArbo_20160601_151900.png",
          children: [
            {
              name: "Pain",
              id: "R03F01SF01",
              slug: "pain",
              link: "/r/pains-et-patisseries/mon-boulanger/pain"
            },
            {
              name: "Baguettes",
              id: "R03F01SF02",
              slug: "baguettes",
              link: "/r/pains-et-patisseries/mon-boulanger/baguettes"
            }
          ]
        },
        {
          id: "R03F03",
          name: "Mon pÃ¢tissier",
          link: "/r/pains-et-patisseries/mon-patissier",
          visual:
            "/media/195x195/PhotositeArbo/R03F03_PhotoArbo_20160601_151900.png",
          children: [
            {
              name: "GÃ¢teaux",
              id: "R03F03SF01",
              slug: "gateaux",
              link: "/r/pains-et-patisseries/mon-patissier/gateaux"
            },
            {
              name: "Biscuits et Gourmandises",
              id: "R03F03SF02",
              slug: "biscuits-et-gourmandises",
              link:
                "/r/pains-et-patisseries/mon-patissier/biscuits-et-gourmandises"
            }
          ]
        },
        {
          id: "R03F02",
          name: "Viennoiseries et brioches",
          link: "/r/pains-et-patisseries/viennoiseries-et-brioches",
          visual:
            "/media/195x195/PhotositeArbo/R03F02_PhotoArbo_20181031_150529.png",
          children: [
            {
              name: "Viennoiseries",
              id: "R03F02SF01",
              slug: "viennoiseries",
              link:
                "/r/pains-et-patisseries/viennoiseries-et-brioches/viennoiseries"
            },
            {
              name: "Brioches et pains au lait",
              id: "R03F02SF02",
              slug: "brioches-et-pains-au-lait",
              link:
                "/r/pains-et-patisseries/viennoiseries-et-brioches/brioches-et-pains-au-lait"
            },
            {
              name: "Madeleines, mignardises et cakes",
              id: "R03F02SF03",
              slug: "madeleines-mignardises-et-cakes",
              link:
                "/r/pains-et-patisseries/viennoiseries-et-brioches/madeleines-mignardises-et-cakes"
            }
          ]
        },
        {
          id: "R03F04",
          name: "Pains de mie, prÃ©cuits et burger",
          link: "/r/pains-et-patisseries/pains-de-mie-precuits-et-burger",
          visual:
            "/media/195x195/PhotositeArbo/R03F04_PhotoArbo_20170717_114740.png",
          children: [
            {
              name: "Pains de mie",
              id: "R03F04SF01",
              slug: "pains-de-mie",
              link:
                "/r/pains-et-patisseries/pains-de-mie-precuits-et-burger/pains-de-mie"
            },
            {
              name: "Pains burger et pains prÃ©cuits",
              id: "R03F04SF02",
              slug: "pains-burger-et-pains-precuits",
              link:
                "/r/pains-et-patisseries/pains-de-mie-precuits-et-burger/pains-burger-et-pains-precuits"
            }
          ]
        }
      ]
    },
    {
      id: "R04",
      name: "CrÃ©merie",

      type: "food",
      link: "/r/cremerie",
      icon: "/images/icons/main-navigation/R04.svg",
      children: [
        {
          id: "R04F01",
          name: "Beurres et margarines",
          link: "/r/cremerie/beurres-et-margarines",
          visual:
            "/media/195x195/PhotositeArbo/R04F01_PhotoArbo_20190220_154443.png",
          children: [
            {
              name: "Beurres doux",
              id: "R04F01SF01",
              slug: "beurres-doux",
              link: "/r/cremerie/beurres-et-margarines/beurres-doux"
            },
            {
              name: "Beurres demi-sel",
              id: "R04F01SF02",
              slug: "beurres-demi-sel",
              link: "/r/cremerie/beurres-et-margarines/beurres-demi-sel"
            },
            {
              name: "Margarines et matiÃ¨res grasses",
              id: "R04F01SF03",
              slug: "margarines-et-matieres-grasses",
              link:
                "/r/cremerie/beurres-et-margarines/margarines-et-matieres-grasses"
            }
          ]
        },
        {
          id: "R04F02",
          name: "CrÃ¨mes fraÃ®ches et chantilly",
          link: "/r/cremerie/cremes-fraiches-et-chantilly",
          visual:
            "/media/195x195/PhotositeArbo/R04F02_PhotoArbo_20170717_114911.png",
          children: [
            {
              name: "Epaisses",
              id: "R04F02SF01",
              slug: "epaisses",
              link: "/r/cremerie/cremes-fraiches-et-chantilly/epaisses"
            },
            {
              name: "Fluides",
              id: "R04F02SF02",
              slug: "fluides",
              link: "/r/cremerie/cremes-fraiches-et-chantilly/fluides"
            },
            {
              name: "Chantilly et CrÃ¨mes anglaises",
              id: "R04F02SF03",
              slug: "chantilly-et-cremes-anglaises",
              link:
                "/r/cremerie/cremes-fraiches-et-chantilly/chantilly-et-cremes-anglaises"
            }
          ]
        },
        {
          id: "R04F03",
          name: "Åufs ",
          link: "/r/cremerie/oeufs",
          visual:
            "/media/195x195/PhotositeArbo/R04F03_PhotoArbo_20170717_115208.png",
          children: []
        },
        {
          id: "R04F04",
          name: "Lait, boissons lactÃ©es et vÃ©gÃ©tales",
          link: "/r/cremerie/lait-boissons-lactees-et-vegetales",
          visual:
            "/media/195x195/PhotositeArbo/R04F04_PhotoArbo_20190220_154211.png",
          children: [
            {
              name: "Demi Ã©crÃ©mÃ©",
              id: "R04F04SF01",
              slug: "demi-ecreme",
              link: "/r/cremerie/lait-boissons-lactees-et-vegetales/demi-ecreme"
            },
            {
              name: "EcrÃ©mÃ©",
              id: "R04F04SF02",
              slug: "ecreme",
              link: "/r/cremerie/lait-boissons-lactees-et-vegetales/ecreme"
            },
            {
              name: "Entier",
              id: "R04F04SF03",
              slug: "entier",
              link: "/r/cremerie/lait-boissons-lactees-et-vegetales/entier"
            },
            {
              name: "AromatisÃ©s",
              id: "R04F04SF04",
              slug: "aromatises",
              link: "/r/cremerie/lait-boissons-lactees-et-vegetales/aromatises"
            },
            {
              name: "Frais et chÃ¨vre",
              id: "R04F04SF05",
              slug: "frais-et-chevre",
              link:
                "/r/cremerie/lait-boissons-lactees-et-vegetales/frais-et-chevre"
            },
            {
              name: "Boissons vÃ©gÃ©tales",
              id: "R04F04SF06",
              slug: "boissons-vegetales",
              link:
                "/r/cremerie/lait-boissons-lactees-et-vegetales/boissons-vegetales"
            }
          ]
        },
        {
          id: "R04F05",
          name: "Fromages",
          link: "/r/cremerie/fromages",
          visual:
            "/media/195x195/PhotositeArbo/R04F05_PhotoArbo_20181227_163317.png",
          children: [
            {
              name: "Mon fromager",
              id: "R04F05SF01",
              slug: "mon-fromager",
              link: "/r/cremerie/fromages/mon-fromager"
            },
            {
              name: "Mozza, feta et autres",
              id: "R04F05SF12",
              slug: "mozza-feta-et-autres",
              link: "/r/cremerie/fromages/mozza-feta-et-autres"
            },
            {
              name: "Camemberts, Coulommiers et Bries",
              id: "R04F05SF03",
              slug: "camemberts-coulommiers-et-bries",
              link: "/r/cremerie/fromages/camemberts-coulommiers-et-bries"
            },
            {
              name: "Roqueforts et Bleus",
              id: "R04F05SF06",
              slug: "roqueforts-et-bleus",
              link: "/r/cremerie/fromages/roqueforts-et-bleus"
            },
            {
              name: "ChÃ¨vres et Brebis",
              id: "R04F05SF07",
              slug: "chevres-et-brebis",
              link: "/r/cremerie/fromages/chevres-et-brebis"
            },
            {
              name: "Emmental, ComtÃ© et Cantal",
              id: "R04F05SF08",
              slug: "emmental-comte-et-cantal",
              link: "/r/cremerie/fromages/emmental-comte-et-cantal"
            },
            {
              name: "Fromages en tranches, cubes et apÃ©ritif",
              id: "R04F05SF10",
              slug: "fromages-en-tranches-cubes-et-aperitif",
              link:
                "/r/cremerie/fromages/fromages-en-tranches-cubes-et-aperitif"
            },
            {
              name: "Fromages de caractÃ¨re",
              id: "R04F05SF11",
              slug: "fromages-de-caractere",
              link: "/r/cremerie/fromages/fromages-de-caractere"
            },
            {
              name: "Fromages rÃ¢pÃ©s",
              id: "R04F05SF04",
              slug: "fromages-rapes",
              link: "/r/cremerie/fromages/fromages-rapes"
            },
            {
              name: "Fromages Enfants",
              id: "R04F05SF05",
              slug: "fromages-enfants",
              link: "/r/cremerie/fromages/fromages-enfants"
            },
            {
              name: "Fromages Ã  tartiner",
              id: "R04F05SF09",
              slug: "fromages-a-tartiner",
              link: "/r/cremerie/fromages/fromages-a-tartiner"
            },
            {
              name: "Fromages allÃ©gÃ©s",
              id: "R04F05SF14",
              slug: "fromages-alleges",
              link: "/r/cremerie/fromages/fromages-alleges"
            },
            {
              name: "Raclette, fondue et tartiflette",
              id: "R04F05SF02",
              slug: "raclette-fondue-et-tartiflette",
              link: "/r/cremerie/fromages/raclette-fondue-et-tartiflette"
            }
          ]
        },
        {
          id: "R04F06",
          name: "Yaourts, desserts et spÃ©cialitÃ©s vÃ©gÃ©tales",
          link: "/r/cremerie/yaourts-desserts-et-specialites-vegetales",
          visual:
            "/media/195x195/PhotositeArbo/R04F06_PhotoArbo_20181220_173332.png",
          children: [
            {
              name: "Yaourts et fromages blancs natures",
              id: "R04F06SF01",
              slug: "yaourts-et-fromages-blancs-natures",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/yaourts-et-fromages-blancs-natures"
            },
            {
              name: "Yaourts et fromages blancs aux fruits et arÃ´matisÃ©s",
              id: "R04F06SF02",
              slug: "yaourts-et-fromages-blancs-aux-fruits-et-aromatises",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/yaourts-et-fromages-blancs-aux-fruits-et-aromatises"
            },
            {
              name: "Bifidus et bien Ãªtre",
              id: "R04F06SF12",
              slug: "bifidus-et-bien-etre",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/bifidus-et-bien-etre"
            },
            {
              name: "Riz, semoule et crÃ¨mes aux oeufs",
              id: "R04F06SF10",
              slug: "riz-semoule-et-cremes-aux-oeufs",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/riz-semoule-et-cremes-aux-oeufs"
            },
            {
              name: "Mousses et liÃ©geois",
              id: "R04F06SF09",
              slug: "mousses-et-liegeois",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/mousses-et-liegeois"
            },
            {
              name: "Desserts pÃ¢tissiers et italiens",
              id: "R04F06SF11",
              slug: "desserts-patissiers-et-italiens",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/desserts-patissiers-et-italiens"
            },
            {
              name: "CrÃ¨mes desserts et flans",
              id: "R04F06SF08",
              slug: "cremes-desserts-et-flans",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/cremes-desserts-et-flans"
            },
            {
              name: "Enfant et Ã  boire",
              id: "R04F06SF03",
              slug: "enfant-et-a-boire",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/enfant-et-a-boire"
            },
            {
              name: "Yaourts et fromages blancs 0% et allÃ©gÃ©s",
              id: "R04F06SF05",
              slug: "yaourts-et-fromages-blancs-0-et-alleges",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/yaourts-et-fromages-blancs-0-et-alleges"
            },
            {
              name: "ChÃ¨vre et brebis ",
              id: "R04F06SF06",
              slug: "chevre-et-brebis",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/chevre-et-brebis"
            },
            {
              name: "SpÃ©cialitÃ©s vÃ©gÃ©tales",
              id: "R04F06SF07",
              slug: "specialites-vegetales",
              link:
                "/r/cremerie/yaourts-desserts-et-specialites-vegetales/specialites-vegetales"
            }
          ]
        },
        {
          id: "R04F08",
          name: "Compotes fraiches",
          link: "/r/cremerie/compotes-fraiches",
          visual:
            "/media/195x195/PhotositeArbo/R04F08_PhotoArbo_20190128_152721.png",
          children: []
        }
      ]
    },
    {
      id: "R15",
      name: "Charcuterie",

      type: "food",
      link: "/r/charcuterie",
      icon: "/images/icons/main-navigation/R15.svg",
      children: [
        {
          id: "R15F01",
          name: "Mon charcutier",
          link: "/r/charcuterie/mon-charcutier",
          visual:
            "/media/195x195/PhotositeArbo/R15F01_PhotoArbo_20170410_142041.png",
          children: [
            {
              name: "Foies gras",
              id: "R15F01SF04",
              slug: "foies-gras",
              link: "/r/charcuterie/mon-charcutier/foies-gras"
            },
            {
              name: "Jambons et charcuterie tranchÃ©e",
              id: "R15F01SF01",
              slug: "jambons-et-charcuterie-tranchee",
              link:
                "/r/charcuterie/mon-charcutier/jambons-et-charcuterie-tranchee"
            },
            {
              name: "PÃ¢tÃ©s et rillettes",
              id: "R15F01SF02",
              slug: "pates-et-rillettes",
              link: "/r/charcuterie/mon-charcutier/pates-et-rillettes"
            },
            {
              name: "Saucissons et saucisses",
              id: "R15F01SF03",
              slug: "saucissons-et-saucisses",
              link: "/r/charcuterie/mon-charcutier/saucissons-et-saucisses"
            }
          ]
        },
        {
          id: "R15F02",
          name: "Jambons blancs et rÃ´tis",
          link: "/r/charcuterie/jambons-blancs-et-rotis",
          visual:
            "/media/195x195/PhotositeArbo/R15F02_PhotoArbo_20181227_163341.png",
          children: []
        },
        {
          id: "R15F03",
          name: "Jambons de volaille",
          link: "/r/charcuterie/jambons-de-volaille",
          visual:
            "/media/195x195/PhotositeArbo/R15F03_PhotoArbo_20181227_163426.png",
          children: []
        },
        {
          id: "R15F04",
          name: "Jambons crus et Charcuterie tranchÃ©e",
          link: "/r/charcuterie/jambons-crus-et-charcuterie-tranchee",
          visual:
            "/media/195x195/PhotositeArbo/R15F04_PhotoArbo_20181227_163406.png",
          children: []
        },
        {
          id: "R15F05",
          name: "Lardons et dÃ©s",
          link: "/r/charcuterie/lardons-et-des",
          visual:
            "/media/195x195/PhotositeArbo/R15F05_PhotoArbo_20181227_163445.png",
          children: []
        },
        {
          id: "R15F06",
          name: "Saucissons et chorizo",
          link: "/r/charcuterie/saucissons-et-chorizo",
          visual:
            "/media/195x195/PhotositeArbo/R15F06_PhotoArbo_20170717_120046.png",
          children: []
        },
        {
          id: "R15F10",
          name: "Knacks, saucisses et boudins",
          link: "/r/charcuterie/knacks-saucisses-et-boudins",
          visual:
            "/media/195x195/PhotositeArbo/R15F10_PhotoArbo_20180206_160559.png",
          children: []
        },
        {
          id: "R15F08",
          name: "Foies gras",
          link: "/r/charcuterie/foies-gras",
          visual:
            "/media/195x195/PhotositeArbo/R15F08_PhotoArbo_20170410_142804.png",
          children: []
        },
        {
          id: "R15F07",
          name: "Rillettes et pÃ¢tÃ©s",
          link: "/r/charcuterie/rillettes-et-pates",
          visual:
            "/media/195x195/PhotositeArbo/R15F07_PhotoArbo_20181227_163706.png",
          children: []
        }
      ]
    },
    {
      id: "R05",
      name: "Traiteur",

      type: "food",
      link: "/r/traiteur",
      icon: "/images/icons/main-navigation/R05.svg",
      children: [
        {
          id: "R05F04",
          name: "Traiteur traditionnel",
          link: "/r/traiteur/traiteur-traditionnel",
          visual:
            "/media/195x195/PhotositeArbo/R05F04_PhotoArbo_20170410_154038.png",
          children: [
            {
              name: "ApÃ©ritif et cocktail dÃ®natoire",
              id: "R05F04SF01",
              slug: "aperitif-et-cocktail-dinatoire",
              link:
                "/r/traiteur/traiteur-traditionnel/aperitif-et-cocktail-dinatoire"
            },
            {
              name: "Salades et entrÃ©es",
              id: "R05F04SF02",
              slug: "salades-et-entrees",
              link: "/r/traiteur/traiteur-traditionnel/salades-et-entrees"
            },
            {
              name: "Plats cuisinÃ©s Traiteur",
              id: "R05F04SF03",
              slug: "plats-cuisines-traiteur",
              link: "/r/traiteur/traiteur-traditionnel/plats-cuisines-traiteur"
            },
            {
              name: "PÃ¢tes fraÃ®ches et sauces",
              id: "R05F04SF04",
              slug: "pates-fraiches-et-sauces",
              link: "/r/traiteur/traiteur-traditionnel/pates-fraiches-et-sauces"
            }
          ]
        },
        {
          id: "R05F05",
          name: "RÃ´tisserie",
          link: "/r/traiteur/rotisserie",
          visual:
            "/media/195x195/PhotositeArbo/R05F05_PhotoArbo_20170410_172503.png",
          children: []
        },
        {
          id: "R05F06",
          name: "ApÃ©ritif et cocktail dÃ®natoire",
          link: "/r/traiteur/aperitif-et-cocktail-dinatoire",
          visual:
            "/media/195x195/PhotositeArbo/R05F06_PhotoArbo_20170410_172537.png",
          children: [
            {
              name: "Olives, tartinables et tapas",
              id: "R05F06SF01",
              slug: "olives-tartinables-et-tapas",
              link:
                "/r/traiteur/aperitif-et-cocktail-dinatoire/olives-tartinables-et-tapas"
            },
            {
              name: "Fromage",
              id: "R05F06SF02",
              slug: "fromage",
              link: "/r/traiteur/aperitif-et-cocktail-dinatoire/fromage"
            },
            {
              name: "Charcuterie",
              id: "R05F06SF03",
              slug: "charcuterie",
              link: "/r/traiteur/aperitif-et-cocktail-dinatoire/charcuterie"
            }
          ]
        },
        {
          id: "R05F07",
          name: "Salades et entrÃ©es",
          link: "/r/traiteur/salades-et-entrees",
          visual:
            "/media/195x195/PhotositeArbo/R05F07_PhotoArbo_20170410_172554.png",
          children: []
        },
        {
          id: "R05F08",
          name: "Sandwichs, croques et galettes",
          link: "/r/traiteur/sandwichs-croques-et-galettes",
          visual:
            "/media/195x195/PhotositeArbo/R05F08_PhotoArbo_20170717_120159.png",
          children: [
            {
              name: "Sandwich et burger",
              id: "R05F08SF01",
              slug: "sandwich-et-burger",
              link:
                "/r/traiteur/sandwichs-croques-et-galettes/sandwich-et-burger"
            },
            {
              name: "Croques, galettes...",
              id: "R05F08SF02",
              slug: "croques-galettes",
              link: "/r/traiteur/sandwichs-croques-et-galettes/croques-galettes"
            }
          ]
        },
        {
          id: "R05F09",
          name: "Plats cuisinÃ©s",
          link: "/r/traiteur/plats-cuisines",
          visual:
            "/media/195x195/PhotositeArbo/R05F09_PhotoArbo_20180319_170012.png",
          children: [
            {
              name: "Box",
              id: "R05F09SF03",
              slug: "box",
              link: "/r/traiteur/plats-cuisines/box"
            },
            {
              name: "Plats cuisinÃ©s",
              id: "R05F09SF02",
              slug: "plats-cuisines",
              link: "/r/traiteur/plats-cuisines/plats-cuisines"
            }
          ]
        },
        {
          id: "R05F10",
          name: "VÃ©gÃ©tarien",
          link: "/r/traiteur/vegetarien",
          visual:
            "/media/195x195/PhotositeArbo/R05F10_PhotoArbo_20170717_123153.png",
          children: []
        },
        {
          id: "R05F11",
          name: "Pizzas et Quiches ",
          link: "/r/traiteur/pizzas-et-quiches",
          visual:
            "/media/195x195/PhotositeArbo/R05F11_PhotoArbo_20180430_130713.png",
          children: []
        },
        {
          id: "R05F12",
          name: "Cordons bleus et Nuggets",
          link: "/r/traiteur/cordons-bleus-et-nuggets",
          visual:
            "/media/195x195/PhotositeArbo/R05F12_PhotoArbo_20170717_122920.png",
          children: []
        },
        {
          id: "R05F13",
          name: "PÃ¢tes fraÃ®ches et gnocchis",
          link: "/r/traiteur/pates-fraiches-et-gnocchis",
          visual:
            "/media/195x195/PhotositeArbo/R05F13_PhotoArbo_20170718_125355.png",
          children: []
        },
        {
          id: "R05F14",
          name: "PÃ¢tes Ã  tartes",
          link: "/r/traiteur/pates-a-tartes",
          visual:
            "/media/195x195/PhotositeArbo/R05F14_PhotoArbo_20180205_151735.png",
          children: []
        },
        {
          id: "R05F15",
          name: "Les produits du monde",
          link: "/r/traiteur/les-produits-du-monde",
          visual:
            "/media/195x195/PhotositeArbo/R05F15_PhotoArbo_20170411_135446.png",
          children: [
            {
              name: "Saveurs d'Asie",
              id: "R05F15SF01",
              slug: "saveurs-d-asie",
              link: "/r/traiteur/les-produits-du-monde/saveurs-d-asie"
            },
            {
              name: "Halal",
              id: "R05F15SF02",
              slug: "halal",
              link: "/r/traiteur/les-produits-du-monde/halal"
            }
          ]
        },
        {
          id: "R05F03",
          name: "Traiteur de la Mer",
          link: "/r/traiteur/traiteur-de-la-mer",
          visual:
            "/media/195x195/PhotositeArbo/R05F03_PhotoArbo_20170725_180128.png",
          children: [
            {
              name: "Saumons et poissons fumÃ©s",
              id: "R05F03SF01",
              slug: "saumons-et-poissons-fumes",
              link: "/r/traiteur/traiteur-de-la-mer/saumons-et-poissons-fumes"
            },
            {
              name: "Surimi",
              id: "R05F03SF02",
              slug: "surimi",
              link: "/r/traiteur/traiteur-de-la-mer/surimi"
            },
            {
              name: "Tartinables, Blinis et Åufs de poissons",
              id: "R05F03SF03",
              slug: "tartinables-blinis-et-oeufs-de-poissons",
              link:
                "/r/traiteur/traiteur-de-la-mer/tartinables-blinis-et-oeufs-de-poissons"
            },
            {
              name: "Sushis",
              id: "R05F03SF04",
              slug: "sushis",
              link: "/r/traiteur/traiteur-de-la-mer/sushis"
            },
            {
              name: "Crevettes et crustacÃ©s",
              id: "R05F03SF05",
              slug: "crevettes-et-crustaces",
              link: "/r/traiteur/traiteur-de-la-mer/crevettes-et-crustaces"
            },
            {
              name: "Poissons panÃ©s et cuisinÃ©s",
              id: "R05F03SF06",
              slug: "poissons-panes-et-cuisines",
              link: "/r/traiteur/traiteur-de-la-mer/poissons-panes-et-cuisines"
            }
          ]
        }
      ]
    },
    {
      id: "R06",
      name: "SurgelÃ©s",

      type: "food",
      link: "/r/surgeles",
      icon: "/images/icons/main-navigation/R06.svg",
      children: [
        {
          id: "R06F01",
          name: "ApÃ©ritifs, entrÃ©es et snacking",
          link: "/r/surgeles/aperitifs-entrees-et-snacking",
          visual:
            "/media/195x195/PhotositeArbo/R06F01_PhotoArbo_20170717_123303.png",
          children: [
            {
              name: "ApÃ©ritifs",
              id: "R06F01SF01",
              slug: "aperitifs",
              link: "/r/surgeles/aperitifs-entrees-et-snacking/aperitifs"
            },
            {
              name: "CrÃªpes, FeuilletÃ©s et Coquilles",
              id: "R06F01SF02",
              slug: "crepes-feuilletes-et-coquilles",
              link:
                "/r/surgeles/aperitifs-entrees-et-snacking/crepes-feuilletes-et-coquilles"
            },
            {
              name: "Burgers et snacks",
              id: "R06F01SF03",
              slug: "burgers-et-snacks",
              link:
                "/r/surgeles/aperitifs-entrees-et-snacking/burgers-et-snacks"
            }
          ]
        },
        {
          id: "R06F03",
          name: "Pizzas et tartes ",
          link: "/r/surgeles/pizzas-et-tartes",
          visual:
            "/media/195x195/PhotositeArbo/R06F03_PhotoArbo_20180725_104932.png",
          children: [
            {
              name: "Pizzas",
              id: "R06F03SF05",
              slug: "pizzas",
              link: "/r/surgeles/pizzas-et-tartes/pizzas"
            },
            {
              name: "Quiches et tartes",
              id: "R06F03SF06",
              slug: "quiches-et-tartes",
              link: "/r/surgeles/pizzas-et-tartes/quiches-et-tartes"
            }
          ]
        },
        {
          id: "R06F10",
          name: "Plats cuisinÃ©s",
          link: "/r/surgeles/plats-cuisines",
          visual:
            "/media/195x195/PhotositeArbo/R06F10_PhotoArbo_20180725_105136.png",
          children: [
            {
              name: "Parmentier, lasagnes et gratins",
              id: "R06F10SF01",
              slug: "parmentier-lasagnes-et-gratins",
              link: "/r/surgeles/plats-cuisines/parmentier-lasagnes-et-gratins"
            },
            {
              name: "PÃ¢tes et risottos",
              id: "R06F10SF02",
              slug: "pates-et-risottos",
              link: "/r/surgeles/plats-cuisines/pates-et-risottos"
            },
            {
              name: "Plats de viande et volaille",
              id: "R06F10SF03",
              slug: "plats-de-viande-et-volaille",
              link: "/r/surgeles/plats-cuisines/plats-de-viande-et-volaille"
            },
            {
              name: "Plats de poisson et crustacÃ©s",
              id: "R06F10SF04",
              slug: "plats-de-poisson-et-crustaces",
              link: "/r/surgeles/plats-cuisines/plats-de-poisson-et-crustaces"
            },
            {
              name: "PoÃªlÃ©es de lÃ©gumes",
              id: "R06F10SF05",
              slug: "poelees-de-legumes",
              link: "/r/surgeles/plats-cuisines/poelees-de-legumes"
            }
          ]
        },
        {
          id: "R06F04",
          name: "Pomme de terre et frites",
          link: "/r/surgeles/pomme-de-terre-et-frites",
          visual:
            "/media/195x195/PhotositeArbo/R06F04_PhotoArbo_20180725_111923.png",
          children: [
            {
              name: "Frites",
              id: "R06F04SF02",
              slug: "frites",
              link: "/r/surgeles/pomme-de-terre-et-frites/frites"
            },
            {
              name: "Pommes rissolÃ©es, noisettes et rostis",
              id: "R06F04SF03",
              slug: "pommes-rissolees-noisettes-et-rostis",
              link:
                "/r/surgeles/pomme-de-terre-et-frites/pommes-rissolees-noisettes-et-rostis"
            }
          ]
        },
        {
          id: "R06F11",
          name: "LÃ©gumes natures et cuisinÃ©s",
          link: "/r/surgeles/legumes-natures-et-cuisines",
          visual:
            "/media/195x195/PhotositeArbo/R06F11_PhotoArbo_20180725_112046.png",
          children: [
            {
              name: "LÃ©gumes natures",
              id: "R06F11SF01",
              slug: "legumes-natures",
              link: "/r/surgeles/legumes-natures-et-cuisines/legumes-natures"
            },
            {
              name: "PoÃªlÃ©es, lÃ©gumes cuisinÃ©s et purÃ©es",
              id: "R06F11SF02",
              slug: "poelees-legumes-cuisines-et-purees",
              link:
                "/r/surgeles/legumes-natures-et-cuisines/poelees-legumes-cuisines-et-purees"
            },
            {
              name: "Herbes aromatiques et sauces",
              id: "R06F11SF03",
              slug: "herbes-aromatiques-et-sauces",
              link:
                "/r/surgeles/legumes-natures-et-cuisines/herbes-aromatiques-et-sauces"
            }
          ]
        },
        {
          id: "R06F07",
          name: "Viande et volaille",
          link: "/r/surgeles/viande-et-volaille",
          visual:
            "/media/195x195/PhotositeArbo/R06F07_PhotoArbo_20180725_112946.png",
          children: [
            {
              name: "Steaks hachÃ©s et autres viandes",
              id: "R06F07SF05",
              slug: "steaks-haches-et-autres-viandes",
              link:
                "/r/surgeles/viande-et-volaille/steaks-haches-et-autres-viandes"
            },
            {
              name: "PanÃ©s et volailles",
              id: "R06F07SF06",
              slug: "panes-et-volailles",
              link: "/r/surgeles/viande-et-volaille/panes-et-volailles"
            }
          ]
        },
        {
          id: "R06F12",
          name: "Poissons, crustacÃ©s et mollusques",
          link: "/r/surgeles/poissons-crustaces-et-mollusques",
          visual:
            "/media/195x195/PhotositeArbo/R06F12_PhotoArbo_20180725_113042.png",
          children: [
            {
              name: "Poissons natures et cuisinÃ©s",
              id: "R06F12SF01",
              slug: "poissons-natures-et-cuisines",
              link:
                "/r/surgeles/poissons-crustaces-et-mollusques/poissons-natures-et-cuisines"
            },
            {
              name: "Poissons panÃ©s",
              id: "R06F12SF02",
              slug: "poissons-panes",
              link:
                "/r/surgeles/poissons-crustaces-et-mollusques/poissons-panes"
            },
            {
              name: "CrustacÃ©s et mollusques",
              id: "R06F12SF03",
              slug: "crustaces-et-mollusques",
              link:
                "/r/surgeles/poissons-crustaces-et-mollusques/crustaces-et-mollusques"
            }
          ]
        },
        {
          id: "R06F09",
          name: "Glaces et sorbets",
          link: "/r/surgeles/glaces-et-sorbets",
          visual:
            "/media/195x195/PhotositeArbo/R06F09_PhotoArbo_20180725_120756.png",
          children: [
            {
              name: "Minis (pots, cÃ´nes, bÃ¢tonnets)",
              id: "R06F09SF06",
              slug: "minis-pots-cones-batonnets",
              link: "/r/surgeles/glaces-et-sorbets/minis-pots-cones-batonnets"
            },
            {
              name: "BÃ¢tonnets et barres",
              id: "R06F09SF03",
              slug: "batonnets-et-barres",
              link: "/r/surgeles/glaces-et-sorbets/batonnets-et-barres"
            },
            {
              name: "CÃ´nes",
              id: "R06F09SF08",
              slug: "cones",
              link: "/r/surgeles/glaces-et-sorbets/cones"
            },
            {
              name: "Glaces en pot",
              id: "R06F09SF02",
              slug: "glaces-en-pot",
              link: "/r/surgeles/glaces-et-sorbets/glaces-en-pot"
            },
            {
              name: "CrÃ¨mes glacÃ©es et sorbets en bac",
              id: "R06F09SF01",
              slug: "cremes-glacees-et-sorbets-en-bac",
              link:
                "/r/surgeles/glaces-et-sorbets/cremes-glacees-et-sorbets-en-bac"
            },
            {
              name: "Glaces enfant",
              id: "R06F09SF05",
              slug: "glaces-enfant",
              link: "/r/surgeles/glaces-et-sorbets/glaces-enfant"
            }
          ]
        },
        {
          id: "R06F13",
          name: "Desserts, viennoiseries et fruits",
          link: "/r/surgeles/desserts-viennoiseries-et-fruits",
          visual:
            "/media/195x195/PhotositeArbo/R06F13_PhotoArbo_20180725_120945.png",
          children: [
            {
              name: "PÃ¢tisseries glacÃ©es",
              id: "R06F13SF01",
              slug: "patisseries-glacees",
              link:
                "/r/surgeles/desserts-viennoiseries-et-fruits/patisseries-glacees"
            },
            {
              name: "Pain et viennoiseries",
              id: "R06F13SF02",
              slug: "pain-et-viennoiseries",
              link:
                "/r/surgeles/desserts-viennoiseries-et-fruits/pain-et-viennoiseries"
            },
            {
              name: "Fruits et coulis",
              id: "R06F13SF03",
              slug: "fruits-et-coulis",
              link:
                "/r/surgeles/desserts-viennoiseries-et-fruits/fruits-et-coulis"
            }
          ]
        }
      ]
    },
    {
      id: "R07",
      name: "Epicerie SalÃ©e",

      type: "food",
      link: "/r/epicerie-salee",
      icon: "/images/icons/main-navigation/R07.svg",
      children: [
        {
          id: "R07F01",
          name: "Pour l'apÃ©ritif",
          link: "/r/epicerie-salee/pour-l-aperitif",
          visual:
            "/media/195x195/PhotositeArbo/R07F01_PhotoArbo_20181227_162654.png",
          children: [
            {
              name: "Chips",
              id: "R07F01SF01",
              slug: "chips",
              children: [
                {
                  name: "Natures",
                  id: "R07F01SF01SS01",
                  slug: "natures",

                  link: {
                    uri: "/r/epicerie-salee/pour-l-aperitif/chips/natures",
                    target: "_self"
                  }
                },
                {
                  name: "AromatisÃ©es",
                  id: "R07F01SF01SS02",
                  slug: "aromatisees",

                  link: {
                    uri: "/r/epicerie-salee/pour-l-aperitif/chips/aromatisees",
                    target: "_self"
                  }
                }
              ],
              link: "/r/epicerie-salee/pour-l-aperitif/chips"
            },
            {
              name: "Biscuits apÃ©ritif",
              id: "R07F01SF02",
              slug: "biscuits-aperitif",
              link: "/r/epicerie-salee/pour-l-aperitif/biscuits-aperitif"
            },
            {
              name: "CacahuÃ¨tes, pistaches, â¦",
              id: "R07F01SF03",
              slug: "cacahuetes-pistaches",
              link: "/r/epicerie-salee/pour-l-aperitif/cacahuetes-pistaches"
            },
            {
              name: "Olives et tartinables",
              id: "R07F01SF04",
              slug: "olives-et-tartinables",
              link: "/r/epicerie-salee/pour-l-aperitif/olives-et-tartinables"
            },
            {
              name: "Tuiles et tortillas",
              id: "R07F01SF05",
              slug: "tuiles-et-tortillas",
              link: "/r/epicerie-salee/pour-l-aperitif/tuiles-et-tortillas"
            }
          ]
        },
        {
          id: "R07F02",
          name: "Soupes et croutons",
          link: "/r/epicerie-salee/soupes-et-croutons",
          visual:
            "/media/195x195/PhotositeArbo/R07F02_PhotoArbo_20181227_163755.png",
          children: [
            {
              name: "Soupes fraÃ®ches",
              id: "R07F02SF04",
              slug: "soupes-fraiches",
              link: "/r/epicerie-salee/soupes-et-croutons/soupes-fraiches"
            },
            {
              name: "Soupes en brique",
              id: "R07F02SF01",
              slug: "soupes-en-brique",
              link: "/r/epicerie-salee/soupes-et-croutons/soupes-en-brique"
            },
            {
              name: "Soupes dÃ©shydratÃ©es",
              id: "R07F02SF02",
              slug: "soupes-deshydratees",
              link: "/r/epicerie-salee/soupes-et-croutons/soupes-deshydratees"
            },
            {
              name: "CroÃ»tons",
              id: "R07F02SF03",
              slug: "croutons",
              link: "/r/epicerie-salee/soupes-et-croutons/croutons"
            }
          ]
        },
        {
          id: "R07F03",
          name: "Les Plats cuisinÃ©s",
          link: "/r/epicerie-salee/les-plats-cuisines",
          visual:
            "/media/195x195/PhotositeArbo/R07F03_PhotoArbo_20181227_163544.png",
          children: [
            {
              name: "Plats individuels",
              id: "R07F03SF01",
              slug: "plats-individuels",
              link: "/r/epicerie-salee/les-plats-cuisines/plats-individuels"
            },
            {
              name: "Raviolis et cannellonis",
              id: "R07F03SF02",
              slug: "raviolis-et-cannellonis",
              link:
                "/r/epicerie-salee/les-plats-cuisines/raviolis-et-cannellonis"
            },
            {
              name: "Couscous et TaboulÃ©s",
              id: "R07F03SF03",
              slug: "couscous-et-taboules",
              link: "/r/epicerie-salee/les-plats-cuisines/couscous-et-taboules"
            },
            {
              name: "Cassoulets et confits",
              id: "R07F03SF04",
              slug: "cassoulets-et-confits",
              link: "/r/epicerie-salee/les-plats-cuisines/cassoulets-et-confits"
            },
            {
              name: "Choucroutes et autres plats",
              id: "R07F03SF05",
              slug: "choucroutes-et-autres-plats",
              link:
                "/r/epicerie-salee/les-plats-cuisines/choucroutes-et-autres-plats"
            }
          ]
        },
        {
          id: "R07F04",
          name: "Conserves et bocaux",
          link: "/r/epicerie-salee/conserves-et-bocaux",
          visual:
            "/media/195x195/PhotositeArbo/R07F04_PhotoArbo_20181227_163247.png",
          children: [
            {
              name: "MaÃ¯s, asperges, palmiersâ¦",
              id: "R07F04SF04",
              slug: "mais-asperges-palmiers",
              link:
                "/r/epicerie-salee/conserves-et-bocaux/mais-asperges-palmiers"
            },
            {
              name: "MacÃ©doines, ratatouille et autres mÃ©langes de lÃ©gumes",
              id: "R07F04SF05",
              slug: "macedoines-ratatouille-et-autres-melanges-de-legumes",
              link:
                "/r/epicerie-salee/conserves-et-bocaux/macedoines-ratatouille-et-autres-melanges-de-legumes"
            },
            {
              name: "Champignons et tomates",
              id: "R07F04SF06",
              slug: "champignons-et-tomates",
              link:
                "/r/epicerie-salee/conserves-et-bocaux/champignons-et-tomates"
            },
            {
              name: "LÃ©gumes verts",
              id: "R07F04SF07",
              slug: "legumes-verts",
              link: "/r/epicerie-salee/conserves-et-bocaux/legumes-verts"
            },
            {
              name: "Lentilles et lÃ©gumes secs",
              id: "R07F04SF08",
              slug: "lentilles-et-legumes-secs",
              link:
                "/r/epicerie-salee/conserves-et-bocaux/lentilles-et-legumes-secs"
            },
            {
              name: "Autres lÃ©gumes",
              id: "R07F04SF09",
              slug: "autres-legumes",
              link: "/r/epicerie-salee/conserves-et-bocaux/autres-legumes"
            },
            {
              name: "Thon",
              id: "R07F04SF10",
              slug: "thon",
              link: "/r/epicerie-salee/conserves-et-bocaux/thon"
            },
            {
              name: "Sardines et maquereaux",
              id: "R07F04SF11",
              slug: "sardines-et-maquereaux",
              link:
                "/r/epicerie-salee/conserves-et-bocaux/sardines-et-maquereaux"
            },
            {
              name: "Salades, rillettes et autres poissons",
              id: "R07F04SF12",
              slug: "salades-rillettes-et-autres-poissons",
              link:
                "/r/epicerie-salee/conserves-et-bocaux/salades-rillettes-et-autres-poissons"
            },
            {
              name: "PÃ¢tÃ©s et foies gras",
              id: "R07F04SF03",
              slug: "pates-et-foies-gras",
              link: "/r/epicerie-salee/conserves-et-bocaux/pates-et-foies-gras"
            }
          ]
        },
        {
          id: "R07F05",
          name: "PÃ¢tes, riz, fÃ©culents",
          link: "/r/epicerie-salee/pates-riz-feculents",
          visual:
            "/media/195x195/PhotositeArbo/R07F05_PhotoArbo_20190228_113854.png",
          children: [
            {
              name: "PÃ¢tes",
              id: "R07F05SF06",
              slug: "pates",
              children: [
                {
                  name: "PÃ¢tes longues: spaghettis, tagliatelles, etc.",
                  id: "R07F05SF06SS01",
                  slug: "pates-longues-spaghettis-tagliatelles-etc",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/pates/pates-longues-spaghettis-tagliatelles-etc",
                    target: "_self"
                  }
                },
                {
                  name: "PÃ¢tes courtes: coquillettes, tortis, etc.",
                  id: "R07F05SF06SS02",
                  slug: "pates-courtes-coquillettes-tortis-etc",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/pates/pates-courtes-coquillettes-tortis-etc",
                    target: "_self"
                  }
                },
                {
                  name: "Lasagnes, Crozets et autres pÃ¢tes",
                  id: "R07F05SF06SS03",
                  slug: "lasagnes-crozets-et-autres-pates",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/pates/lasagnes-crozets-et-autres-pates",
                    target: "_self"
                  }
                },
                {
                  name: "PÃ¢tes cuisson rapide",
                  id: "R07F05SF06SS04",
                  slug: "pates-cuisson-rapide",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/pates/pates-cuisson-rapide",
                    target: "_self"
                  }
                },
                {
                  name: "PÃ¢tes spÃ©ciales",
                  id: "R07F05SF06SS05",
                  slug: "pates-speciales",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/pates/pates-speciales",
                    target: "_self"
                  }
                }
              ],
              link: "/r/epicerie-salee/pates-riz-feculents/pates"
            },
            {
              name: "Riz",
              id: "R07F05SF07",
              slug: "riz",
              children: [
                {
                  name: "Blanc et riz complet",
                  id: "R07F05SF07SS01",
                  slug: "blanc-et-riz-complet",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/riz/blanc-et-riz-complet",
                    target: "_self"
                  }
                },
                {
                  name: "Basmati et Thai",
                  id: "R07F05SF07SS02",
                  slug: "basmati-et-thai",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/riz/basmati-et-thai",
                    target: "_self"
                  }
                },
                {
                  name: "Risotto et Ã  poÃªler",
                  id: "R07F05SF07SS03",
                  slug: "risotto-et-a-poeler",

                  link: {
                    uri:
                      "/r/epicerie-salee/pates-riz-feculents/riz/risotto-et-a-poeler",
                    target: "_self"
                  }
                }
              ],
              link: "/r/epicerie-salee/pates-riz-feculents/riz"
            },
            {
              name: "Sachet express et nouilles instantanÃ©es",
              id: "R07F05SF08",
              slug: "sachet-express-et-nouilles-instantanees",
              link:
                "/r/epicerie-salee/pates-riz-feculents/sachet-express-et-nouilles-instantanees"
            },
            {
              name: "PurÃ©es et polenta",
              id: "R07F05SF09",
              slug: "purees-et-polenta",
              link: "/r/epicerie-salee/pates-riz-feculents/purees-et-polenta"
            },
            {
              name: "BlÃ©, Semoule et LÃ©gumes secs",
              id: "R07F05SF10",
              slug: "ble-semoule-et-legumes-secs",
              link:
                "/r/epicerie-salee/pates-riz-feculents/ble-semoule-et-legumes-secs"
            }
          ]
        },
        {
          id: "R07F07",
          name: "Huiles, vinaigres et vinaigrettes",
          link: "/r/epicerie-salee/huiles-vinaigres-et-vinaigrettes",
          visual:
            "/media/195x195/PhotositeArbo/R07F07_PhotoArbo_20190510_164401.png",
          children: [
            {
              name: "Huiles",
              id: "R07F07SF02",
              slug: "huiles",
              link: "/r/epicerie-salee/huiles-vinaigres-et-vinaigrettes/huiles"
            },
            {
              name: "Huiles d'olive",
              id: "R07F07SF01",
              slug: "huiles-d-olive",
              link:
                "/r/epicerie-salee/huiles-vinaigres-et-vinaigrettes/huiles-d-olive"
            },
            {
              name: "Vinaigres",
              id: "R07F07SF03",
              slug: "vinaigres",
              link:
                "/r/epicerie-salee/huiles-vinaigres-et-vinaigrettes/vinaigres"
            },
            {
              name: "Vinaigrettes, sauces salades et jus de citron",
              id: "R07F07SF04",
              slug: "vinaigrettes-sauces-salades-et-jus-de-citron",
              link:
                "/r/epicerie-salee/huiles-vinaigres-et-vinaigrettes/vinaigrettes-sauces-salades-et-jus-de-citron"
            }
          ]
        },
        {
          id: "R07F08",
          name: "Sel, Ã©pices et bouillons",
          link: "/r/epicerie-salee/sel-epices-et-bouillons",
          visual:
            "/media/195x195/PhotositeArbo/R07F08_PhotoArbo_20181227_163732.png",
          children: [
            {
              name: "Sel et poivre",
              id: "R07F08SF01",
              slug: "sel-et-poivre",
              link: "/r/epicerie-salee/sel-epices-et-bouillons/sel-et-poivre"
            },
            {
              name: "Epices et Herbes",
              id: "R07F08SF02",
              slug: "epices-et-herbes",
              link: "/r/epicerie-salee/sel-epices-et-bouillons/epices-et-herbes"
            },
            {
              name: "Bouillons et fonds de sauce",
              id: "R07F08SF03",
              slug: "bouillons-et-fonds-de-sauce",
              link:
                "/r/epicerie-salee/sel-epices-et-bouillons/bouillons-et-fonds-de-sauce"
            },
            {
              name: "FÃ©cule, chapelure aide culinaire",
              id: "R07F08SF04",
              slug: "fecule-chapelure-aide-culinaire",
              link:
                "/r/epicerie-salee/sel-epices-et-bouillons/fecule-chapelure-aide-culinaire"
            }
          ]
        },
        {
          id: "R07F10",
          name: "Produits du Monde",
          link: "/r/epicerie-salee/produits-du-monde",
          visual:
            "/media/195x195/PhotositeArbo/R07F10_PhotoArbo_20181227_163641.png",
          children: [
            {
              name: "MÃ©diterranÃ©e",
              id: "R07F10SF01",
              slug: "mediterranee",
              link: "/r/epicerie-salee/produits-du-monde/mediterranee"
            },
            {
              name: "Tex-Mex et USA",
              id: "R07F10SF02",
              slug: "tex-mex-et-usa",
              link: "/r/epicerie-salee/produits-du-monde/tex-mex-et-usa"
            },
            {
              name: "Asie",
              id: "R07F10SF03",
              slug: "asie",
              link: "/r/epicerie-salee/produits-du-monde/asie"
            },
            {
              name: "Halal ",
              id: "R07F10SF04",
              slug: "halal",
              link: "/r/epicerie-salee/produits-du-monde/halal"
            }
          ]
        }
      ]
    },
    {
      id: "R08",
      name: "Epicerie SucrÃ©e",

      type: "food",
      link: "/r/epicerie-sucree",
      icon: "/images/icons/main-navigation/R08.svg",
      children: [
        {
          id: "R08F02",
          name: "Boissons chaudes",
          link: "/r/epicerie-sucree/boissons-chaudes",
          visual:
            "/media/195x195/PhotositeArbo/R08F02_PhotoArbo_20181227_163008.png",
          children: [
            {
              name: "Dosettes et Capsules",
              id: "R08F02SF02",
              slug: "dosettes-et-capsules",
              children: [
                {
                  name: "Compatible Nespresso",
                  id: "R08F02SF02SSF01",
                  slug: "compatible-nespresso",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/dosettes-et-capsules/compatible-nespresso",
                    target: "_self"
                  }
                },
                {
                  name: "Compatible Senseo",
                  id: "R08F02SF02SSF02",
                  slug: "compatible-senseo",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/dosettes-et-capsules/compatible-senseo",
                    target: "_self"
                  }
                },
                {
                  name: "Compatible Tassimo",
                  id: "R08F02SF02SSF03",
                  slug: "compatible-tassimo",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/dosettes-et-capsules/compatible-tassimo",
                    target: "_self"
                  }
                },
                {
                  name: "Compatible Dolce Gusto",
                  id: "R08F02SF02SSF04",
                  slug: "compatible-dolce-gusto",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/dosettes-et-capsules/compatible-dolce-gusto",
                    target: "_self"
                  }
                },
                {
                  name: "Compatible Malongo",
                  id: "R08F02SF02SSF05",
                  slug: "compatible-malongo",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/dosettes-et-capsules/compatible-malongo",
                    target: "_self"
                  }
                },
                {
                  name: "Compatible Lavazza",
                  id: "R08F02SF02SSF06",
                  slug: "compatible-lavazza",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/dosettes-et-capsules/compatible-lavazza",
                    target: "_self"
                  }
                }
              ],
              link: "/r/epicerie-sucree/boissons-chaudes/dosettes-et-capsules"
            },
            {
              name: "CafÃ©s moulus et en grains",
              id: "R08F02SF01",
              slug: "cafes-moulus-et-en-grains",
              link:
                "/r/epicerie-sucree/boissons-chaudes/cafes-moulus-et-en-grains"
            },
            {
              name: "CafÃ©s solubles et Capuccinos",
              id: "R08F02SF03",
              slug: "cafes-solubles-et-capuccinos",
              link:
                "/r/epicerie-sucree/boissons-chaudes/cafes-solubles-et-capuccinos"
            },
            {
              name: "Filtres et dÃ©tartrants",
              id: "R08F02SF04",
              slug: "filtres-et-detartrants",
              link: "/r/epicerie-sucree/boissons-chaudes/filtres-et-detartrants"
            },
            {
              name: "ThÃ©s",
              id: "R08F02SF05",
              slug: "thes",
              children: [
                {
                  name: "ThÃ©s parfumÃ©s",
                  id: "R08F02SF05SS04",
                  slug: "thes-parfumes",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/thes/thes-parfumes",
                    target: "_self"
                  }
                },
                {
                  name: "ThÃ©s natures et Earl Grey",
                  id: "R08F02SF05SS05",
                  slug: "thes-natures-et-earl-grey",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/thes/thes-natures-et-earl-grey",
                    target: "_self"
                  }
                },
                {
                  name: "ThÃ©s vrac",
                  id: "R08F02SF05SS03",
                  slug: "thes-vrac",

                  link: {
                    uri: "/r/epicerie-sucree/boissons-chaudes/thes/thes-vrac",
                    target: "_self"
                  }
                }
              ],
              link: "/r/epicerie-sucree/boissons-chaudes/thes"
            },
            {
              name: "Infusions",
              id: "R08F02SF06",
              slug: "infusions",
              children: [
                {
                  name: "Infusions parfumÃ©es",
                  id: "R08F02SF06SS01",
                  slug: "infusions-parfumees",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/infusions/infusions-parfumees",
                    target: "_self"
                  }
                },
                {
                  name: "Infusions dÃ©tox et bien-Ãªtre",
                  id: "R08F02SF06SS02",
                  slug: "infusions-detox-et-bien-etre",

                  link: {
                    uri:
                      "/r/epicerie-sucree/boissons-chaudes/infusions/infusions-detox-et-bien-etre",
                    target: "_self"
                  }
                }
              ],
              link: "/r/epicerie-sucree/boissons-chaudes/infusions"
            },
            {
              name: "Chocolats en poudre",
              id: "R08F02SF07",
              slug: "chocolats-en-poudre",
              link: "/r/epicerie-sucree/boissons-chaudes/chocolats-en-poudre"
            }
          ]
        },
        {
          id: "R08F01",
          name: "Petit dÃ©jeuner",
          link: "/r/epicerie-sucree/petit-dejeuner",
          visual:
            "/media/195x195/PhotositeArbo/R08F01_PhotoArbo_20181227_163613.png",
          children: [
            {
              name: "CÃ©rÃ©ales Enfants",
              id: "R08F01SF01",
              slug: "cereales-enfants",
              link: "/r/epicerie-sucree/petit-dejeuner/cereales-enfants"
            },
            {
              name: "CÃ©rÃ©ales Adultes",
              id: "R08F01SF02",
              slug: "cereales-adultes",
              link: "/r/epicerie-sucree/petit-dejeuner/cereales-adultes"
            },
            {
              name: "Mueslis et avoines",
              id: "R08F01SF10",
              slug: "mueslis-et-avoines",
              link: "/r/epicerie-sucree/petit-dejeuner/mueslis-et-avoines"
            },
            {
              name: "Barres cÃ©rÃ©ales",
              id: "R08F01SF03",
              slug: "barres-cereales",
              link: "/r/epicerie-sucree/petit-dejeuner/barres-cereales"
            },
            {
              name: "Biscuits petit-dÃ©jeuner",
              id: "R08F01SF04",
              slug: "biscuits-petit-dejeuner",
              link: "/r/epicerie-sucree/petit-dejeuner/biscuits-petit-dejeuner"
            },
            {
              name: "Biscottes, pains grillÃ©s et galettes",
              id: "R08F01SF06",
              slug: "biscottes-pains-grilles-et-galettes",
              link:
                "/r/epicerie-sucree/petit-dejeuner/biscottes-pains-grilles-et-galettes"
            },
            {
              name: "Pain de mie",
              id: "R08F01SF07",
              slug: "pain-de-mie",
              link: "/r/epicerie-sucree/petit-dejeuner/pain-de-mie"
            },
            {
              name: "Brioches et viennoiseries",
              id: "R08F01SF11",
              slug: "brioches-et-viennoiseries",
              children: [
                {
                  name: "Brioches et pains au lait",
                  id: "R08F01SF11SS01",
                  slug: "brioches-et-pains-au-lait",

                  link: {
                    uri:
                      "/r/epicerie-sucree/petit-dejeuner/brioches-et-viennoiseries/brioches-et-pains-au-lait",
                    target: "_self"
                  }
                },
                {
                  name: "Viennoiseries",
                  id: "R08F01SF11SS02",
                  slug: "viennoiseries",

                  link: {
                    uri:
                      "/r/epicerie-sucree/petit-dejeuner/brioches-et-viennoiseries/viennoiseries",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/epicerie-sucree/petit-dejeuner/brioches-et-viennoiseries"
            },
            {
              name: "Confitures",
              id: "R08F01SF08",
              slug: "confitures",
              children: [
                {
                  name: "Fruits rouges",
                  id: "R08F01SF08SSF01",
                  slug: "fruits-rouges",

                  link: {
                    uri:
                      "/r/epicerie-sucree/petit-dejeuner/confitures/fruits-rouges",
                    target: "_self"
                  }
                },
                {
                  name: "Fruits jaunes",
                  id: "R08F01SF08SSF02",
                  slug: "fruits-jaunes",

                  link: {
                    uri:
                      "/r/epicerie-sucree/petit-dejeuner/confitures/fruits-jaunes",
                    target: "_self"
                  }
                }
              ],
              link: "/r/epicerie-sucree/petit-dejeuner/confitures"
            },
            {
              name: "PÃ¢tes Ã  tartiner et Miels",
              id: "R08F01SF09",
              slug: "pates-a-tartiner-et-miels",
              children: [
                {
                  name: "PÃ¢tes Ã  tartiner et crÃ¨mes",
                  id: "R08F01SF09SSF01",
                  slug: "pates-a-tartiner-et-cremes",

                  link: {
                    uri:
                      "/r/epicerie-sucree/petit-dejeuner/pates-a-tartiner-et-miels/pates-a-tartiner-et-cremes",
                    target: "_self"
                  }
                },
                {
                  name: "Miels",
                  id: "R08F01SF09SSF02",
                  slug: "miels",

                  link: {
                    uri:
                      "/r/epicerie-sucree/petit-dejeuner/pates-a-tartiner-et-miels/miels",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/epicerie-sucree/petit-dejeuner/pates-a-tartiner-et-miels"
            }
          ]
        },
        {
          id: "R08F03",
          name: "Biscuits et GÃ¢teaux",
          link: "/r/epicerie-sucree/biscuits-et-gateaux",
          visual:
            "/media/195x195/PhotositeArbo/R08F03_PhotoArbo_20181227_162933.png",
          children: [
            {
              name: "Biscuits au chocolat ou Ã  la vanille",
              id: "R08F03SF01",
              slug: "biscuits-au-chocolat-ou-a-la-vanille",
              link:
                "/r/epicerie-sucree/biscuits-et-gateaux/biscuits-au-chocolat-ou-a-la-vanille"
            },
            {
              name: "Biscuits aux fruits",
              id: "R08F03SF03",
              slug: "biscuits-aux-fruits",
              link: "/r/epicerie-sucree/biscuits-et-gateaux/biscuits-aux-fruits"
            },
            {
              name: "Biscuits petit-dÃ©jeuner",
              id: "R08F03SF04",
              slug: "biscuits-petit-dejeuner",
              link:
                "/r/epicerie-sucree/biscuits-et-gateaux/biscuits-petit-dejeuner"
            },
            {
              name: "Cookies ",
              id: "R08F03SF05",
              slug: "cookies",
              link: "/r/epicerie-sucree/biscuits-et-gateaux/cookies"
            },
            {
              name: "Petits beurres et biscuits secs",
              id: "R08F03SF06",
              slug: "petits-beurres-et-biscuits-secs",
              link:
                "/r/epicerie-sucree/biscuits-et-gateaux/petits-beurres-et-biscuits-secs"
            },
            {
              name: "Assortiment de biscuits et mignardises",
              id: "R08F03SF07",
              slug: "assortiment-de-biscuits-et-mignardises",
              link:
                "/r/epicerie-sucree/biscuits-et-gateaux/assortiment-de-biscuits-et-mignardises"
            },
            {
              name: "Barres de cÃ©rÃ©ales et chocolatÃ©es",
              id: "R08F03SF08",
              slug: "barres-de-cereales-et-chocolatees",
              children: [
                {
                  name: "Barres de cÃ©rÃ©ales",
                  id: "R08F03SF08SS01",
                  slug: "barres-de-cereales",

                  link: {
                    uri:
                      "/r/epicerie-sucree/biscuits-et-gateaux/barres-de-cereales-et-chocolatees/barres-de-cereales",
                    target: "_self"
                  }
                },
                {
                  name: "Barres chocolatÃ©es",
                  id: "R08F03SF08SS02",
                  slug: "barres-chocolatees",

                  link: {
                    uri:
                      "/r/epicerie-sucree/biscuits-et-gateaux/barres-de-cereales-et-chocolatees/barres-chocolatees",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/epicerie-sucree/biscuits-et-gateaux/barres-de-cereales-et-chocolatees"
            },
            {
              name: "Madeleines",
              id: "R08F03SF09",
              slug: "madeleines",
              link: "/r/epicerie-sucree/biscuits-et-gateaux/madeleines"
            },
            {
              name: "Quatre quarts et pains d'Ã©pices",
              id: "R08F03SF14",
              slug: "quatre-quarts-et-pains-d-epices",
              link:
                "/r/epicerie-sucree/biscuits-et-gateaux/quatre-quarts-et-pains-d-epices"
            },
            {
              name: "MarbrÃ© et brownies ",
              id: "R08F03SF15",
              slug: "marbre-et-brownies",
              link: "/r/epicerie-sucree/biscuits-et-gateaux/marbre-et-brownies"
            },
            {
              name: "CrÃªpes et gaufres",
              id: "R08F03SF10",
              slug: "crepes-et-gaufres",
              link: "/r/epicerie-sucree/biscuits-et-gateaux/crepes-et-gaufres"
            },
            {
              name: "GoÃ»ters pockets",
              id: "R08F03SF13",
              slug: "gouters-pockets",
              link: "/r/epicerie-sucree/biscuits-et-gateaux/gouters-pockets"
            },
            {
              name: "Biscuits Bio et DiÃ©tÃ©tiques",
              id: "R08F03SF12",
              slug: "biscuits-bio-et-dietetiques",
              link:
                "/r/epicerie-sucree/biscuits-et-gateaux/biscuits-bio-et-dietetiques"
            }
          ]
        },
        {
          id: "R08F04",
          name: "Chocolats et bonbons",
          link: "/r/epicerie-sucree/chocolats-et-bonbons",
          visual:
            "/media/195x195/PhotositeArbo/R08F04_PhotoArbo_20190220_160156.png",
          children: [
            {
              name: "Tablettes de chocolat",
              id: "R08F04SF10",
              slug: "tablettes-de-chocolat",
              children: [
                {
                  name: "Tablettes chocolat au lait et blanc",
                  id: "R08F04SF10SS01",
                  slug: "tablettes-chocolat-au-lait-et-blanc",

                  link: {
                    uri:
                      "/r/epicerie-sucree/chocolats-et-bonbons/tablettes-de-chocolat/tablettes-chocolat-au-lait-et-blanc",
                    target: "_self"
                  }
                },
                {
                  name: "Tablettes chocolat noir",
                  id: "R08F04SF10SS02",
                  slug: "tablettes-chocolat-noir",

                  link: {
                    uri:
                      "/r/epicerie-sucree/chocolats-et-bonbons/tablettes-de-chocolat/tablettes-chocolat-noir",
                    target: "_self"
                  }
                },
                {
                  name: "Tablettes chocolat patissier",
                  id: "R08F04SF10SS03",
                  slug: "tablettes-chocolat-patissier",

                  link: {
                    uri:
                      "/r/epicerie-sucree/chocolats-et-bonbons/tablettes-de-chocolat/tablettes-chocolat-patissier",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/epicerie-sucree/chocolats-et-bonbons/tablettes-de-chocolat"
            },
            {
              name: "Confiseries chocolatÃ©es",
              id: "R08F04SF04",
              slug: "confiseries-chocolatees",
              children: [
                {
                  name: "Barres chocolatÃ©es",
                  id: "R08F04SF04SSF02",
                  slug: "barres-chocolatees",

                  link: {
                    uri:
                      "/r/epicerie-sucree/chocolats-et-bonbons/confiseries-chocolatees/barres-chocolatees",
                    target: "_self"
                  }
                },
                {
                  name: "Billes et bonbons au chocolat",
                  id: "R08F04SF04SSF01",
                  slug: "billes-et-bonbons-au-chocolat",

                  link: {
                    uri:
                      "/r/epicerie-sucree/chocolats-et-bonbons/confiseries-chocolatees/billes-et-bonbons-au-chocolat",
                    target: "_self"
                  }
                },
                {
                  name: "Rochers et boites de chocolats",
                  id: "R08F04SF04SSF03",
                  slug: "rochers-et-boites-de-chocolats",

                  link: {
                    uri:
                      "/r/epicerie-sucree/chocolats-et-bonbons/confiseries-chocolatees/rochers-et-boites-de-chocolats",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/epicerie-sucree/chocolats-et-bonbons/confiseries-chocolatees"
            },
            {
              name: "Bonbons",
              id: "R08F04SF05",
              slug: "bonbons",
              link: "/r/epicerie-sucree/chocolats-et-bonbons/bonbons"
            },
            {
              name: "Confiseries de poche",
              id: "R08F04SF06",
              slug: "confiseries-de-poche",
              link:
                "/r/epicerie-sucree/chocolats-et-bonbons/confiseries-de-poche"
            },
            {
              name: "Chewings gums",
              id: "R08F04SF07",
              slug: "chewings-gums",
              link: "/r/epicerie-sucree/chocolats-et-bonbons/chewings-gums"
            },
            {
              name: "Autres confiseries",
              id: "R08F04SF08",
              slug: "autres-confiseries",
              link: "/r/epicerie-sucree/chocolats-et-bonbons/autres-confiseries"
            }
          ]
        },
        {
          id: "R08F05",
          name: "Compotes, fruits au sirop et crÃ¨mes desserts",
          link:
            "/r/epicerie-sucree/compotes-fruits-au-sirop-et-cremes-desserts",
          visual:
            "/media/195x195/PhotositeArbo/R08F05_PhotoArbo_20181227_163223.png",
          children: [
            {
              name: "Compotes",
              id: "R08F05SF01",
              slug: "compotes",
              link:
                "/r/epicerie-sucree/compotes-fruits-au-sirop-et-cremes-desserts/compotes"
            },
            {
              name: "Fruits au sirop",
              id: "R08F05SF02",
              slug: "fruits-au-sirop",
              link:
                "/r/epicerie-sucree/compotes-fruits-au-sirop-et-cremes-desserts/fruits-au-sirop"
            },
            {
              name: "CrÃ¨mes dessert",
              id: "R08F05SF03",
              slug: "cremes-dessert",
              link:
                "/r/epicerie-sucree/compotes-fruits-au-sirop-et-cremes-desserts/cremes-dessert"
            }
          ]
        },
        {
          id: "R08F06",
          name: "Sucres, farines, coulis et prÃ©paration gÃ¢teaux",
          link:
            "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux",
          visual:
            "/media/195x195/PhotositeArbo/R08F06_PhotoArbo_20181227_163819.png",
          children: [
            {
              name: "Sucres et Ã©dulcorants",
              id: "R08F06SF01",
              slug: "sucres-et-edulcorants",
              link:
                "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/sucres-et-edulcorants"
            },
            {
              name: "Farines",
              id: "R08F06SF02",
              slug: "farines",
              link:
                "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/farines"
            },
            {
              name: "PrÃ©paration pour gÃ¢teaux et flans",
              id: "R08F06SF03",
              slug: "preparation-pour-gateaux-et-flans",
              link:
                "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/preparation-pour-gateaux-et-flans"
            },
            {
              name: "Aide Ã  la pÃ¢tisserie",
              id: "R08F06SF04",
              slug: "aide-a-la-patisserie",
              children: [
                {
                  name: "DÃ©corations patissiÃ¨res, nappage ",
                  id: "R08F06SF04SS01",
                  slug: "decorations-patissieres-nappage",

                  link: {
                    uri:
                      "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/aide-a-la-patisserie/decorations-patissieres-nappage",
                    target: "_self"
                  }
                },
                {
                  name: "ArÃ´mes, fruits secs et confits",
                  id: "R08F06SF04SS02",
                  slug: "aromes-fruits-secs-et-confits",

                  link: {
                    uri:
                      "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/aide-a-la-patisserie/aromes-fruits-secs-et-confits",
                    target: "_self"
                  }
                },
                {
                  name: "Sucres vanillÃ©s, levures et gÃ©lifiants",
                  id: "R08F06SF04SS03",
                  slug: "sucres-vanilles-levures-et-gelifiants",

                  link: {
                    uri:
                      "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/aide-a-la-patisserie/sucres-vanilles-levures-et-gelifiants",
                    target: "_self"
                  }
                },
                {
                  name: "Laits en poudre et concentrÃ©s",
                  id: "R08F06SF04SS04",
                  slug: "laits-en-poudre-et-concentres",

                  link: {
                    uri:
                      "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/aide-a-la-patisserie/laits-en-poudre-et-concentres",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/epicerie-sucree/sucres-farines-coulis-et-preparation-gateaux/aide-a-la-patisserie"
            }
          ]
        },
        {
          id: "R08F07",
          name: "DiÃ©tÃ©tique",
          link: "/r/epicerie-sucree/dietetique",
          visual:
            "/media/195x195/PhotositeArbo/R08F07_PhotoArbo_20190228_114118.png",
          children: [
            {
              name: "Sans Gluten",
              id: "R08F07SF02",
              slug: "sans-gluten",
              link: "/r/epicerie-sucree/dietetique/sans-gluten"
            },
            {
              name: "Biscuits, galettes et cÃ©rÃ©ales",
              id: "R08F07SF05",
              slug: "biscuits-galettes-et-cereales",
              link:
                "/r/epicerie-sucree/dietetique/biscuits-galettes-et-cereales"
            },
            {
              name: "Boissons",
              id: "R08F07SF06",
              slug: "boissons",
              link: "/r/epicerie-sucree/dietetique/boissons"
            },
            {
              name: "ThÃ©s et infusions",
              id: "R08F07SF07",
              slug: "thes-et-infusions",
              link: "/r/epicerie-sucree/dietetique/thes-et-infusions"
            },
            {
              name: "Edulcorants",
              id: "R08F07SF08",
              slug: "edulcorants",
              link: "/r/epicerie-sucree/dietetique/edulcorants"
            },
            {
              name: "Repas minceur et barres",
              id: "R08F07SF03",
              slug: "repas-minceur-et-barres",
              link: "/r/epicerie-sucree/dietetique/repas-minceur-et-barres"
            },
            {
              name: "ComplÃ©ments alimentaires",
              id: "R08F07SF04",
              slug: "complements-alimentaires",
              link: "/r/epicerie-sucree/dietetique/complements-alimentaires"
            }
          ]
        },
        {
          id: "R08F08",
          name: "Chocolats et biscuits de PÃ¢ques",
          link: "/r/epicerie-sucree/chocolats-et-biscuits-de-paques",
          visual:
            "/media/195x195/PhotositeArbo/R08F08_PhotoArbo_20180306_101341.png",
          children: [
            {
              name: "Pour les adultes",
              id: "R08F08SF08",
              slug: "pour-les-adultes",
              link:
                "/r/epicerie-sucree/chocolats-et-biscuits-de-paques/pour-les-adultes"
            }
          ]
        }
      ]
    },
    {
      id: "R09",
      name: "Boissons et Cave Ã  vins",

      type: "food",
      link: "/r/boissons-et-cave-a-vins",
      icon: "/images/icons/main-navigation/R09.svg",
      children: [
        {
          id: "R09F01",
          name: "Eaux",
          link: "/r/boissons-et-cave-a-vins/eaux",
          visual:
            "/media/195x195/PhotositeArbo/R09F01_PhotoArbo_20170717_113940.png",
          children: [
            {
              name: "Eaux plates",
              id: "R09F01SF01",
              slug: "eaux-plates",
              link: "/r/boissons-et-cave-a-vins/eaux/eaux-plates"
            },
            {
              name: "Eaux gazeuses",
              id: "R09F01SF02",
              slug: "eaux-gazeuses",
              link: "/r/boissons-et-cave-a-vins/eaux/eaux-gazeuses"
            },
            {
              name: "Eaux arÃ´matisÃ©es",
              id: "R09F01SF03",
              slug: "eaux-aromatisees",
              children: [
                {
                  name: "Eaux arÃ´matisÃ©es plates",
                  id: "R09F01SF03SS01",
                  slug: "eaux-aromatisees-plates",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/eaux/eaux-aromatisees/eaux-aromatisees-plates",
                    target: "_self"
                  }
                },
                {
                  name: "Eaux arÃ´matisÃ©es gazeuses",
                  id: "R09F01SF03SS02",
                  slug: "eaux-aromatisees-gazeuses",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/eaux/eaux-aromatisees/eaux-aromatisees-gazeuses",
                    target: "_self"
                  }
                }
              ],
              link: "/r/boissons-et-cave-a-vins/eaux/eaux-aromatisees"
            }
          ]
        },
        {
          id: "R09F10",
          name: "Lait, boissons lactÃ©es et vÃ©gÃ©tales",
          link: "/r/boissons-et-cave-a-vins/lait-boissons-lactees-et-vegetales",
          visual:
            "/media/195x195/PhotositeArbo/R09F10_PhotoArbo_20170717_114030.png",
          children: [
            {
              name: "Laits Demi Ã©crÃ©mÃ©",
              id: "R09F10SF01",
              slug: "laits-demi-ecreme",
              link:
                "/r/boissons-et-cave-a-vins/lait-boissons-lactees-et-vegetales/laits-demi-ecreme"
            },
            {
              name: "Laits Ã©crÃ©mÃ©s",
              id: "R09F10SF02",
              slug: "laits-ecremes",
              link:
                "/r/boissons-et-cave-a-vins/lait-boissons-lactees-et-vegetales/laits-ecremes"
            },
            {
              name: "Laits entiers",
              id: "R09F10SF03",
              slug: "laits-entiers",
              link:
                "/r/boissons-et-cave-a-vins/lait-boissons-lactees-et-vegetales/laits-entiers"
            },
            {
              name: "Laits aromatisÃ©s",
              id: "R09F10SF04",
              slug: "laits-aromatises",
              link:
                "/r/boissons-et-cave-a-vins/lait-boissons-lactees-et-vegetales/laits-aromatises"
            },
            {
              name: "Laits frais et laits de chÃ¨vre",
              id: "R09F10SF05",
              slug: "laits-frais-et-laits-de-chevre",
              link:
                "/r/boissons-et-cave-a-vins/lait-boissons-lactees-et-vegetales/laits-frais-et-laits-de-chevre"
            },
            {
              name: "Les boissons vÃ©gÃ©tales",
              id: "R09F10SF07",
              slug: "les-boissons-vegetales",
              link:
                "/r/boissons-et-cave-a-vins/lait-boissons-lactees-et-vegetales/les-boissons-vegetales"
            }
          ]
        },
        {
          id: "R09F02",
          name: "Jus de fruits et de lÃ©gumes",
          link: "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes",
          visual:
            "/media/195x195/PhotositeArbo/R09F02_PhotoArbo_20190415_142636.png",
          children: [
            {
              name: "Jus de fruits frais et smoothies",
              id: "R09F02SF08",
              slug: "jus-de-fruits-frais-et-smoothies",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-de-fruits-frais-et-smoothies"
            },
            {
              name: "Jus d'orange",
              id: "R09F02SF01",
              slug: "jus-d-orange",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-d-orange"
            },
            {
              name: "Jus multivitaminÃ©s et bien-Ãªtre",
              id: "R09F02SF10",
              slug: "jus-multivitamines-et-bien-etre",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-multivitamines-et-bien-etre"
            },
            {
              name: "Jus exotiques et cocktails",
              id: "R09F02SF04",
              slug: "jus-exotiques-et-cocktails",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-exotiques-et-cocktails"
            },
            {
              name: "Jus multifruits",
              id: "R09F02SF02",
              slug: "jus-multifruits",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-multifruits"
            },
            {
              name: "Formats pockets",
              id: "R09F02SF05",
              slug: "formats-pockets",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/formats-pockets"
            },
            {
              name: "Jus de pommes et raisins",
              id: "R09F02SF03",
              slug: "jus-de-pommes-et-raisins",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-de-pommes-et-raisins"
            },
            {
              name: "Jus d'agrumes et du matin",
              id: "R09F02SF09",
              slug: "jus-d-agrumes-et-du-matin",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-d-agrumes-et-du-matin"
            },
            {
              name: "Autres jus de fruits",
              id: "R09F02SF11",
              slug: "autres-jus-de-fruits",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/autres-jus-de-fruits"
            },
            {
              name: "Jus de lÃ©gumes et gaspachos",
              id: "R09F02SF06",
              slug: "jus-de-legumes-et-gaspachos",
              link:
                "/r/boissons-et-cave-a-vins/jus-de-fruits-et-de-legumes/jus-de-legumes-et-gaspachos"
            }
          ]
        },
        {
          id: "R09F03",
          name: "Colas, thÃ©s glacÃ©s et soft drinks",
          link: "/r/boissons-et-cave-a-vins/colas-thes-glaces-et-soft-drinks",
          visual:
            "/media/195x195/PhotositeArbo/R09F03_PhotoArbo_20190228_113348.png",
          children: [
            {
              name: "Colas",
              id: "R09F03SF01",
              slug: "colas",
              link:
                "/r/boissons-et-cave-a-vins/colas-thes-glaces-et-soft-drinks/colas"
            },
            {
              name: "Boissons aux fruits gazeuses",
              id: "R09F03SF02",
              slug: "boissons-aux-fruits-gazeuses",
              link:
                "/r/boissons-et-cave-a-vins/colas-thes-glaces-et-soft-drinks/boissons-aux-fruits-gazeuses"
            },
            {
              name: "Limonades et limes",
              id: "R09F03SF03",
              slug: "limonades-et-limes",
              link:
                "/r/boissons-et-cave-a-vins/colas-thes-glaces-et-soft-drinks/limonades-et-limes"
            },
            {
              name: "Boissons sport & Ã©nergisantes",
              id: "R09F03SF04",
              slug: "boissons-sport-energisantes",
              link:
                "/r/boissons-et-cave-a-vins/colas-thes-glaces-et-soft-drinks/boissons-sport-energisantes"
            }
          ]
        },
        {
          id: "R09F06",
          name: "Cave Ã  vins",
          link: "/r/boissons-et-cave-a-vins/cave-a-vins",
          visual:
            "/media/195x195/PhotositeArbo/R09F06_PhotoArbo_20170717_114440.png",
          children: [
            {
              name: "Vins Rouges",
              id: "R09F06SF01",
              slug: "vins-rouges",
              children: [
                {
                  name: "Bordeaux et Sud Ouest",
                  id: "R09F06SF01SSF01",
                  slug: "bordeaux-et-sud-ouest",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-rouges/bordeaux-et-sud-ouest",
                    target: "_self"
                  }
                },
                {
                  name: "VallÃ©e du RhÃ´ne",
                  id: "R09F06SF01SSF02",
                  slug: "vallee-du-rhone",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-rouges/vallee-du-rhone",
                    target: "_self"
                  }
                },
                {
                  name: "Bourgogne et Beaujolais",
                  id: "R09F06SF01SSF03",
                  slug: "bourgogne-et-beaujolais",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-rouges/bourgogne-et-beaujolais",
                    target: "_self"
                  }
                },
                {
                  name: "Languedoc, Provence et autres",
                  id: "R09F06SF01SSF04",
                  slug: "languedoc-provence-et-autres",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-rouges/languedoc-provence-et-autres",
                    target: "_self"
                  }
                },
                {
                  name: "Vins de pays et Vins de table rouge",
                  id: "R09F06SF01SSF05",
                  slug: "vins-de-pays-et-vins-de-table-rouge",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-rouges/vins-de-pays-et-vins-de-table-rouge",
                    target: "_self"
                  }
                }
              ],
              link: "/r/boissons-et-cave-a-vins/cave-a-vins/vins-rouges"
            },
            {
              name: "Vins Blancs",
              id: "R09F06SF02",
              slug: "vins-blancs",
              children: [
                {
                  name: "Alsace et Bourgogne",
                  id: "R09F06SF02SSF01",
                  slug: "alsace-et-bourgogne",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-blancs/alsace-et-bourgogne",
                    target: "_self"
                  }
                },
                {
                  name: "Bordeaux et Sud Ouest",
                  id: "R09F06SF02SSF02",
                  slug: "bordeaux-et-sud-ouest",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-blancs/bordeaux-et-sud-ouest",
                    target: "_self"
                  }
                },
                {
                  name: "Loire et autres rÃ©gions",
                  id: "R09F06SF02SSF03",
                  slug: "loire-et-autres-regions",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-blancs/loire-et-autres-regions",
                    target: "_self"
                  }
                },
                {
                  name: "Vins de pays & Vins de table blanc",
                  id: "R09F06SF02SSF04",
                  slug: "vins-de-pays-vins-de-table-blanc",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-blancs/vins-de-pays-vins-de-table-blanc",
                    target: "_self"
                  }
                }
              ],
              link: "/r/boissons-et-cave-a-vins/cave-a-vins/vins-blancs"
            },
            {
              name: "Vins RosÃ©s",
              id: "R09F06SF03",
              slug: "vins-roses",
              children: [
                {
                  name: "Languedoc et Provence",
                  id: "R09F06SF03SSF01",
                  slug: "languedoc-et-provence",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-roses/languedoc-et-provence",
                    target: "_self"
                  }
                },
                {
                  name: "Vins de pays & Vins de table rosÃ©",
                  id: "R09F06SF03SSF02",
                  slug: "vins-de-pays-vins-de-table-rose",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-roses/vins-de-pays-vins-de-table-rose",
                    target: "_self"
                  }
                },
                {
                  name: "Loire et autres",
                  id: "R09F06SF03SSF03",
                  slug: "loire-et-autres",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/cave-a-vins/vins-roses/loire-et-autres",
                    target: "_self"
                  }
                }
              ],
              link: "/r/boissons-et-cave-a-vins/cave-a-vins/vins-roses"
            },
            {
              name: "Fontaines Ã  vin",
              id: "R09F06SF04",
              slug: "fontaines-a-vin",
              link: "/r/boissons-et-cave-a-vins/cave-a-vins/fontaines-a-vin"
            },
            {
              name: "Vins Ã©trangers",
              id: "R09F06SF05",
              slug: "vins-etrangers",
              link: "/r/boissons-et-cave-a-vins/cave-a-vins/vins-etrangers"
            }
          ]
        },
        {
          id: "R09F07",
          name: "Champagnes et vins pÃ©tillants",
          link: "/r/boissons-et-cave-a-vins/champagnes-et-vins-petillants",
          visual:
            "/media/195x195/PhotositeArbo/R09F07_PhotoArbo_20170717_114521.png",
          children: [
            {
              name: "Champagnes",
              id: "R09F07SF01",
              slug: "champagnes",
              children: [
                {
                  name: "Brut et Demi-sec",
                  id: "R09F07SF01SS01",
                  slug: "brut-et-demi-sec",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/champagnes-et-vins-petillants/champagnes/brut-et-demi-sec",
                    target: "_self"
                  }
                },
                {
                  name: "RosÃ©",
                  id: "R09F07SF01SS02",
                  slug: "rose",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/champagnes-et-vins-petillants/champagnes/rose",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/boissons-et-cave-a-vins/champagnes-et-vins-petillants/champagnes"
            },
            {
              name: "Vins pÃ©tillants et mousseux",
              id: "R09F07SF02",
              slug: "vins-petillants-et-mousseux",
              link:
                "/r/boissons-et-cave-a-vins/champagnes-et-vins-petillants/vins-petillants-et-mousseux"
            }
          ]
        },
        {
          id: "R09F08",
          name: "Cave Ã  biÃ¨res et cidres",
          link: "/r/boissons-et-cave-a-vins/cave-a-bieres-et-cidres",
          visual:
            "/media/195x195/PhotositeArbo/R09F08_PhotoArbo_20181203_103614.png",
          children: [
            {
              name: "BiÃ¨res blondes rafraÃ®chissantes",
              id: "R09F08SF01",
              slug: "bieres-blondes-rafraichissantes",
              link:
                "/r/boissons-et-cave-a-vins/cave-a-bieres-et-cidres/bieres-blondes-rafraichissantes"
            },
            {
              name: "BiÃ¨res blanches et arÃ´matisÃ©es",
              id: "R09F08SF02",
              slug: "bieres-blanches-et-aromatisees",
              link:
                "/r/boissons-et-cave-a-vins/cave-a-bieres-et-cidres/bieres-blanches-et-aromatisees"
            },
            {
              name: "BiÃ¨res de dÃ©gustation",
              id: "R09F08SF03",
              slug: "bieres-de-degustation",
              link:
                "/r/boissons-et-cave-a-vins/cave-a-bieres-et-cidres/bieres-de-degustation"
            },
            {
              name: "BiÃ¨res sans alcool et PanachÃ©s",
              id: "R09F08SF04",
              slug: "bieres-sans-alcool-et-panaches",
              link:
                "/r/boissons-et-cave-a-vins/cave-a-bieres-et-cidres/bieres-sans-alcool-et-panaches"
            },
            {
              name: "Cidres",
              id: "R09F08SF05",
              slug: "cidres",
              link: "/r/boissons-et-cave-a-vins/cave-a-bieres-et-cidres/cidres"
            },
            {
              name: "FÃ»ts pression",
              id: "R09F08SF06",
              slug: "futs-pression",
              link:
                "/r/boissons-et-cave-a-vins/cave-a-bieres-et-cidres/futs-pression"
            }
          ]
        },
        {
          id: "R09F09",
          name: "ApÃ©ritifs et Alcools",
          link: "/r/boissons-et-cave-a-vins/aperitifs-et-alcools",
          visual:
            "/media/195x195/PhotositeArbo/R09F09_PhotoArbo_20180420_104503.png",
          children: [
            {
              name: "Whisky",
              id: "R09F09SF01",
              slug: "whisky",
              children: [
                {
                  name: "Whiskies Scotch ",
                  id: "R09F09SF01SS01",
                  slug: "whiskies-scotch",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/whisky/whiskies-scotch",
                    target: "_self"
                  }
                },
                {
                  name: "Whiskies Bourbon & Irlandais",
                  id: "R09F09SF01SS02",
                  slug: "whiskies-bourbon-irlandais",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/whisky/whiskies-bourbon-irlandais",
                    target: "_self"
                  }
                },
                {
                  name: "Whiskies de dÃ©gustation",
                  id: "R09F09SF01SS03",
                  slug: "whiskies-de-degustation",

                  link: {
                    uri:
                      "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/whisky/whiskies-de-degustation",
                    target: "_self"
                  }
                }
              ],
              link: "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/whisky"
            },
            {
              name: "Pastis & AnisÃ©s",
              id: "R09F09SF02",
              slug: "pastis-anises",
              link:
                "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/pastis-anises"
            },
            {
              name: "Vin doux, Portos & Amers",
              id: "R09F09SF03",
              slug: "vin-doux-portos-amers",
              link:
                "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/vin-doux-portos-amers"
            },
            {
              name: "Rhums",
              id: "R09F09SF04",
              slug: "rhums",
              link: "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/rhums"
            },
            {
              name: "Vodkas, Gins et Tequila",
              id: "R09F09SF05",
              slug: "vodkas-gins-et-tequila",
              link:
                "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/vodkas-gins-et-tequila"
            },
            {
              name: "Punch et Cocktails",
              id: "R09F09SF06",
              slug: "punch-et-cocktails",
              link:
                "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/punch-et-cocktails"
            },
            {
              name: "Liqueurs et Digestifs",
              id: "R09F09SF07",
              slug: "liqueurs-et-digestifs",
              link:
                "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/liqueurs-et-digestifs"
            },
            {
              name: "ApÃ©ritifs sans alcool",
              id: "R09F09SF08",
              slug: "aperitifs-sans-alcool",
              link:
                "/r/boissons-et-cave-a-vins/aperitifs-et-alcools/aperitifs-sans-alcool"
            }
          ]
        },
        {
          id: "R09F04",
          name: "Sirops et boissons aux fruits",
          link: "/r/boissons-et-cave-a-vins/sirops-et-boissons-aux-fruits",
          visual:
            "/media/195x195/PhotositeArbo/R09F04_PhotoArbo_20190228_113608.png",
          children: [
            {
              name: "ThÃ©s glacÃ©s",
              id: "R09F04SF02",
              slug: "thes-glaces",
              link:
                "/r/boissons-et-cave-a-vins/sirops-et-boissons-aux-fruits/thes-glaces"
            }
          ]
        }
      ]
    },
    {
      id: "R11",
      name: "Le Monde de BÃ©bÃ©",

      type: "food",
      link: "/r/le-monde-de-bebe",
      icon: "/images/icons/main-navigation/R11.svg",
      children: [
        {
          id: "R11F03",
          name: "Laits infantiles",
          link: "/r/le-monde-de-bebe/laits-infantiles",
          visual:
            "/media/195x195/PhotositeArbo/R11F03_PhotoArbo_20180531_134900.png",
          children: [
            {
              name: "Laits de croissance",
              id: "R11F03SF03",
              slug: "laits-de-croissance",
              link: "/r/le-monde-de-bebe/laits-infantiles/laits-de-croissance"
            },
            {
              name: "Laits 2Ã¨me Ã¢ge",
              id: "R11F03SF02",
              slug: "laits-2eme-age",
              link: "/r/le-monde-de-bebe/laits-infantiles/laits-2eme-age"
            },
            {
              name: "Laits 1er Ã¢ge",
              id: "R11F03SF01",
              slug: "laits-1er-age",
              link: "/r/le-monde-de-bebe/laits-infantiles/laits-1er-age"
            }
          ]
        },
        {
          id: "R11F08",
          name: "CÃ©rÃ©ales pour bÃ©bÃ©",
          link: "/r/le-monde-de-bebe/cereales-pour-bebe",
          visual:
            "/media/195x195/PhotositeArbo/R11F08_PhotoArbo_20180928_165454.png",
          children: [
            {
              name: "CÃ©rÃ©ales dÃ©shydratÃ©es",
              id: "R11F08SF01",
              slug: "cereales-deshydratees",
              link:
                "/r/le-monde-de-bebe/cereales-pour-bebe/cereales-deshydratees"
            },
            {
              name: "Petit dÃ©jeuner Ã  boire",
              id: "R11F08SF02",
              slug: "petit-dejeuner-a-boire",
              link:
                "/r/le-monde-de-bebe/cereales-pour-bebe/petit-dejeuner-a-boire"
            }
          ]
        },
        {
          id: "R11F01",
          name: "Repas de bÃ©bÃ©",
          link: "/r/le-monde-de-bebe/repas-de-bebe",
          visual:
            "/media/195x195/PhotositeArbo/R11F01_PhotoArbo_20170718_123926.png",
          children: [
            {
              name: "Plats de lÃ©gumes",
              id: "R11F01SF02",
              slug: "plats-de-legumes",
              link: "/r/le-monde-de-bebe/repas-de-bebe/plats-de-legumes"
            },
            {
              name: "Plats complets",
              id: "R11F01SF01",
              slug: "plats-complets",
              link: "/r/le-monde-de-bebe/repas-de-bebe/plats-complets"
            },
            {
              name: "Plats du soir",
              id: "R11F01SF03",
              slug: "plats-du-soir",
              link: "/r/le-monde-de-bebe/repas-de-bebe/plats-du-soir"
            }
          ]
        },
        {
          id: "R11F02",
          name: "Desserts, goÃ»ters et jus",
          link: "/r/le-monde-de-bebe/desserts-gouters-et-jus",
          visual:
            "/media/195x195/PhotositeArbo/R11F02_PhotoArbo_20170717_110712.png",
          children: [
            {
              name: "Desserts lactÃ©s",
              id: "R11F02SF01",
              slug: "desserts-lactes",
              link:
                "/r/le-monde-de-bebe/desserts-gouters-et-jus/desserts-lactes"
            },
            {
              name: "Desserts aux fruits",
              id: "R11F02SF02",
              slug: "desserts-aux-fruits",
              link:
                "/r/le-monde-de-bebe/desserts-gouters-et-jus/desserts-aux-fruits"
            },
            {
              name: "GoÃ»ters, biscuits et jus",
              id: "R11F02SF04",
              slug: "gouters-biscuits-et-jus",
              link:
                "/r/le-monde-de-bebe/desserts-gouters-et-jus/gouters-biscuits-et-jus"
            }
          ]
        },
        {
          id: "R11F07",
          name: "Pour Maman",
          link: "/r/le-monde-de-bebe/pour-maman",
          visual:
            "/media/195x195/PhotositeArbo/R11F07_PhotoArbo_20180720_145414.png",
          children: []
        },
        {
          id: "R11F04",
          name: "Couches et apprentissage propretÃ©",
          link: "/r/le-monde-de-bebe/couches-et-apprentissage-proprete",
          visual:
            "/media/195x195/PhotositeArbo/R11F04_PhotoArbo_20170717_110850.png",
          children: [
            {
              name: "Couches Taille 1  Nouveau nÃ©, de 2Ã  5kg",
              id: "R11F04SF01",
              slug: "couches-taille-1-nouveau-ne-de-2a-5kg",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/couches-taille-1-nouveau-ne-de-2a-5kg"
            },
            {
              name: "Couches Taille 2  de 3 Ã  6kg",
              id: "R11F04SF02",
              slug: "couches-taille-2-de-3-a-6kg",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/couches-taille-2-de-3-a-6kg"
            },
            {
              name: "Couches Taille 3  de 4 Ã  9kg",
              id: "R11F04SF03",
              slug: "couches-taille-3-de-4-a-9kg",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/couches-taille-3-de-4-a-9kg"
            },
            {
              name: "Couches Taille 4  de 7 Ã  18kg",
              id: "R11F04SF04",
              slug: "couches-taille-4-de-7-a-18kg",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/couches-taille-4-de-7-a-18kg"
            },
            {
              name: "Couches Taille 4+  de 9 Ã  20kg",
              id: "R11F04SF05",
              slug: "couches-taille-4-de-9-a-20kg",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/couches-taille-4-de-9-a-20kg"
            },
            {
              name: "Couches Taille 5  de 11 Ã  25kg",
              id: "R11F04SF06",
              slug: "couches-taille-5-de-11-a-25kg",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/couches-taille-5-de-11-a-25kg"
            },
            {
              name: "Couches Taille 6 et + dÃ¨s 16kg",
              id: "R11F04SF08",
              slug: "couches-taille-6-et-des-16kg",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/couches-taille-6-et-des-16kg"
            },
            {
              name: "Apprentissage et baignade",
              id: "R11F04SF07",
              slug: "apprentissage-et-baignade",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/apprentissage-et-baignade"
            },
            {
              name: "Accessoires change bÃ©bÃ©",
              id: "R11F04SF09",
              slug: "accessoires-change-bebe",
              link:
                "/r/le-monde-de-bebe/couches-et-apprentissage-proprete/accessoires-change-bebe"
            }
          ]
        },
        {
          id: "R11F05",
          name: "Toilette de bÃ©bÃ©",
          link: "/r/le-monde-de-bebe/toilette-de-bebe",
          visual:
            "/media/195x195/PhotositeArbo/R11F05_PhotoArbo_20170717_110929.png",
          children: [
            {
              name: "Gels lavants et shampooings",
              id: "R11F05SF01",
              slug: "gels-lavants-et-shampooings",
              link:
                "/r/le-monde-de-bebe/toilette-de-bebe/gels-lavants-et-shampooings"
            },
            {
              name: "Cotons et lingettes BÃ©bÃ©",
              id: "R11F05SF02",
              slug: "cotons-et-lingettes-bebe",
              link:
                "/r/le-monde-de-bebe/toilette-de-bebe/cotons-et-lingettes-bebe"
            },
            {
              name: "Laits, crÃ¨mes et liniments",
              id: "R11F05SF03",
              slug: "laits-cremes-et-liniments",
              link:
                "/r/le-monde-de-bebe/toilette-de-bebe/laits-cremes-et-liniments"
            },
            {
              name: "Soin du nez et des oreilles",
              id: "R11F05SF04",
              slug: "soin-du-nez-et-des-oreilles",
              link:
                "/r/le-monde-de-bebe/toilette-de-bebe/soin-du-nez-et-des-oreilles"
            },
            {
              name: "Accessoires et jouets de bain",
              id: "R11F05SF05",
              slug: "accessoires-et-jouets-de-bain",
              link:
                "/r/le-monde-de-bebe/toilette-de-bebe/accessoires-et-jouets-de-bain"
            }
          ]
        },
        {
          id: "R11F06",
          name: "Eveil, Balade, Sommeil",
          link: "/r/le-monde-de-bebe/eveil-balade-sommeil",
          visual:
            "/media/195x195/PhotositeArbo/R11F06_PhotoArbo_20180720_145445.png",
          children: [
            {
              name: "Doudous, jouets et veilleuses",
              id: "R11F06SF02",
              slug: "doudous-jouets-et-veilleuses",
              link:
                "/r/le-monde-de-bebe/eveil-balade-sommeil/doudous-jouets-et-veilleuses"
            },
            {
              name: "Lits, linge de lit et matelas",
              id: "R11F06SF03",
              slug: "lits-linge-de-lit-et-matelas",
              link:
                "/r/le-monde-de-bebe/eveil-balade-sommeil/lits-linge-de-lit-et-matelas"
            }
          ]
        }
      ]
    },
    {
      id: "R12",
      name: "HygiÃ¨ne et BeautÃ©",

      type: "food",
      link: "/r/hygiene-et-beaute",
      icon: "/images/icons/main-navigation/R12.svg",
      children: [
        {
          id: "R12F01",
          name: "Papier toilette, mouchoirs et cotons",
          link: "/r/hygiene-et-beaute/papier-toilette-mouchoirs-et-cotons",
          visual:
            "/media/195x195/PhotositeArbo/R12F01_PhotoArbo_20170717_111121.png",
          children: [
            {
              name: "Papier toilette",
              id: "R12F01SF03",
              slug: "papier-toilette",
              link:
                "/r/hygiene-et-beaute/papier-toilette-mouchoirs-et-cotons/papier-toilette"
            },
            {
              name: "Mouchoirs en papier",
              id: "R12F01SF01",
              slug: "mouchoirs-en-papier",
              link:
                "/r/hygiene-et-beaute/papier-toilette-mouchoirs-et-cotons/mouchoirs-en-papier"
            },
            {
              name: "Cotons et cotons tiges",
              id: "R12F01SF02",
              slug: "cotons-et-cotons-tiges",
              link:
                "/r/hygiene-et-beaute/papier-toilette-mouchoirs-et-cotons/cotons-et-cotons-tiges"
            }
          ]
        },
        {
          id: "R12F02",
          name: "Le Corps",
          link: "/r/hygiene-et-beaute/le-corps",
          visual:
            "/media/195x195/PhotositeArbo/R12F02_PhotoArbo_20170717_111205.png",
          children: [
            {
              name: "Produits solaires",
              id: "R12F02SF09",
              slug: "produits-solaires",
              link: "/r/hygiene-et-beaute/le-corps/produits-solaires"
            },
            {
              name: "Gels et crÃ¨mes de douche",
              id: "R12F02SF01",
              slug: "gels-et-cremes-de-douche",
              link: "/r/hygiene-et-beaute/le-corps/gels-et-cremes-de-douche"
            },
            {
              name: "Lait hydratants et soins du corps",
              id: "R12F02SF03",
              slug: "lait-hydratants-et-soins-du-corps",
              link:
                "/r/hygiene-et-beaute/le-corps/lait-hydratants-et-soins-du-corps"
            },
            {
              name: "Savons",
              id: "R12F02SF02",
              slug: "savons",
              link: "/r/hygiene-et-beaute/le-corps/savons"
            },
            {
              name: "DÃ©odorants femmes",
              id: "R12F02SF07",
              slug: "deodorants-femmes",
              link: "/r/hygiene-et-beaute/le-corps/deodorants-femmes"
            },
            {
              name: "DÃ©odorants hommes",
              id: "R12F02SF11",
              slug: "deodorants-hommes",
              link: "/r/hygiene-et-beaute/le-corps/deodorants-hommes"
            },
            {
              name: "Epilation et rasage",
              id: "R12F02SF04",
              slug: "epilation-et-rasage",
              link: "/r/hygiene-et-beaute/le-corps/epilation-et-rasage"
            },
            {
              name: "Soins mains et pieds",
              id: "R12F02SF06",
              slug: "soins-mains-et-pieds",
              link: "/r/hygiene-et-beaute/le-corps/soins-mains-et-pieds"
            },
            {
              name: "Eaux de toilette & eaux de cologne",
              id: "R12F02SF08",
              slug: "eaux-de-toilette-eaux-de-cologne",
              link:
                "/r/hygiene-et-beaute/le-corps/eaux-de-toilette-eaux-de-cologne"
            }
          ]
        },
        {
          id: "R12F03",
          name: "Les Cheveux",
          link: "/r/hygiene-et-beaute/les-cheveux",
          visual:
            "/media/195x195/PhotositeArbo/R12F03_PhotoArbo_20170717_111252.png",
          children: [
            {
              name: "Les shampoings",
              id: "R12F03SF01",
              slug: "les-shampoings",
              children: [
                {
                  name: "Cheveux normaux",
                  id: "R12F03SF01SSF01",
                  slug: "cheveux-normaux",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-shampoings/cheveux-normaux",
                    target: "_self"
                  }
                },
                {
                  name: "Cheveux gras",
                  id: "R12F03SF01SSF06",
                  slug: "cheveux-gras",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-shampoings/cheveux-gras",
                    target: "_self"
                  }
                },
                {
                  name: "Cheveux colorÃ©s",
                  id: "R12F03SF01SSF02",
                  slug: "cheveux-colores",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-shampoings/cheveux-colores",
                    target: "_self"
                  }
                },
                {
                  name: "Cheveux secs et abÃ®mÃ©s",
                  id: "R12F03SF01SSF04",
                  slug: "cheveux-secs-et-abimes",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-shampoings/cheveux-secs-et-abimes",
                    target: "_self"
                  }
                },
                {
                  name: "Cheveux fins et bouclÃ©s",
                  id: "R12F03SF01SSF03",
                  slug: "cheveux-fins-et-boucles",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-shampoings/cheveux-fins-et-boucles",
                    target: "_self"
                  }
                },
                {
                  name: "Anti-pelliculaires",
                  id: "R12F03SF01SSF05",
                  slug: "anti-pelliculaires",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-shampoings/anti-pelliculaires",
                    target: "_self"
                  }
                }
              ],
              link: "/r/hygiene-et-beaute/les-cheveux/les-shampoings"
            },
            {
              name: "Les aprÃ¨s-shampoings",
              id: "R12F03SF02",
              slug: "les-apres-shampoings",
              children: [
                {
                  name: "Normaux Ã  gras",
                  id: "R12F03SF02SSF01",
                  slug: "normaux-a-gras",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-apres-shampoings/normaux-a-gras",
                    target: "_self"
                  }
                },
                {
                  name: "ColorÃ©s",
                  id: "R12F03SF02SSF02",
                  slug: "colores",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-apres-shampoings/colores",
                    target: "_self"
                  }
                },
                {
                  name: "Fins ou bouclÃ©s",
                  id: "R12F03SF02SSF03",
                  slug: "fins-ou-boucles",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-apres-shampoings/fins-ou-boucles",
                    target: "_self"
                  }
                },
                {
                  name: "AbÃ®mÃ©s et secs",
                  id: "R12F03SF02SSF04",
                  slug: "abimes-et-secs",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/les-cheveux/les-apres-shampoings/abimes-et-secs",
                    target: "_self"
                  }
                }
              ],
              link: "/r/hygiene-et-beaute/les-cheveux/les-apres-shampoings"
            },
            {
              name: "Les masques et huiles",
              id: "R12F03SF03",
              slug: "les-masques-et-huiles",
              link: "/r/hygiene-et-beaute/les-cheveux/les-masques-et-huiles"
            },
            {
              name: "Gels, Laques et mousses",
              id: "R12F03SF04",
              slug: "gels-laques-et-mousses",
              link: "/r/hygiene-et-beaute/les-cheveux/gels-laques-et-mousses"
            },
            {
              name: "Coloration des cheveux",
              id: "R12F03SF05",
              slug: "coloration-des-cheveux",
              link: "/r/hygiene-et-beaute/les-cheveux/coloration-des-cheveux"
            },
            {
              name: "Accessoires cheveux",
              id: "R12F03SF06",
              slug: "accessoires-cheveux",
              link: "/r/hygiene-et-beaute/les-cheveux/accessoires-cheveux"
            }
          ]
        },
        {
          id: "R12F05",
          name: "HygiÃ¨ne dentaire",
          link: "/r/hygiene-et-beaute/hygiene-dentaire",
          visual:
            "/media/195x195/PhotositeArbo/R12F05_PhotoArbo_20190220_155307.png",
          children: [
            {
              name: "Dentifrices",
              id: "R12F05SF01",
              slug: "dentifrices",
              link: "/r/hygiene-et-beaute/hygiene-dentaire/dentifrices"
            },
            {
              name: "Brosses Ã  dents",
              id: "R12F05SF02",
              slug: "brosses-a-dents",
              link: "/r/hygiene-et-beaute/hygiene-dentaire/brosses-a-dents"
            },
            {
              name: "Bains de bouche et soins",
              id: "R12F05SF03",
              slug: "bains-de-bouche-et-soins",
              link:
                "/r/hygiene-et-beaute/hygiene-dentaire/bains-de-bouche-et-soins"
            },
            {
              name: "Pour les enfants",
              id: "R12F05SF04",
              slug: "pour-les-enfants",
              link: "/r/hygiene-et-beaute/hygiene-dentaire/pour-les-enfants"
            }
          ]
        },
        {
          id: "R12F04",
          name: "Le Visage",
          link: "/r/hygiene-et-beaute/le-visage",
          visual:
            "/media/195x195/PhotositeArbo/R12F04_PhotoArbo_20180912_165035.png",
          children: [
            {
              name: "DÃ©maquillants et nettoyants ",
              id: "R12F04SF01",
              slug: "demaquillants-et-nettoyants",
              children: [
                {
                  name: "DÃ©maquillants",
                  id: "R12F04SF01SSF07",
                  slug: "demaquillants",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/le-visage/demaquillants-et-nettoyants/demaquillants",
                    target: "_self"
                  }
                },
                {
                  name: "Nettoyants",
                  id: "R12F04SF01SSF08",
                  slug: "nettoyants",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/le-visage/demaquillants-et-nettoyants/nettoyants",
                    target: "_self"
                  }
                },
                {
                  name: "Toniques et brumisateurs",
                  id: "R12F04SF01SSF04",
                  slug: "toniques-et-brumisateurs",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/le-visage/demaquillants-et-nettoyants/toniques-et-brumisateurs",
                    target: "_self"
                  }
                }
              ],
              link: "/r/hygiene-et-beaute/le-visage/demaquillants-et-nettoyants"
            },
            {
              name: "Masques et gommages",
              id: "R12F04SF03",
              slug: "masques-et-gommages",
              link: "/r/hygiene-et-beaute/le-visage/masques-et-gommages"
            },
            {
              name: "Soin du visage",
              id: "R12F04SF04",
              slug: "soin-du-visage",
              children: [
                {
                  name: "CrÃ¨mes hydratantes",
                  id: "R12F04SF04SS01",
                  slug: "cremes-hydratantes",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/le-visage/soin-du-visage/cremes-hydratantes",
                    target: "_self"
                  }
                },
                {
                  name: "CrÃ¨mes anti-Ã¢ge",
                  id: "R12F04SF04SS02",
                  slug: "cremes-anti-age",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/le-visage/soin-du-visage/cremes-anti-age",
                    target: "_self"
                  }
                },
                {
                  name: "Soin des lÃ¨vres",
                  id: "R12F04SF04SS03",
                  slug: "soin-des-levres",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/le-visage/soin-du-visage/soin-des-levres",
                    target: "_self"
                  }
                }
              ],
              link: "/r/hygiene-et-beaute/le-visage/soin-du-visage"
            },
            {
              name: "Maquillage ",
              id: "R12F04SF02",
              slug: "maquillage",
              children: [
                {
                  name: "Le Teint",
                  id: "R12F04SF02SSF01",
                  slug: "le-teint",

                  link: {
                    uri: "/r/hygiene-et-beaute/le-visage/maquillage/le-teint",
                    target: "_self"
                  }
                },
                {
                  name: "Les Yeux",
                  id: "R12F04SF02SSF02",
                  slug: "les-yeux",

                  link: {
                    uri: "/r/hygiene-et-beaute/le-visage/maquillage/les-yeux",
                    target: "_self"
                  }
                },
                {
                  name: "Les LÃ¨vres",
                  id: "R12F04SF02SSF03",
                  slug: "les-levres",

                  link: {
                    uri: "/r/hygiene-et-beaute/le-visage/maquillage/les-levres",
                    target: "_self"
                  }
                },
                {
                  name: "Les Ongles",
                  id: "R12F04SF02SSF04",
                  slug: "les-ongles",

                  link: {
                    uri: "/r/hygiene-et-beaute/le-visage/maquillage/les-ongles",
                    target: "_self"
                  }
                }
              ],
              link: "/r/hygiene-et-beaute/le-visage/maquillage"
            }
          ]
        },
        {
          id: "R12F10",
          name: "HygiÃ¨ne feminine, Incontinence ",
          link: "/r/hygiene-et-beaute/hygiene-feminine-incontinence",
          visual:
            "/media/195x195/PhotositeArbo/R12F10_PhotoArbo_20170717_111353.png",
          children: [
            {
              name: "Tampons",
              id: "R12F10SF01",
              slug: "tampons",
              link: "/r/hygiene-et-beaute/hygiene-feminine-incontinence/tampons"
            },
            {
              name: "Serviettes hygiÃ©niques",
              id: "R12F10SF02",
              slug: "serviettes-hygieniques",
              link:
                "/r/hygiene-et-beaute/hygiene-feminine-incontinence/serviettes-hygieniques"
            },
            {
              name: "ProtÃ¨ges-slips",
              id: "R12F10SF05",
              slug: "proteges-slips",
              link:
                "/r/hygiene-et-beaute/hygiene-feminine-incontinence/proteges-slips"
            },
            {
              name: "Incontinence",
              id: "R12F10SF04",
              slug: "incontinence",
              link:
                "/r/hygiene-et-beaute/hygiene-feminine-incontinence/incontinence"
            },
            {
              name: "Toilette intime",
              id: "R12F10SF03",
              slug: "toilette-intime",
              link:
                "/r/hygiene-et-beaute/hygiene-feminine-incontinence/toilette-intime"
            }
          ]
        },
        {
          id: "R12F06",
          name: "Enfants",
          link: "/r/hygiene-et-beaute/enfants",
          visual:
            "/media/195x195/PhotositeArbo/R12F06_PhotoArbo_20170717_111726.png",
          children: [
            {
              name: "Gels douche",
              id: "R12F06SF01",
              slug: "gels-douche",
              link: "/r/hygiene-et-beaute/enfants/gels-douche"
            },
            {
              name: "Shampoings et dÃ©mÃªlants",
              id: "R12F06SF02",
              slug: "shampoings-et-demelants",
              link: "/r/hygiene-et-beaute/enfants/shampoings-et-demelants"
            },
            {
              name: "Dentifrices et brosses Ã  dents",
              id: "R12F06SF03",
              slug: "dentifrices-et-brosses-a-dents",
              link:
                "/r/hygiene-et-beaute/enfants/dentifrices-et-brosses-a-dents"
            }
          ]
        },
        {
          id: "R12F07",
          name: "Hommes",
          link: "/r/hygiene-et-beaute/hommes",
          visual:
            "/media/195x195/PhotositeArbo/R12F07_PhotoArbo_20170717_111813.png",
          children: [
            {
              name: "Rasage Homme",
              id: "R12F07SF01",
              slug: "rasage-homme",
              children: [
                {
                  name: "Rasoirs",
                  id: "R12F07SF01SS01",
                  slug: "rasoirs",

                  link: {
                    uri: "/r/hygiene-et-beaute/hommes/rasage-homme/rasoirs",
                    target: "_self"
                  }
                },
                {
                  name: "Lames",
                  id: "R12F07SF01SS02",
                  slug: "lames",

                  link: {
                    uri: "/r/hygiene-et-beaute/hommes/rasage-homme/lames",
                    target: "_self"
                  }
                },
                {
                  name: "Gels & mousses",
                  id: "R12F07SF01SS03",
                  slug: "gels-mousses",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/hommes/rasage-homme/gels-mousses",
                    target: "_self"
                  }
                },
                {
                  name: "AprÃ¨s rasage et soins de la barbe",
                  id: "R12F07SF01SS04",
                  slug: "apres-rasage-et-soins-de-la-barbe",

                  link: {
                    uri:
                      "/r/hygiene-et-beaute/hommes/rasage-homme/apres-rasage-et-soins-de-la-barbe",
                    target: "_self"
                  }
                }
              ],
              link: "/r/hygiene-et-beaute/hommes/rasage-homme"
            },
            {
              name: "Soins du visage Homme",
              id: "R12F07SF02",
              slug: "soins-du-visage-homme",
              link: "/r/hygiene-et-beaute/hommes/soins-du-visage-homme"
            },
            {
              name: "Gels douche Homme",
              id: "R12F07SF03",
              slug: "gels-douche-homme",
              link: "/r/hygiene-et-beaute/hommes/gels-douche-homme"
            },
            {
              name: "Shampoings Homme",
              id: "R12F07SF04",
              slug: "shampoings-homme",
              link: "/r/hygiene-et-beaute/hommes/shampoings-homme"
            },
            {
              name: "DÃ©odorants Hommes",
              id: "R12F07SF05",
              slug: "deodorants-hommes",
              link: "/r/hygiene-et-beaute/hommes/deodorants-hommes"
            },
            {
              name: "Gels et cires",
              id: "R12F07SF07",
              slug: "gels-et-cires",
              link: "/r/hygiene-et-beaute/hommes/gels-et-cires"
            }
          ]
        },
        {
          id: "R12F08",
          name: "Premiers soins",
          link: "/r/hygiene-et-beaute/premiers-soins",
          visual:
            "/media/195x195/PhotositeArbo/R12F08_PhotoArbo_20190228_114422.png",
          children: [
            {
              name: "Pansements, bandes et dÃ©sinfectants",
              id: "R12F08SF01",
              slug: "pansements-bandes-et-desinfectants",
              link:
                "/r/hygiene-et-beaute/premiers-soins/pansements-bandes-et-desinfectants"
            },
            {
              name: "SÃ©rums physiologiques et sprays nasaux",
              id: "R12F08SF02",
              slug: "serums-physiologiques-et-sprays-nasaux",
              link:
                "/r/hygiene-et-beaute/premiers-soins/serums-physiologiques-et-sprays-nasaux"
            },
            {
              name: "PrÃ©servatifs et gels lubrifiants",
              id: "R12F08SF03",
              slug: "preservatifs-et-gels-lubrifiants",
              link:
                "/r/hygiene-et-beaute/premiers-soins/preservatifs-et-gels-lubrifiants"
            },
            {
              name: "Tests de grossesse",
              id: "R12F08SF06",
              slug: "tests-de-grossesse",
              link: "/r/hygiene-et-beaute/premiers-soins/tests-de-grossesse"
            },
            {
              name: "Produits anti-moustiques",
              id: "R12F08SF05",
              slug: "produits-anti-moustiques",
              link:
                "/r/hygiene-et-beaute/premiers-soins/produits-anti-moustiques"
            },
            {
              name: "Optique et auditif",
              id: "R12F08SF04",
              slug: "optique-et-auditif",
              link: "/r/hygiene-et-beaute/premiers-soins/optique-et-auditif"
            }
          ]
        },
        {
          id: "R12F12",
          name: "Huiles essentielles",
          link: "/r/hygiene-et-beaute/huiles-essentielles",
          visual:
            "/media/195x195/PhotositeArbo/R12F12_PhotoArbo_20190124_084939.png",
          children: []
        }
      ]
    },
    {
      id: "R17",
      name: "Entretien et nettoyage",

      type: "food",
      link: "/r/entretien-et-nettoyage",
      icon: "/images/icons/main-navigation/R17.svg",
      children: [
        {
          id: "R17F01",
          name: "Lessives et soin du linge",
          link: "/r/entretien-et-nettoyage/lessives-et-soin-du-linge",
          visual:
            "/media/195x195/PhotositeArbo/R17F01_PhotoArbo_20190215_141903.png",
          children: [
            {
              name: "Lessives",
              id: "R17F01SF01",
              slug: "lessives",
              children: [
                {
                  name: "Tablettes et capsules",
                  id: "R17F01SF01SS01",
                  slug: "tablettes-et-capsules",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/lessives/tablettes-et-capsules",
                    target: "_self"
                  }
                },
                {
                  name: "Liquides",
                  id: "R17F01SF01SS02",
                  slug: "liquides",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/lessives/liquides",
                    target: "_self"
                  }
                },
                {
                  name: "Poudres",
                  id: "R17F01SF01SS03",
                  slug: "poudres",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/lessives/poudres",
                    target: "_self"
                  }
                },
                {
                  name: "SpÃ©cifiques",
                  id: "R17F01SF01SS04",
                  slug: "specifiques",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/lessives/specifiques",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/lessives"
            },
            {
              name: "Adoucissants",
              id: "R17F01SF02",
              slug: "adoucissants",
              link:
                "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/adoucissants"
            },
            {
              name: "Soin du linge",
              id: "R17F01SF03",
              slug: "soin-du-linge",
              children: [
                {
                  name: "DÃ©tachants et anti-dÃ©coloration",
                  id: "R17F01SF03SS01",
                  slug: "detachants-et-anti-decoloration",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/soin-du-linge/detachants-et-anti-decoloration",
                    target: "_self"
                  }
                },
                {
                  name: "DÃ©sinfectants et dÃ©sodorisants",
                  id: "R17F01SF03SS02",
                  slug: "desinfectants-et-desodorisants",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/soin-du-linge/desinfectants-et-desodorisants",
                    target: "_self"
                  }
                },
                {
                  name: "Entretien du lave-linge",
                  id: "R17F01SF03SS03",
                  slug: "entretien-du-lave-linge",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/soin-du-linge/entretien-du-lave-linge",
                    target: "_self"
                  }
                },
                {
                  name: "Aide au repassage",
                  id: "R17F01SF03SS04",
                  slug: "aide-au-repassage",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/soin-du-linge/aide-au-repassage",
                    target: "_self"
                  }
                },
                {
                  name: "Teintures",
                  id: "R17F01SF03SS05",
                  slug: "teintures",

                  link: {
                    uri:
                      "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/soin-du-linge/teintures",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/entretien-et-nettoyage/lessives-et-soin-du-linge/soin-du-linge"
            }
          ]
        },
        {
          id: "R17F02",
          name: "Produits nettoyants",
          link: "/r/entretien-et-nettoyage/produits-nettoyants",
          visual:
            "/media/195x195/PhotositeArbo/R17F02_PhotoArbo_20180313_145320.png",
          children: [
            {
              name: "Multi-usages",
              id: "R17F02SF01",
              slug: "multi-usages",
              link: "/r/entretien-et-nettoyage/produits-nettoyants/multi-usages"
            },
            {
              name: "Lingettes et plumeaux",
              id: "R17F02SF02",
              slug: "lingettes-et-plumeaux",
              link:
                "/r/entretien-et-nettoyage/produits-nettoyants/lingettes-et-plumeaux"
            },
            {
              name: "Cuisine et Salle de bain",
              id: "R17F02SF03",
              slug: "cuisine-et-salle-de-bain",
              link:
                "/r/entretien-et-nettoyage/produits-nettoyants/cuisine-et-salle-de-bain"
            },
            {
              name: "Produits WC et eaux de Javel",
              id: "R17F02SF04",
              slug: "produits-wc-et-eaux-de-javel",
              link:
                "/r/entretien-et-nettoyage/produits-nettoyants/produits-wc-et-eaux-de-javel"
            },
            {
              name: "Vitres et meubles",
              id: "R17F02SF05",
              slug: "vitres-et-meubles",
              link:
                "/r/entretien-et-nettoyage/produits-nettoyants/vitres-et-meubles"
            },
            {
              name: "Sols",
              id: "R17F02SF06",
              slug: "sols",
              link: "/r/entretien-et-nettoyage/produits-nettoyants/sols"
            },
            {
              name: "DÃ©boucheurs",
              id: "R17F02SF07",
              slug: "deboucheurs",
              link: "/r/entretien-et-nettoyage/produits-nettoyants/deboucheurs"
            }
          ]
        },
        {
          id: "R17F03",
          name: "Nettoyants Vaisselle",
          link: "/r/entretien-et-nettoyage/nettoyants-vaisselle",
          visual:
            "/media/195x195/PhotositeArbo/R17F03_PhotoArbo_20180313_145353.png",
          children: [
            {
              name: "Tablettes et gels de lavage",
              id: "R17F03SF01",
              slug: "tablettes-et-gels-de-lavage",
              link:
                "/r/entretien-et-nettoyage/nettoyants-vaisselle/tablettes-et-gels-de-lavage"
            },
            {
              name: "Liquides vaisselle",
              id: "R17F03SF02",
              slug: "liquides-vaisselle",
              link:
                "/r/entretien-et-nettoyage/nettoyants-vaisselle/liquides-vaisselle"
            },
            {
              name: "Eponges",
              id: "R17F03SF03",
              slug: "eponges",
              link: "/r/entretien-et-nettoyage/nettoyants-vaisselle/eponges"
            },
            {
              name: "Entretien lave-vaisselle",
              id: "R17F03SF04",
              slug: "entretien-lave-vaisselle",
              link:
                "/r/entretien-et-nettoyage/nettoyants-vaisselle/entretien-lave-vaisselle"
            }
          ]
        },
        {
          id: "R17F04",
          name: "Essuie-tout, papier toilette et mouchoirs",
          link:
            "/r/entretien-et-nettoyage/essuie-tout-papier-toilette-et-mouchoirs",
          visual:
            "/media/195x195/PhotositeArbo/R17F04_PhotoArbo_20180313_145430.png",
          children: [
            {
              name: "Papier WC",
              id: "R17F04SF01",
              slug: "papier-wc",
              link:
                "/r/entretien-et-nettoyage/essuie-tout-papier-toilette-et-mouchoirs/papier-wc"
            },
            {
              name: "Essuie-tout",
              id: "R17F04SF02",
              slug: "essuie-tout",
              link:
                "/r/entretien-et-nettoyage/essuie-tout-papier-toilette-et-mouchoirs/essuie-tout"
            },
            {
              name: "Mouchoirs",
              id: "R17F04SF03",
              slug: "mouchoirs",
              link:
                "/r/entretien-et-nettoyage/essuie-tout-papier-toilette-et-mouchoirs/mouchoirs"
            }
          ]
        },
        {
          id: "R17F05",
          name: "DÃ©sodorisants",
          link: "/r/entretien-et-nettoyage/desodorisants",
          visual:
            "/media/195x195/PhotositeArbo/R17F05_PhotoArbo_20180313_145526.png",
          children: []
        },
        {
          id: "R17F06",
          name: "Insecticides",
          link: "/r/entretien-et-nettoyage/insecticides",
          visual:
            "/media/195x195/PhotositeArbo/R17F06_PhotoArbo_20180313_145554.png",
          children: []
        },
        {
          id: "R17F07",
          name: "Accessoires de mÃ©nage",
          link: "/r/entretien-et-nettoyage/accessoires-de-menage",
          visual:
            "/media/195x195/PhotositeArbo/R17F07_PhotoArbo_20180313_145657.png",
          children: [
            {
              name: "Balais, seaux serpillÃ¨res",
              id: "R17F07SF01",
              slug: "balais-seaux-serpilleres",
              link:
                "/r/entretien-et-nettoyage/accessoires-de-menage/balais-seaux-serpilleres"
            },
            {
              name: "Gants",
              id: "R17F07SF02",
              slug: "gants",
              link: "/r/entretien-et-nettoyage/accessoires-de-menage/gants"
            },
            {
              name: "Sacs aspirateur",
              id: "R17F07SF03",
              slug: "sacs-aspirateur",
              link:
                "/r/entretien-et-nettoyage/accessoires-de-menage/sacs-aspirateur"
            },
            {
              name: "Sacs poubelle",
              id: "R17F07SF04",
              slug: "sacs-poubelle",
              link:
                "/r/entretien-et-nettoyage/accessoires-de-menage/sacs-poubelle"
            }
          ]
        }
      ]
    },
    {
      id: "R13",
      name: "Maison, Loisir, Textile",

      link: "/r/maison-loisir-textile",
      icon: "/images/icons/main-navigation/R13.svg",
      children: [
        {
          id: "R13F13",
          name: "Decorations festives ",
          link: "/r/maison-loisir-textile/decorations-festives",
          visual:
            "/media/195x195/PhotositeArbo/R13F13_PhotoArbo_20181031_153159.png",
          children: []
        },
        {
          id: "R13F08",
          name: "LumiÃ¨re et Ã©lectricitÃ©",
          link: "/r/maison-loisir-textile/lumiere-et-electricite",
          visual:
            "/media/195x195/PhotositeArbo/R13F08_PhotoArbo_20170725_175018.png",
          children: [
            {
              name: "Piles et chargeurs",
              id: "R13F08SF01",
              slug: "piles-et-chargeurs",
              link:
                "/r/maison-loisir-textile/lumiere-et-electricite/piles-et-chargeurs"
            },
            {
              name: "Ampoules et Ã©clairage",
              id: "R13F08SF02",
              slug: "ampoules-et-eclairage",
              link:
                "/r/maison-loisir-textile/lumiere-et-electricite/ampoules-et-eclairage"
            },
            {
              name: "Prises et rallonges",
              id: "R13F08SF03",
              slug: "prises-et-rallonges",
              link:
                "/r/maison-loisir-textile/lumiere-et-electricite/prises-et-rallonges"
            }
          ]
        },
        {
          id: "R13F07",
          name: "Maison et intÃ©rieur",
          link: "/r/maison-loisir-textile/maison-et-interieur",
          visual:
            "/media/195x195/PhotositeArbo/R13F07_PhotoArbo_20180314_150907.png",
          children: [
            {
              name: "Linge de maison et blanchisserie",
              id: "R13F07SF04",
              slug: "linge-de-maison-et-blanchisserie",
              children: [
                {
                  name: "Accessoires de blanchisserie",
                  id: "R13F07SF04SS03",
                  slug: "accessoires-de-blanchisserie",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/maison-et-interieur/linge-de-maison-et-blanchisserie/accessoires-de-blanchisserie",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/maison-et-interieur/linge-de-maison-et-blanchisserie"
            },
            {
              name: "Parfums, encens et bougies",
              id: "R13F07SF02",
              slug: "parfums-encens-et-bougies",
              children: [
                {
                  name: "Bougies",
                  id: "R13F07SF02SS01",
                  slug: "bougies",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/maison-et-interieur/parfums-encens-et-bougies/bougies",
                    target: "_self"
                  }
                },
                {
                  name: "Parfums d'intÃ©rieur et encens",
                  id: "R13F07SF02SS02",
                  slug: "parfums-d-interieur-et-encens",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/maison-et-interieur/parfums-encens-et-bougies/parfums-d-interieur-et-encens",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/maison-et-interieur/parfums-encens-et-bougies"
            },
            {
              name: "Chauffage et allume-feu",
              id: "R13F07SF03",
              slug: "chauffage-et-allume-feu",
              children: [
                {
                  name: "Charbons et allume feu",
                  id: "R13F07SF03SS01",
                  slug: "charbons-et-allume-feu",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/maison-et-interieur/chauffage-et-allume-feu/charbons-et-allume-feu",
                    target: "_self"
                  }
                },
                {
                  name: "Gaz, pÃ©trole, bois",
                  id: "R13F07SF03SS02",
                  slug: "gaz-petrole-bois",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/maison-et-interieur/chauffage-et-allume-feu/gaz-petrole-bois",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/maison-et-interieur/chauffage-et-allume-feu"
            },
            {
              name: "Rangement",
              id: "R13F07SF05",
              slug: "rangement",
              children: [
                {
                  name: "Malles et coffres de rangement",
                  id: "R13F07SF05SS01",
                  slug: "malles-et-coffres-de-rangement",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/maison-et-interieur/rangement/malles-et-coffres-de-rangement",
                    target: "_self"
                  }
                },
                {
                  name: "PatÃ¨res, Ã©tagÃ¨res et porte-chaussures ",
                  id: "R13F07SF05SS02",
                  slug: "pateres-etageres-et-porte-chaussures",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/maison-et-interieur/rangement/pateres-etageres-et-porte-chaussures",
                    target: "_self"
                  }
                }
              ],
              link: "/r/maison-loisir-textile/maison-et-interieur/rangement"
            }
          ]
        },
        {
          id: "R13F06",
          name: "Cuisine",
          link: "/r/maison-loisir-textile/cuisine",
          visual:
            "/media/195x195/PhotositeArbo/R13F06_PhotoArbo_20170725_174516.png",
          children: [
            {
              name: "Emballages alimentaires",
              id: "R13F06SF04",
              slug: "emballages-alimentaires",
              children: [
                {
                  name: "Papiers cuissons et emballages",
                  id: "R13F06SF04SS01",
                  slug: "papiers-cuissons-et-emballages",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/emballages-alimentaires/papiers-cuissons-et-emballages",
                    target: "_self"
                  }
                },
                {
                  name: "Papiers et barquettes aluminium",
                  id: "R13F06SF04SS02",
                  slug: "papiers-et-barquettes-aluminium",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/emballages-alimentaires/papiers-et-barquettes-aluminium",
                    target: "_self"
                  }
                }
              ],
              link: "/r/maison-loisir-textile/cuisine/emballages-alimentaires"
            },
            {
              name: "Vaisselle jetable et accessoires de tables",
              id: "R13F06SF01",
              slug: "vaisselle-jetable-et-accessoires-de-tables",
              children: [
                {
                  name: "Vaisselle jetable",
                  id: "R13F06SF01SS01",
                  slug: "vaisselle-jetable",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/vaisselle-jetable-et-accessoires-de-tables/vaisselle-jetable",
                    target: "_self"
                  }
                },
                {
                  name: "Vaisselle enfant",
                  id: "R13F06SF01SS02",
                  slug: "vaisselle-enfant",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/vaisselle-jetable-et-accessoires-de-tables/vaisselle-enfant",
                    target: "_self"
                  }
                },
                {
                  name: "Accessoires et dÃ©co",
                  id: "R13F06SF01SS03",
                  slug: "accessoires-et-deco",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/vaisselle-jetable-et-accessoires-de-tables/accessoires-et-deco",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/cuisine/vaisselle-jetable-et-accessoires-de-tables"
            },
            {
              name: "Coutellerie",
              id: "R13F06SF05",
              slug: "coutellerie",
              link: "/r/maison-loisir-textile/cuisine/coutellerie"
            },
            {
              name: "Vaisselle, couverts et verres",
              id: "R13F06SF11",
              slug: "vaisselle-couverts-et-verres",
              link:
                "/r/maison-loisir-textile/cuisine/vaisselle-couverts-et-verres"
            },
            {
              name: "Ustensiles de cuisine",
              id: "R13F06SF03",
              slug: "ustensiles-de-cuisine",
              children: [
                {
                  name: "MÃ©langer et servir",
                  id: "R13F06SF03SS01",
                  slug: "melanger-et-servir",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/ustensiles-de-cuisine/melanger-et-servir",
                    target: "_self"
                  }
                },
                {
                  name: "Passoires et essoreuses",
                  id: "R13F06SF03SS02",
                  slug: "passoires-et-essoreuses",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/ustensiles-de-cuisine/passoires-et-essoreuses",
                    target: "_self"
                  }
                },
                {
                  name: "Eplucheurs, rÃ¢pes, moulins et presses-agrumes",
                  id: "R13F06SF03SS04",
                  slug: "eplucheurs-rapes-moulins-et-presses-agrumes",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/ustensiles-de-cuisine/eplucheurs-rapes-moulins-et-presses-agrumes",
                    target: "_self"
                  }
                },
                {
                  name: "Autres ustensiles",
                  id: "R13F06SF03SS03",
                  slug: "autres-ustensiles",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/ustensiles-de-cuisine/autres-ustensiles",
                    target: "_self"
                  }
                }
              ],
              link: "/r/maison-loisir-textile/cuisine/ustensiles-de-cuisine"
            },
            {
              name: "PÃ¢tisserie",
              id: "R13F06SF08",
              slug: "patisserie",
              link: "/r/maison-loisir-textile/cuisine/patisserie"
            },
            {
              name: "CafetiÃ¨res, bouilloires et infuseurs Ã  thÃ©",
              id: "R13F06SF14",
              slug: "cafetieres-bouilloires-et-infuseurs-a-the",
              link:
                "/r/maison-loisir-textile/cuisine/cafetieres-bouilloires-et-infuseurs-a-the"
            },
            {
              name: "Conservation et rÃ©cipients isotherme",
              id: "R13F06SF12",
              slug: "conservation-et-recipients-isotherme",
              children: [
                {
                  name: "Boites de conservation et bocaux",
                  id: "R13F06SF12SS01",
                  slug: "boites-de-conservation-et-bocaux",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/conservation-et-recipients-isotherme/boites-de-conservation-et-bocaux",
                    target: "_self"
                  }
                },
                {
                  name: "Thermos, mugs et sacs isothermes",
                  id: "R13F06SF12SS02",
                  slug: "thermos-mugs-et-sacs-isothermes",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/conservation-et-recipients-isotherme/thermos-mugs-et-sacs-isothermes",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/cuisine/conservation-et-recipients-isotherme"
            },
            {
              name: "Cuisson",
              id: "R13F06SF09",
              slug: "cuisson",
              children: [
                {
                  name: "PoÃªle et sauteuses",
                  id: "R13F06SF09SS01",
                  slug: "poele-et-sauteuses",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/cuisson/poele-et-sauteuses",
                    target: "_self"
                  }
                },
                {
                  name: "Casseroles",
                  id: "R13F06SF09SS02",
                  slug: "casseroles",

                  link: {
                    uri: "/r/maison-loisir-textile/cuisine/cuisson/casseroles",
                    target: "_self"
                  }
                },
                {
                  name: "Plats Ã  four",
                  id: "R13F06SF09SS03",
                  slug: "plats-a-four",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/cuisson/plats-a-four",
                    target: "_self"
                  }
                },
                {
                  name: "Autres et accessoires et cuisson",
                  id: "R13F06SF09SS04",
                  slug: "autres-et-accessoires-et-cuisson",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cuisine/cuisson/autres-et-accessoires-et-cuisson",
                    target: "_self"
                  }
                }
              ],
              link: "/r/maison-loisir-textile/cuisine/cuisson"
            },
            {
              name: "Poubelles",
              id: "R13F06SF13",
              slug: "poubelles",
              link: "/r/maison-loisir-textile/cuisine/poubelles"
            }
          ]
        },
        {
          id: "R13F16",
          name: "Petit Ã©lectro-mÃ©nager et accessoires",
          link: "/r/maison-loisir-textile/petit-electro-menager-et-accessoires",
          visual:
            "/media/195x195/PhotositeArbo/R13F16_PhotoArbo_20181005_151229.png",
          children: [
            {
              name: "Carafe filtrantes et filtres",
              id: "R13F16SF01",
              slug: "carafe-filtrantes-et-filtres",
              link:
                "/r/maison-loisir-textile/petit-electro-menager-et-accessoires/carafe-filtrantes-et-filtres"
            },
            {
              name: "Cuisine et petit dÃ©jeuner",
              id: "R13F16SF02",
              slug: "cuisine-et-petit-dejeuner",
              link:
                "/r/maison-loisir-textile/petit-electro-menager-et-accessoires/cuisine-et-petit-dejeuner"
            },
            {
              name: "HygiÃ¨ne dentaire",
              id: "R13F16SF03",
              slug: "hygiene-dentaire",
              link:
                "/r/maison-loisir-textile/petit-electro-menager-et-accessoires/hygiene-dentaire"
            },
            {
              name: "Coiffure, rasage et Ã©pilation",
              id: "R13F16SF04",
              slug: "coiffure-rasage-et-epilation",
              link:
                "/r/maison-loisir-textile/petit-electro-menager-et-accessoires/coiffure-rasage-et-epilation"
            }
          ]
        },
        {
          id: "R13F09",
          name: "Bureau et papeterie",
          link: "/r/maison-loisir-textile/bureau-et-papeterie",
          visual:
            "/media/195x195/PhotositeArbo/R13F09_PhotoArbo_20190207_142456.png",
          children: [
            {
              name: "Ecriture et dessin",
              id: "R13F09SF05",
              slug: "ecriture-et-dessin",
              children: [
                {
                  name: "Stylos feutres ou roller",
                  id: "R13F09SF05SS01",
                  slug: "stylos-feutres-ou-roller",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/stylos-feutres-ou-roller",
                    target: "_self"
                  }
                },
                {
                  name: "Stylos bille",
                  id: "R13F09SF05SS02",
                  slug: "stylos-bille",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/stylos-bille",
                    target: "_self"
                  }
                },
                {
                  name: "Surligneurs",
                  id: "R13F09SF05SS03",
                  slug: "surligneurs",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/surligneurs",
                    target: "_self"
                  }
                },
                {
                  name: "Stylos plume et cartouches",
                  id: "R13F09SF05SS04",
                  slug: "stylos-plume-et-cartouches",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/stylos-plume-et-cartouches",
                    target: "_self"
                  }
                },
                {
                  name: "Effaceurs",
                  id: "R13F09SF05SS05",
                  slug: "effaceurs",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/effaceurs",
                    target: "_self"
                  }
                },
                {
                  name: "Crayons papiers, gommes et tailles-crayon",
                  id: "R13F09SF05SS06",
                  slug: "crayons-papiers-gommes-et-tailles-crayon",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/crayons-papiers-gommes-et-tailles-crayon",
                    target: "_self"
                  }
                },
                {
                  name: "Crayons de couleurs",
                  id: "R13F09SF05SS07",
                  slug: "crayons-de-couleurs",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/crayons-de-couleurs",
                    target: "_self"
                  }
                },
                {
                  name: "Feutres",
                  id: "R13F09SF05SS08",
                  slug: "feutres",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin/feutres",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bureau-et-papeterie/ecriture-et-dessin"
            },
            {
              name: "Cahiers et feuilles",
              id: "R13F09SF01",
              slug: "cahiers-et-feuilles",
              children: [
                {
                  name: "Cahiers",
                  id: "R13F09SF01SS01",
                  slug: "cahiers",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/cahiers-et-feuilles/cahiers",
                    target: "_self"
                  }
                },
                {
                  name: "Feuilles",
                  id: "R13F09SF01SS03",
                  slug: "feuilles",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/cahiers-et-feuilles/feuilles",
                    target: "_self"
                  }
                },
                {
                  name: "Papier dessin et spÃ©cial",
                  id: "R13F09SF01SS02",
                  slug: "papier-dessin-et-special",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/cahiers-et-feuilles/papier-dessin-et-special",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bureau-et-papeterie/cahiers-et-feuilles"
            },
            {
              name: "Classement et protection",
              id: "R13F09SF02",
              slug: "classement-et-protection",
              children: [
                {
                  name: "Classeurs et intercalaires",
                  id: "R13F09SF02SS01",
                  slug: "classeurs-et-intercalaires",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/classement-et-protection/classeurs-et-intercalaires",
                    target: "_self"
                  }
                },
                {
                  name: "Chemises et trieurs",
                  id: "R13F09SF02SS02",
                  slug: "chemises-et-trieurs",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/classement-et-protection/chemises-et-trieurs",
                    target: "_self"
                  }
                },
                {
                  name: "Protections",
                  id: "R13F09SF02SS03",
                  slug: "protections",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/classement-et-protection/protections",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bureau-et-papeterie/classement-et-protection"
            },
            {
              name: "Autre matÃ©riel scolaire",
              id: "R13F09SF06",
              slug: "autre-materiel-scolaire",
              children: [
                {
                  name: "Colle, adhÃ©sifs, oeuillets",
                  id: "R13F09SF06SS01",
                  slug: "colle-adhesifs-oeuillets",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/autre-materiel-scolaire/colle-adhesifs-oeuillets",
                    target: "_self"
                  }
                },
                {
                  name: "Equerre compas ...",
                  id: "R13F09SF06SS02",
                  slug: "equerre-compas",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/autre-materiel-scolaire/equerre-compas",
                    target: "_self"
                  }
                },
                {
                  name: "Peintures et ardoises",
                  id: "R13F09SF06SS03",
                  slug: "peintures-et-ardoises",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/autre-materiel-scolaire/peintures-et-ardoises",
                    target: "_self"
                  }
                },
                {
                  name: "Calculatrice",
                  id: "R13F09SF06SS04",
                  slug: "calculatrice",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/autre-materiel-scolaire/calculatrice",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bureau-et-papeterie/autre-materiel-scolaire"
            },
            {
              name: "Accessoires de bureau et ccorrespondance",
              id: "R13F09SF03",
              slug: "accessoires-de-bureau-et-ccorrespondance",
              children: [
                {
                  name: "Enveloppes et papier Ã  lettre",
                  id: "R13F09SF03SS01",
                  slug: "enveloppes-et-papier-a-lettre",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/accessoires-de-bureau-et-ccorrespondance/enveloppes-et-papier-a-lettre",
                    target: "_self"
                  }
                },
                {
                  name: "Autres matÃ©riels de bureau et maroquinerie ",
                  id: "R13F09SF03SS02",
                  slug: "autres-materiels-de-bureau-et-maroquinerie",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bureau-et-papeterie/accessoires-de-bureau-et-ccorrespondance/autres-materiels-de-bureau-et-maroquinerie",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bureau-et-papeterie/accessoires-de-bureau-et-ccorrespondance"
            }
          ]
        },
        {
          id: "R13F14",
          name: "Cartouche, Ã©lectronique et culture",
          link: "/r/maison-loisir-textile/cartouche-electronique-et-culture",
          visual:
            "/media/195x195/PhotositeArbo/R13F14_PhotoArbo_20181115_094117.png",
          children: [
            {
              name: "Cartouche et papier dâimpression",
              id: "R13F14SF01",
              slug: "cartouche-et-papier-d-impression",
              children: [
                {
                  name: "Cartouches",
                  id: "R13F14SF01SS01",
                  slug: "cartouches",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/cartouche-et-papier-d-impression/cartouches",
                    target: "_self"
                  }
                },
                {
                  name: "Papier d'impression",
                  id: "R13F14SF01SS02",
                  slug: "papier-d-impression",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/cartouche-et-papier-d-impression/papier-d-impression",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/cartouche-electronique-et-culture/cartouche-et-papier-d-impression"
            },
            {
              name: "Ãlectronique et son",
              id: "R13F14SF02",
              slug: "electronique-et-son",
              children: [
                {
                  name: "TÃ©lÃ©phonie",
                  id: "R13F14SF02SS01",
                  slug: "telephonie",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/electronique-et-son/telephonie",
                    target: "_self"
                  }
                },
                {
                  name: "Son",
                  id: "R13F14SF02SS02",
                  slug: "son",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/electronique-et-son/son",
                    target: "_self"
                  }
                },
                {
                  name: "Autres accessoires",
                  id: "R13F14SF02SS03",
                  slug: "autres-accessoires",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/electronique-et-son/autres-accessoires",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/cartouche-electronique-et-culture/electronique-et-son"
            },
            {
              name: "Culture et jeux vidÃ©os",
              id: "R13F14SF03",
              slug: "culture-et-jeux-videos",
              children: [
                {
                  name: "DVD et Blu Ray",
                  id: "R13F14SF03SS01",
                  slug: "dvd-et-blu-ray",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/culture-et-jeux-videos/dvd-et-blu-ray",
                    target: "_self"
                  }
                },
                {
                  name: "Livres",
                  id: "R13F14SF03SS02",
                  slug: "livres",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/culture-et-jeux-videos/livres",
                    target: "_self"
                  }
                },
                {
                  name: "Jeux vidÃ©os et logiciels",
                  id: "R13F14SF03SS03",
                  slug: "jeux-videos-et-logiciels",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/cartouche-electronique-et-culture/culture-et-jeux-videos/jeux-videos-et-logiciels",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/cartouche-electronique-et-culture/culture-et-jeux-videos"
            }
          ]
        },
        {
          id: "R13F11",
          name: "Bricolage, auto et jardin",
          link: "/r/maison-loisir-textile/bricolage-auto-et-jardin",
          visual:
            "/media/195x195/PhotositeArbo/R13F11_PhotoArbo_20170725_175109.png",
          children: [
            {
              name: "Bricolage",
              id: "R13F11SF01",
              slug: "bricolage",
              children: [
                {
                  name: "Nettoyage et dÃ©capage",
                  id: "R13F11SF01SS01",
                  slug: "nettoyage-et-decapage",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/bricolage/nettoyage-et-decapage",
                    target: "_self"
                  }
                },
                {
                  name: "Colles et adhÃ©sifs",
                  id: "R13F11SF01SS02",
                  slug: "colles-et-adhesifs",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/bricolage/colles-et-adhesifs",
                    target: "_self"
                  }
                },
                {
                  name: "Enduits et mastics",
                  id: "R13F11SF01SS03",
                  slug: "enduits-et-mastics",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/bricolage/enduits-et-mastics",
                    target: "_self"
                  }
                },
                {
                  name: "Outils",
                  id: "R13F11SF01SS04",
                  slug: "outils",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/bricolage/outils",
                    target: "_self"
                  }
                },
                {
                  name: "Peinture",
                  id: "R13F11SF01SS05",
                  slug: "peinture",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/bricolage/peinture",
                    target: "_self"
                  }
                },
                {
                  name: "Quincaillerie",
                  id: "R13F11SF01SS06",
                  slug: "quincaillerie",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/bricolage/quincaillerie",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bricolage-auto-et-jardin/bricolage"
            },
            {
              name: "Automobile",
              id: "R13F11SF02",
              slug: "automobile",
              children: [
                {
                  name: "Pare-brise et entretien",
                  id: "R13F11SF02SS01",
                  slug: "pare-brise-et-entretien",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/automobile/pare-brise-et-entretien",
                    target: "_self"
                  }
                },
                {
                  name: "Autres accessoires et prÃ©vention",
                  id: "R13F11SF02SS02",
                  slug: "autres-accessoires-et-prevention",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/automobile/autres-accessoires-et-prevention",
                    target: "_self"
                  }
                },
                {
                  name: "Lubrifiant essence",
                  id: "R13F11SF02SS03",
                  slug: "lubrifiant-essence",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/automobile/lubrifiant-essence",
                    target: "_self"
                  }
                },
                {
                  name: "Lubrifiant diesel",
                  id: "R13F11SF02SS04",
                  slug: "lubrifiant-diesel",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/automobile/lubrifiant-diesel",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bricolage-auto-et-jardin/automobile"
            },
            {
              name: "Jardin et entretien piscine",
              id: "R13F11SF03",
              slug: "jardin-et-entretien-piscine",
              children: [
                {
                  name: "Jardinage et plein air",
                  id: "R13F11SF03SS02",
                  slug: "jardinage-et-plein-air",

                  link: {
                    uri:
                      "/r/maison-loisir-textile/bricolage-auto-et-jardin/jardin-et-entretien-piscine/jardinage-et-plein-air",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/maison-loisir-textile/bricolage-auto-et-jardin/jardin-et-entretien-piscine"
            }
          ]
        },
        {
          id: "R13F10",
          name: "Textile et Cirage",
          link: "/r/maison-loisir-textile/textile-et-cirage",
          visual:
            "/media/195x195/PhotositeArbo/R13F10_PhotoArbo_20190207_142240.png",
          children: [
            {
              name: "Collants et bas",
              id: "R13F10SF01",
              slug: "collants-et-bas",
              link: "/r/maison-loisir-textile/textile-et-cirage/collants-et-bas"
            },
            {
              name: "Leggings et chaussettes",
              id: "R13F10SF06",
              slug: "leggings-et-chaussettes",
              link:
                "/r/maison-loisir-textile/textile-et-cirage/leggings-et-chaussettes"
            },
            {
              name: "Sous-vÃªtements et pyjamas",
              id: "R13F10SF05",
              slug: "sous-vetements-et-pyjamas",
              link:
                "/r/maison-loisir-textile/textile-et-cirage/sous-vetements-et-pyjamas"
            },
            {
              name: "Cirages",
              id: "R13F10SF03",
              slug: "cirages",
              link: "/r/maison-loisir-textile/textile-et-cirage/cirages"
            }
          ]
        },
        {
          id: "R13F15",
          name: "Jeux et Jouets",
          link: "/r/maison-loisir-textile/jeux-et-jouets",
          visual:
            "/media/195x195/PhotositeArbo/R13F15_PhotoArbo_20180925_124328.png",
          children: [
            {
              name: "Peluches",
              id: "R13F15SF05",
              slug: "peluches",
              link: "/r/maison-loisir-textile/jeux-et-jouets/peluches"
            },
            {
              name: "Jeux d'Ã©veil et 1er Ã¢ge",
              id: "R13F15SF01",
              slug: "jeux-d-eveil-et-1er-age",
              link:
                "/r/maison-loisir-textile/jeux-et-jouets/jeux-d-eveil-et-1er-age"
            },
            {
              name: "Jeux d'imitation",
              id: "R13F15SF03",
              slug: "jeux-d-imitation",
              link: "/r/maison-loisir-textile/jeux-et-jouets/jeux-d-imitation"
            },
            {
              name: "Jeux Ã©ducatifs et loisirs crÃ©atifs",
              id: "R13F15SF02",
              slug: "jeux-educatifs-et-loisirs-creatifs",
              link:
                "/r/maison-loisir-textile/jeux-et-jouets/jeux-educatifs-et-loisirs-creatifs"
            },
            {
              name: "Jeux de construction",
              id: "R13F15SF04",
              slug: "jeux-de-construction",
              link:
                "/r/maison-loisir-textile/jeux-et-jouets/jeux-de-construction"
            },
            {
              name: "Figurines et vÃ©hicules",
              id: "R13F15SF06",
              slug: "figurines-et-vehicules",
              link:
                "/r/maison-loisir-textile/jeux-et-jouets/figurines-et-vehicules"
            },
            {
              name: "Jeux de plein air",
              id: "R13F15SF07",
              slug: "jeux-de-plein-air",
              link: "/r/maison-loisir-textile/jeux-et-jouets/jeux-de-plein-air"
            }
          ]
        }
      ]
    },
    {
      id: "R14",
      name: "Animaux",

      link: "/r/animaux",
      icon: "/images/icons/main-navigation/R14.svg",
      children: [
        {
          id: "R14F01",
          name: "Chats",
          link: "/r/animaux/chats",
          visual:
            "/media/195x195/PhotositeArbo/R14F01_PhotoArbo_20181227_163035.png",
          children: [
            {
              name: "Sachets repas",
              id: "R14F01SF01",
              slug: "sachets-repas",
              link: "/r/animaux/chats/sachets-repas"
            },
            {
              name: "BoÃ®tes et barquettes chats",
              id: "R14F01SF02",
              slug: "boites-et-barquettes-chats",
              link: "/r/animaux/chats/boites-et-barquettes-chats"
            },
            {
              name: "Croquettes chats",
              id: "R14F01SF03",
              slug: "croquettes-chats",
              link: "/r/animaux/chats/croquettes-chats"
            },
            {
              name: "Friandises et laits",
              id: "R14F01SF04",
              slug: "friandises-et-laits",
              link: "/r/animaux/chats/friandises-et-laits"
            },
            {
              name: "LitiÃ¨re et accessoires",
              id: "R14F01SF05",
              slug: "litiere-et-accessoires",
              link: "/r/animaux/chats/litiere-et-accessoires"
            }
          ]
        },
        {
          id: "R14F02",
          name: "Chiens",
          link: "/r/animaux/chiens",
          visual:
            "/media/195x195/PhotositeArbo/R14F02_PhotoArbo_20181227_163058.png",
          children: [
            {
              name: "RÃ©compenses et hygiÃ¨ne dentaire",
              id: "R14F02SF03",
              slug: "recompenses-et-hygiene-dentaire",
              link: "/r/animaux/chiens/recompenses-et-hygiene-dentaire"
            },
            {
              name: "BoÃ®tes et barquettes chiens",
              id: "R14F02SF01",
              slug: "boites-et-barquettes-chiens",
              link: "/r/animaux/chiens/boites-et-barquettes-chiens"
            },
            {
              name: "Croquettes chiens",
              id: "R14F02SF02",
              slug: "croquettes-chiens",
              link: "/r/animaux/chiens/croquettes-chiens"
            },
            {
              name: "HygiÃ¨ne, soins et accessoires",
              id: "R14F02SF04",
              slug: "hygiene-soins-et-accessoires",
              link: "/r/animaux/chiens/hygiene-soins-et-accessoires"
            }
          ]
        },
        {
          id: "R14F03",
          name: "Autres animaux",
          link: "/r/animaux/autres-animaux",
          visual:
            "/media/195x195/PhotositeArbo/R14F03_PhotoArbo_20181227_162857.png",
          children: [
            {
              name: "Oiseaux et poules",
              id: "R14F03SF01",
              slug: "oiseaux-et-poules",
              link: "/r/animaux/autres-animaux/oiseaux-et-poules"
            },
            {
              name: "Poissons, rongeurs et autres",
              id: "R14F03SF02",
              slug: "poissons-rongeurs-et-autres",
              link: "/r/animaux/autres-animaux/poissons-rongeurs-et-autres"
            }
          ]
        }
      ]
    },

    {
      id: "N57",
      name: "Maison & intÃ©rieur",
      type: "category",
      link: "/r/maison-interieur",
      icon: "/images/icons/main-navigation/N57.svg",
      children: [
        {
          id: "N57F01",
          type: "category",
          name: "Chauffage",
          link: "/r/maison-interieur/chauffage",
          visual:
            "https://crf.media-rdc.com/medias/af9d83a3fe833e4e9251726e0e7f15cc/p_195x195/r2-chauffage.jpg",
          children: []
        },
        {
          id: "N57F02",
          type: "category",
          name: "Domotique, Communication & SÃ©curitÃ©",
          link: "/r/maison-interieur/domotique-communication-securite",
          visual:
            "https://crf.media-rdc.com/medias/48ca04d989ee3ffba944d61780faec9c/p_195x195/r2-domotique-communication-et-securite.jpg",
          children: []
        },
        {
          id: "N57F03",
          type: "category",
          name: "Linge de maison",
          link: "/r/maison-interieur/linge-de-maison",
          visual:
            "https://crf.media-rdc.com/medias/d4055d63e6d3328f94da56be3c0da3d6/p_195x195/r2-linge-de-maison.jpg",
          children: []
        }
      ]
    },
    {
      id: "N52",
      name: "Cuisine et arts de la table",
      type: "category",
      link: "/r/cuisine-et-arts-de-la-table",
      icon: "/images/icons/main-navigation/N52.svg",
      children: [
        {
          id: "N52F01",
          type: "category",
          name: "Art de la table",
          link: "/r/cuisine-et-arts-de-la-table/art-de-la-table",
          visual:
            "https://crf.media-rdc.com/medias/83484e17280f3840a03525e826f30c55/p_195x195/r2-art-de-la-table.jpg",
          children: []
        },
        {
          id: "N52F04",
          type: "category",
          name: "Ustensiles de cuisine",
          link: "/r/cuisine-et-arts-de-la-table/ustensiles-de-cuisine",
          visual:
            "https://crf.media-rdc.com/medias/99d82ab1f53c34c599369f918d7a7d5a/p_195x195/r2-ustensile-de-cuisine.jpg",
          children: [
            {
              name: "Cuisson spÃ©cifique",
              id: "N52F04SF05",
              slug: "cuisson-specifique",
              link:
                "/r/cuisine-et-arts-de-la-table/ustensiles-de-cuisine/cuisson-specifique"
            },
            {
              name: "Cuisson sur feux",
              id: "N52F04SF06",
              slug: "cuisson-sur-feux",
              link:
                "/r/cuisine-et-arts-de-la-table/ustensiles-de-cuisine/cuisson-sur-feux"
            },
            {
              name: "Ustensiles pour la boisson",
              id: "N52F04SF09",
              slug: "ustensiles-pour-la-boisson",
              link:
                "/r/cuisine-et-arts-de-la-table/ustensiles-de-cuisine/ustensiles-pour-la-boisson"
            }
          ]
        }
      ]
    },
    {
      id: "N61",
      name: "ElectromÃ©nager",
      type: "category",
      link: "/r/electromenager",
      icon: "/images/icons/main-navigation/N61.svg",
      children: [
        {
          id: "N61F01",
          type: "category",
          name: "Chauffage et climatisation",
          link: "/r/electromenager/chauffage-et-climatisation",
          visual:
            "https://crf.media-rdc.com/medias/498c153c58d5305c9467cc8c5389e1d6/p_195x195/r2-chauffage-et-climatisation.jpg",
          children: []
        },
        {
          id: "N61F03",
          type: "category",
          name: "Cuisson",
          link: "/r/electromenager/cuisson",
          visual:
            "https://crf.media-rdc.com/medias/9757a193d19a3aa0a6d08ee0aa4a35e9/p_195x195/r2-cuisson.jpg",
          children: [
            {
              name: "Appareil Ã  fondue",
              id: "N61F03SF02",
              slug: "appareil-a-fondue",
              link: "/r/electromenager/cuisson/appareil-a-fondue"
            },
            {
              name: "Cuiseur vapeur",
              id: "N61F03SF03",
              slug: "cuiseur-vapeur",
              link: "/r/electromenager/cuisson/cuiseur-vapeur"
            },
            {
              name: "CuisiniÃ¨re",
              id: "N61F03SF04",
              slug: "cuisiniere",
              link: "/r/electromenager/cuisson/cuisiniere"
            },
            {
              name: "Cuisson festive",
              id: "N61F03SF05",
              slug: "cuisson-festive",
              link: "/r/electromenager/cuisson/cuisson-festive"
            },
            {
              name: "Four micro-onde",
              id: "N61F03SF07",
              slug: "four-micro-onde",
              link: "/r/electromenager/cuisson/four-micro-onde"
            },
            {
              name: "Friteuse",
              id: "N61F03SF08",
              slug: "friteuse",
              link: "/r/electromenager/cuisson/friteuse"
            },
            {
              name: "Gaufrier, croque-monsieur",
              id: "N61F03SF09",
              slug: "gaufrier-croque-monsieur",
              link: "/r/electromenager/cuisson/gaufrier-croque-monsieur"
            },
            {
              name: "Mijoteur, wok, tajine",
              id: "N61F03SF11",
              slug: "mijoteur-wok-tajine",
              link: "/r/electromenager/cuisson/mijoteur-wok-tajine"
            },
            {
              name: "Mini-four",
              id: "N61F03SF12",
              slug: "mini-four",
              link: "/r/electromenager/cuisson/mini-four"
            },
            {
              name: "Pierrade, grill",
              id: "N61F03SF13",
              slug: "pierrade-grill",
              link: "/r/electromenager/cuisson/pierrade-grill"
            },
            {
              name: "Plancha",
              id: "N61F03SF14",
              slug: "plancha",
              link: "/r/electromenager/cuisson/plancha"
            },
            {
              name: "Raclette, crÃªpiÃ¨re",
              id: "N61F03SF15",
              slug: "raclette-crepiere",
              link: "/r/electromenager/cuisson/raclette-crepiere"
            },
            {
              name: "RÃ©chaud",
              id: "N61F03SF16",
              slug: "rechaud",
              link: "/r/electromenager/cuisson/rechaud"
            },
            {
              name: "Table de cuisson",
              id: "N61F03SF17",
              slug: "table-de-cuisson",
              link: "/r/electromenager/cuisson/table-de-cuisson"
            }
          ]
        },
        {
          id: "N61F04",
          type: "category",
          name: "Entretien des sols",
          link: "/r/electromenager/entretien-des-sols",
          visual:
            "https://crf.media-rdc.com/medias/454512f0b10d3a828c571d3ab5098e93/p_195x195/r2-entretien-sol.png",
          children: [
            {
              name: "Accessoire entretien des sols",
              id: "N61F04SF01",
              slug: "accessoire-entretien-des-sols",
              link:
                "/r/electromenager/entretien-des-sols/accessoire-entretien-des-sols"
            },
            {
              name: "Aspirateurs",
              id: "N61F04SF02",
              slug: "aspirateurs",
              link: "/r/electromenager/entretien-des-sols/aspirateurs"
            },
            {
              name: "Nettoyeur vapeur",
              id: "N61F04SF10",
              slug: "nettoyeur-vapeur",
              link: "/r/electromenager/entretien-des-sols/nettoyeur-vapeur"
            }
          ]
        },
        {
          id: "N61F05",
          type: "category",
          name: "Epilation & rasage",
          link: "/r/electromenager/epilation-rasage",
          visual:
            "https://crf.media-rdc.com/medias/50e2d713dde53077a24e6ab49ac80d3d/p_195x195/r2-epilation-et-rasage.jpg",
          children: [
            {
              name: "Epilateur",
              id: "N61F05SF01",
              slug: "epilateur",
              link: "/r/electromenager/epilation-rasage/epilateur"
            },
            {
              name: "Rasoir Ã©lectrique",
              id: "N61F05SF02",
              slug: "rasoir-electrique",
              link: "/r/electromenager/epilation-rasage/rasoir-electrique"
            },
            {
              name: "Tondeuse",
              id: "N61F05SF03",
              slug: "tondeuse",
              link: "/r/electromenager/epilation-rasage/tondeuse"
            }
          ]
        },
        {
          id: "N61F06",
          type: "category",
          name: "Froid",
          link: "/r/electromenager/froid",
          visual:
            "https://crf.media-rdc.com/medias/9b2309686cf034fb85f02152719796dd/p_195x195/r2-froid.jpg",
          children: [
            {
              name: "Cave Ã  vin",
              id: "N61F06SF02",
              slug: "cave-a-vin",
              link: "/r/electromenager/froid/cave-a-vin"
            },
            {
              name: "CongÃ©lateur",
              id: "N61F06SF03",
              slug: "congelateur",
              link: "/r/electromenager/froid/congelateur"
            },
            {
              name: "Machine Ã  biÃ¨re",
              id: "N61F06SF04",
              slug: "machine-a-biere",
              link: "/r/electromenager/froid/machine-a-biere"
            },
            {
              name: "RÃ©frigÃ©rateur",
              id: "N61F06SF07",
              slug: "refrigerateur",
              link: "/r/electromenager/froid/refrigerateur"
            }
          ]
        },
        {
          id: "N61F07",
          type: "category",
          name: "Lavage & SÃ©chage",
          link: "/r/electromenager/lavage-sechage",
          visual:
            "https://crf.media-rdc.com/medias/192628bf44e931c4ae1d0b97431433f3/p_195x195/r2-lavage-et-seche-linge.jpg",
          children: [
            {
              name: "Lave-linge",
              id: "N61F07SF02",
              slug: "lave-linge",
              link: "/r/electromenager/lavage-sechage/lave-linge"
            },
            {
              name: "Lave-vaisselle",
              id: "N61F07SF03",
              slug: "lave-vaisselle",
              link: "/r/electromenager/lavage-sechage/lave-vaisselle"
            },
            {
              name: "SÃ¨che-linge",
              id: "N61F07SF04",
              slug: "seche-linge",
              link: "/r/electromenager/lavage-sechage/seche-linge"
            }
          ]
        },
        {
          id: "N61F08",
          type: "category",
          name: "LuminothÃ©rapie",
          link: "/r/electromenager/luminotherapie",
          visual:
            "https://crf.media-rdc.com/medias/c230c5f3afff31ef9e34e7374e7db60f/p_195x195/r2-luminotherapie.png",
          children: []
        },
        {
          id: "N61F09",
          type: "category",
          name: "Petit dÃ©jeuner",
          link: "/r/electromenager/petit-dejeuner",
          visual:
            "https://crf.media-rdc.com/medias/7852f318e9193397891616327539a0f2/p_195x195/r2-petit-dejeuner.jpg",
          children: [
            {
              name: "Bouilloire",
              id: "N61F09SF02",
              slug: "bouilloire",
              link: "/r/electromenager/petit-dejeuner/bouilloire"
            },
            {
              name: "CafetiÃ¨re",
              id: "N61F09SF03",
              slug: "cafetiere",
              link: "/r/electromenager/petit-dejeuner/cafetiere"
            },
            {
              name: "Centrifugeuse",
              id: "N61F09SF04",
              slug: "centrifugeuse",
              link: "/r/electromenager/petit-dejeuner/centrifugeuse"
            },
            {
              name: "Extracteur de jus Ã©lectrique",
              id: "N61F09SF07",
              slug: "extracteur-de-jus-electrique",
              link:
                "/r/electromenager/petit-dejeuner/extracteur-de-jus-electrique"
            },
            {
              name: "Grille-pain",
              id: "N61F09SF08",
              slug: "grille-pain",
              link: "/r/electromenager/petit-dejeuner/grille-pain"
            },
            {
              name: "Presse-agrumes",
              id: "N61F09SF10",
              slug: "presse-agrumes",
              link: "/r/electromenager/petit-dejeuner/presse-agrumes"
            }
          ]
        },
        {
          id: "N61F11",
          type: "category",
          name: "PrÃ©paration culinaire",
          link: "/r/electromenager/preparation-culinaire",
          visual:
            "https://crf.media-rdc.com/medias/664719f4fb8830399595a2252c123423/p_195x195/r2-preparation-culinaire.png",
          children: [
            {
              name: "Blender",
              id: "N61F11SF03",
              slug: "blender",
              link: "/r/electromenager/preparation-culinaire/blender"
            },
            {
              name: "Hachoir",
              id: "N61F11SF04",
              slug: "hachoir",
              link: "/r/electromenager/preparation-culinaire/hachoir"
            },
            {
              name: "Machine Ã  pain",
              id: "N61F11SF05",
              slug: "machine-a-pain",
              link: "/r/electromenager/preparation-culinaire/machine-a-pain"
            },
            {
              name: "Mixeur, batteur",
              id: "N61F11SF06",
              slug: "mixeur-batteur",
              link: "/r/electromenager/preparation-culinaire/mixeur-batteur"
            },
            {
              name: "Robot multifonction",
              id: "N61F11SF07",
              slug: "robot-multifonction",
              link:
                "/r/electromenager/preparation-culinaire/robot-multifonction"
            },
            {
              name: "SorbetiÃ¨re",
              id: "N61F11SF08",
              slug: "sorbetiere",
              link: "/r/electromenager/preparation-culinaire/sorbetiere"
            },
            {
              name: "Trancheuse",
              id: "N61F11SF09",
              slug: "trancheuse",
              link: "/r/electromenager/preparation-culinaire/trancheuse"
            },
            {
              name: "Ustensile Ã©lectrique",
              id: "N61F11SF10",
              slug: "ustensile-electrique",
              link:
                "/r/electromenager/preparation-culinaire/ustensile-electrique"
            },
            {
              name: "YaourtiÃ¨re",
              id: "N61F11SF11",
              slug: "yaourtiere",
              link: "/r/electromenager/preparation-culinaire/yaourtiere"
            }
          ]
        },
        {
          id: "N61F12",
          type: "category",
          name: "Soin des cheveux",
          link: "/r/electromenager/soin-des-cheveux",
          visual:
            "https://crf.media-rdc.com/medias/8ddc924bb4eb3d348b60f24acd81ae4f/p_195x195/r2-soin-cheveux.jpg",
          children: [
            {
              name: "Brosses soufflantes",
              id: "N61F12SF02",
              slug: "brosses-soufflantes",
              link: "/r/electromenager/soin-des-cheveux/brosses-soufflantes"
            },
            {
              name: "Lisseur",
              id: "N61F12SF03",
              slug: "lisseur",
              link: "/r/electromenager/soin-des-cheveux/lisseur"
            },
            {
              name: "SÃ¨che-cheveux",
              id: "N61F12SF04",
              slug: "seche-cheveux",
              link: "/r/electromenager/soin-des-cheveux/seche-cheveux"
            }
          ]
        },
        {
          id: "N61F13",
          type: "category",
          name: "Soin du corps",
          link: "/r/electromenager/soin-du-corps",
          visual:
            "https://crf.media-rdc.com/medias/3c59a61762793998837602bec377da84/p_195x195/r2-soin-du-corps.png",
          children: [
            {
              name: "Appareil balnÃ©o",
              id: "N61F13SF01",
              slug: "appareil-balneo",
              link: "/r/electromenager/soin-du-corps/appareil-balneo"
            },
            {
              name: "Appareil manucure",
              id: "N61F13SF03",
              slug: "appareil-manucure",
              link: "/r/electromenager/soin-du-corps/appareil-manucure"
            },
            {
              name: "Appareil soin du visage",
              id: "N61F13SF05",
              slug: "appareil-soin-du-visage",
              link: "/r/electromenager/soin-du-corps/appareil-soin-du-visage"
            },
            {
              name: "Brosse Ã  dents Ã©lectrique",
              id: "N61F13SF06",
              slug: "brosse-a-dents-electrique",
              link: "/r/electromenager/soin-du-corps/brosse-a-dents-electrique"
            },
            {
              name: "PÃ¨se-personne",
              id: "N61F13SF08",
              slug: "pese-personne",
              link: "/r/electromenager/soin-du-corps/pese-personne"
            }
          ]
        },
        {
          id: "N61F14",
          type: "category",
          name: "Soin du linge",
          link: "/r/electromenager/soin-du-linge",
          visual:
            "https://crf.media-rdc.com/medias/45b7459484973f2a9ad66f9902d44c71/p_195x195/r2-soin-du-linge.jpg",
          children: [
            {
              name: "Centrale vapeur",
              id: "N61F14SF02",
              slug: "centrale-vapeur",
              link: "/r/electromenager/soin-du-linge/centrale-vapeur"
            },
            {
              name: "DÃ©froisseur vertical",
              id: "N61F14SF05",
              slug: "defroisseur-vertical",
              link: "/r/electromenager/soin-du-linge/defroisseur-vertical"
            },
            {
              name: "Fer Ã  repasser",
              id: "N61F14SF06",
              slug: "fer-a-repasser",
              link: "/r/electromenager/soin-du-linge/fer-a-repasser"
            },
            {
              name: "Machine Ã  coudre",
              id: "N61F14SF07",
              slug: "machine-a-coudre",
              link: "/r/electromenager/soin-du-linge/machine-a-coudre"
            }
          ]
        },
        {
          id: "N61F15",
          type: "category",
          name: "Traitement de l'air",
          link: "/r/electromenager/traitement-de-l-air",
          visual:
            "https://crf.media-rdc.com/medias/5578a281d3443586acdedfdc3c5d2252/p_195x195/r2-traitement-de-l-air.jpg",
          children: []
        }
      ]
    },
    {
      id: "N50",
      name: "Jardin & outdoor",
      type: "category",
      link: "/r/jardin-outdoor",
      icon: "/images/icons/main-navigation/N50.svg",
      children: [
        {
          id: "N50F01",
          type: "category",
          name: "AmÃ©nagement extÃ©rieur",
          link: "/r/jardin-outdoor/amenagement-exterieur",
          visual:
            "https://crf.media-rdc.com/medias/9be87d00857e3f3ba3cecba850e45dff/p_195x195/r2-amenagement-exterieur.jpg",
          children: [
            {
              name: "Terrasses & AllÃ©es",
              id: "N50F01SF07",
              slug: "terrasses-allees",
              link: "/r/jardin-outdoor/amenagement-exterieur/terrasses-allees"
            }
          ]
        },
        {
          id: "N50F03",
          type: "category",
          name: "Jardin",
          link: "/r/jardin-outdoor/jardin",
          visual:
            "https://crf.media-rdc.com/medias/d78f31e63eb33baf8fb59928fb6744ab/p_195x195/r2-jardin.jpg",
          children: [
            {
              name: "Barbecues",
              id: "N50F03SF02",
              slug: "barbecues",
              link: "/r/jardin-outdoor/jardin/barbecues"
            },
            {
              name: "Jeux d'enfants",
              id: "N50F03SF03",
              slug: "jeux-d-enfants",
              link: "/r/jardin-outdoor/jardin/jeux-d-enfants"
            }
          ]
        },
        {
          id: "N50F06",
          type: "category",
          name: "Piscine",
          link: "/r/jardin-outdoor/piscine",
          visual:
            "https://crf.media-rdc.com/medias/af8f6b4807743841b6449ddac394c0ad/p_195x195/r2-piscine.jpg",
          children: []
        }
      ]
    },
    {
      id: "N53",
      name: "Bricolage & auto",
      type: "category",
      link: "/r/bricolage-auto",
      icon: "/images/icons/main-navigation/N53.svg",
      children: [
        {
          id: "N53F01",
          type: "category",
          name: "Auto",
          link: "/r/bricolage-auto/auto",
          visual:
            "https://crf.media-rdc.com/medias/8dd42e3ab7b03060a352482e82fc91f9/p_195x195/auto.png",
          children: [
            {
              name: "Auto-radio, sono et video voiture",
              id: "N53F01SF13",
              slug: "auto-radio-sono-et-video-voiture",
              link: "/r/bricolage-auto/auto/auto-radio-sono-et-video-voiture"
            },
            {
              name: "GPS et aide Ã  la conduite",
              id: "N53F01SF14",
              slug: "gps-et-aide-a-la-conduite",
              link: "/r/bricolage-auto/auto/gps-et-aide-a-la-conduite"
            }
          ]
        },
        {
          id: "N53F06",
          type: "category",
          name: "Moto",
          link: "/r/bricolage-auto/moto",
          visual:
            "https://crf.media-rdc.com/medias/76769c98f1c636c9b47bd172340e06f6/p_195x195/r2-moto.jpg",
          children: []
        }
      ]
    },
    {
      id: "N55",
      name: "BeautÃ©, entretien et  propretÃ©",
      type: "category",
      link: "/r/beaute-entretien-et-proprete",
      icon: "/images/icons/main-navigation/N55.svg",
      children: [
        {
          id: "N55F01",
          type: "category",
          name: "BeautÃ© / SantÃ©",
          link: "/r/beaute-entretien-et-proprete/beaute-sante",
          visual:
            "https://crf.media-rdc.com/medias/9c72ca64ca513655b48c337db6cd91b6/p_195x195/r2-beaute-et-sante.jpg",
          children: [
            {
              name: "Coiffure & Soins des cheveux",
              id: "N55F01SF02",
              slug: "coiffure-soins-des-cheveux",
              link:
                "/r/beaute-entretien-et-proprete/beaute-sante/coiffure-soins-des-cheveux"
            },
            {
              name: "Rasage et Ã©pilation",
              id: "N55F01SF04",
              slug: "rasage-et-epilation",
              children: [
                {
                  name: "Rasoirs, tondeuses",
                  id: "N55F01SF04SSF03",
                  slug: "rasoirs-tondeuses",

                  link: {
                    uri:
                      "/r/beaute-entretien-et-proprete/beaute-sante/rasage-et-epilation/rasoirs-tondeuses",
                    target: "_self"
                  }
                },
                {
                  name: "Soins et accessoires",
                  id: "N55F01SF04SSF04",
                  slug: "soins-et-accessoires",

                  link: {
                    uri:
                      "/r/beaute-entretien-et-proprete/beaute-sante/rasage-et-epilation/soins-et-accessoires",
                    target: "_self"
                  }
                }
              ],
              link:
                "/r/beaute-entretien-et-proprete/beaute-sante/rasage-et-epilation"
            },
            {
              name: "Manucure & PÃ©dicure",
              id: "N55F01SF06",
              slug: "manucure-pedicure",
              link:
                "/r/beaute-entretien-et-proprete/beaute-sante/manucure-pedicure"
            }
          ]
        },
        {
          id: "N55F02",
          type: "category",
          name: "Entretien et PropretÃ©",
          link: "/r/beaute-entretien-et-proprete/entretien-et-proprete",
          visual:
            "https://crf.media-rdc.com/medias/27670d0931fa3ade9eb1e1be7fe85d9e/p_195x195/r2-entretien-et-proprete.png",
          children: [
            {
              name: "MatÃ©riel de nettoyage",
              id: "N55F02SF02",
              slug: "materiel-de-nettoyage",
              link:
                "/r/beaute-entretien-et-proprete/entretien-et-proprete/materiel-de-nettoyage"
            },
            {
              name: "Produits d'entretien",
              id: "N55F02SF03",
              slug: "produits-d-entretien",
              link:
                "/r/beaute-entretien-et-proprete/entretien-et-proprete/produits-d-entretien"
            }
          ]
        }
      ]
    },
    {
      id: "N54",
      name: "Bagagerie, sport et loisirs",
      type: "category",
      link: "/r/bagagerie-sport-et-loisirs",
      icon: "/images/icons/main-navigation/N54.svg",
      children: [
        {
          id: "N54F21",
          type: "category",
          name: "Natation et sports nautiques",
          link: "/r/bagagerie-sport-et-loisirs/natation-et-sports-nautiques",
          visual:
            "https://crf.media-rdc.com/medias/945be3bc6b2531a4a0946cd172fbf68c/p_195x195/r2-natation.png",
          children: []
        },
        {
          id: "N54F26",
          type: "category",
          name: "RandonnÃ©e",
          link: "/r/bagagerie-sport-et-loisirs/randonnee",
          visual:
            "https://crf.media-rdc.com/medias/b48d4148040c36239884f5cb037b910f/p_195x195/r2-randonnee.jpg",
          children: []
        }
      ]
    },
    {
      id: "N63",
      name: "TÃ©lÃ©phonie et objets connectÃ©s",
      type: "category",
      link: "/r/telephonie-et-objets-connectes",
      icon: "/images/icons/main-navigation/N63.svg",
      children: [
        {
          id: "N63F01",
          type: "category",
          name: "Objets connectÃ©s",
          link: "/r/telephonie-et-objets-connectes/objets-connectes",
          visual:
            "https://crf.media-rdc.com/medias/379bd6179c613859a9142449cea0fcb9/p_195x195/r2-objet-connecte.jpg",
          children: [
            {
              name: "SantÃ© et bien Ãªtre connectÃ©e",
              id: "N63F01SF04",
              slug: "sante-et-bien-etre-connectee",
              link:
                "/r/telephonie-et-objets-connectes/objets-connectes/sante-et-bien-etre-connectee"
            }
          ]
        },
        {
          id: "N63F02",
          type: "category",
          name: "TÃ©lÃ©phonie & smartphones",
          link: "/r/telephonie-et-objets-connectes/telephonie-smartphones",
          visual:
            "https://crf.media-rdc.com/medias/87315004203a31cc937db4e754d58776/p_195x195/r2-telephonie.png",
          children: []
        }
      ]
    },
    {
      id: "N60",
      name: "Image et Son",
      type: "category",
      link: "/r/image-et-son",
      icon: "/images/icons/main-navigation/N60.svg",
      children: [
        {
          id: "N60F02",
          type: "category",
          name: "Hifi et enceintes",
          link: "/r/image-et-son/hifi-et-enceintes",
          visual:
            "https://crf.media-rdc.com/medias/f98bca018fc23cee9602d31454d0244a/p_195x195/r2-hifi.png",
          children: [
            {
              name: "ChaÃ®nes Hifi et jukebox",
              id: "N60F02SF03",
              slug: "chaines-hifi-et-jukebox",
              link: "/r/image-et-son/hifi-et-enceintes/chaines-hifi-et-jukebox"
            },
            {
              name: "Enceintes Hifi",
              id: "N60F02SF05",
              slug: "enceintes-hifi",
              link: "/r/image-et-son/hifi-et-enceintes/enceintes-hifi"
            },
            {
              name: "Platine",
              id: "N60F02SF08",
              slug: "platine",
              link: "/r/image-et-son/hifi-et-enceintes/platine"
            },
            {
              name: "Microphone",
              id: "N60F02SF07",
              slug: "microphone",
              link: "/r/image-et-son/hifi-et-enceintes/microphone"
            }
          ]
        },
        {
          id: "N60F04",
          type: "category",
          name: "MP3, MP4 et Son NumÃ©rique",
          link: "/r/image-et-son/mp3-mp4-et-son-numerique",
          visual:
            "https://crf.media-rdc.com/medias/079de95cbe66333bb7dd85f66d1aad4f/p_195x195/r2-mp3-et-numerisation.png",
          children: [
            {
              name: "Ecouteurs et casques audio",
              id: "N60F04SF01",
              slug: "ecouteurs-et-casques-audio",
              link:
                "/r/image-et-son/mp3-mp4-et-son-numerique/ecouteurs-et-casques-audio"
            },
            {
              name: "Docking et radio",
              id: "N60F04SF03",
              slug: "docking-et-radio",
              link: "/r/image-et-son/mp3-mp4-et-son-numerique/docking-et-radio"
            },
            {
              name: "MP3",
              id: "N60F04SF05",
              slug: "mp3",
              link: "/r/image-et-son/mp3-mp4-et-son-numerique/mp3"
            },
            {
              name: "Dictaphone",
              id: "N60F04SF02",
              slug: "dictaphone",
              link: "/r/image-et-son/mp3-mp4-et-son-numerique/dictaphone"
            }
          ]
        },
        {
          id: "N60F06",
          type: "category",
          name: "Photo & VidÃ©o NumÃ©rique",
          link: "/r/image-et-son/photo-video-numerique",
          visual:
            "https://crf.media-rdc.com/medias/883d5ffaee6d34ecbf968f956b7da543/p_195x195/r2-photo-et-video-numerique.jpg",
          children: []
        },
        {
          id: "N60F07",
          type: "category",
          name: "TV et Lecteurs DVD",
          link: "/r/image-et-son/tv-et-lecteurs-dvd",
          visual:
            "https://crf.media-rdc.com/medias/3823d0cde44e3a4f83517e09ff3b4222/p_195x195/r2-tv-et-lecteur-dvd.jpg",
          children: [
            {
              name: "TV",
              id: "N60F07SF11",
              slug: "tv",
              link: "/r/image-et-son/tv-et-lecteurs-dvd/tv"
            },
            {
              name: "Home-cinÃ©ma",
              id: "N60F07SF03",
              slug: "home-cinema",
              link: "/r/image-et-son/tv-et-lecteurs-dvd/home-cinema"
            },
            {
              name: "Lecteur DVD - Enregistreurs DVD- Blu-ray",
              id: "N60F07SF04",
              slug: "lecteur-dvd-enregistreurs-dvd-blu-ray",
              link:
                "/r/image-et-son/tv-et-lecteurs-dvd/lecteur-dvd-enregistreurs-dvd-blu-ray"
            },
            {
              name: "Support Fixations et  Meuble TV",
              id: "N60F07SF06",
              slug: "support-fixations-et-meuble-tv",
              link:
                "/r/image-et-son/tv-et-lecteurs-dvd/support-fixations-et-meuble-tv"
            }
          ]
        },
        {
          id: "N60F01",
          type: "category",
          name: "Eclairage de soirÃ©e",
          link: "/r/image-et-son/eclairage-de-soiree",
          visual:
            "https://crf.media-rdc.com/medias/2d794cf35de23273a9a8dbc8849aed74/p_195x195/r2-eclairage-de-soiree.jpg",
          children: []
        },
        {
          id: "N60F07SF08",
          type: "category",
          name: "TNT (TÃ©lÃ©vision NumÃ©rique Terrestre)",
          link: "/r/image-et-son/tnt-television-numerique-terrestre",
          visual: null,
          children: []
        }
      ]
    },
    {
      id: "N58",
      name: "Informatique & bureau",
      type: "category",
      link: "/r/informatique-bureau",
      icon: "/images/icons/main-navigation/N58.svg",
      children: [
        {
          id: "N58F05",
          type: "category",
          name: "Ordinateurs",
          link: "/r/informatique-bureau/ordinateurs",
          visual:
            "https://crf.media-rdc.com/medias/91238c9db47734669e62d5514760e661/p_195x195/r2-ordinateur.jpg",
          children: [
            {
              name: "Ordinateur de Bureau",
              id: "N58F05SF01",
              slug: "ordinateur-de-bureau",
              link: "/r/informatique-bureau/ordinateurs/ordinateur-de-bureau"
            },
            {
              name: "Ordinateur Portable",
              id: "N58F05SF02",
              slug: "ordinateur-portable",
              link: "/r/informatique-bureau/ordinateurs/ordinateur-portable"
            },
            {
              name: "Tablette tactile",
              id: "N58F05SF04",
              slug: "tablette-tactile",
              link: "/r/informatique-bureau/ordinateurs/tablette-tactile"
            }
          ]
        },
        {
          id: "N58F06",
          type: "category",
          name: "PÃ©riphÃ©riques, rÃ©seaux et wifi",
          link: "/r/informatique-bureau/peripheriques-reseaux-et-wifi",
          visual:
            "https://crf.media-rdc.com/medias/a38fb185b2fc36c48156d1767bf7b539/p_195x195/r2-peripherie-reseaux-et-wifi.png",
          children: [
            {
              name: "Accessoires gamer",
              id: "N58F06SF01",
              slug: "accessoires-gamer",
              link:
                "/r/informatique-bureau/peripheriques-reseaux-et-wifi/accessoires-gamer"
            },
            {
              name: "Clavier-souris-tablette",
              id: "N58F06SF03",
              slug: "clavier-souris-tablette",
              link:
                "/r/informatique-bureau/peripheriques-reseaux-et-wifi/clavier-souris-tablette"
            },
            {
              name: "Ecran",
              id: "N58F06SF05",
              slug: "ecran",
              link: "/r/informatique-bureau/peripheriques-reseaux-et-wifi/ecran"
            },
            {
              name: "Enceinte MultimÃ©dia",
              id: "N58F06SF06",
              slug: "enceinte-multimedia",
              link:
                "/r/informatique-bureau/peripheriques-reseaux-et-wifi/enceinte-multimedia"
            },
            {
              name: "Imprimantes et scanners",
              id: "N58F06SF08",
              slug: "imprimantes-et-scanners",
              link:
                "/r/informatique-bureau/peripheriques-reseaux-et-wifi/imprimantes-et-scanners"
            },
            {
              name: "Reseaux",
              id: "N58F06SF11",
              slug: "reseaux",
              link:
                "/r/informatique-bureau/peripheriques-reseaux-et-wifi/reseaux"
            },
            {
              name: "TNT/Acquisition",
              id: "N58F06SF15",
              slug: "tnt-acquisition",
              link:
                "/r/informatique-bureau/peripheriques-reseaux-et-wifi/tnt-acquisition"
            },
            {
              name: "Webcam",
              id: "N58F06SF16",
              slug: "webcam",
              link:
                "/r/informatique-bureau/peripheriques-reseaux-et-wifi/webcam"
            }
          ]
        },
        {
          id: "N58F01",
          type: "category",
          name: "Composants et stockage",
          link: "/r/informatique-bureau/composants-et-stockage",
          visual:
            "https://crf.media-rdc.com/medias/1ff1553d19ba36debdb9fa0476df2728/p_195x195/r2-composant.png",
          children: [
            {
              name: "ClÃ© USB",
              id: "N58F01SF10",
              slug: "cle-usb",
              link: "/r/informatique-bureau/composants-et-stockage/cle-usb"
            },
            {
              name: "Disques durs",
              id: "N58F01SF11",
              slug: "disques-durs",
              link: "/r/informatique-bureau/composants-et-stockage/disques-durs"
            },
            {
              name: "Graveur",
              id: "N58F01SF15",
              slug: "graveur",
              link: "/r/informatique-bureau/composants-et-stockage/graveur"
            },
            {
              name: "Carte mÃ©moire",
              id: "N58F01SF07",
              slug: "carte-memoire",
              link:
                "/r/informatique-bureau/composants-et-stockage/carte-memoire"
            },
            {
              name: "Autres composants",
              id: "N58F01SF01",
              slug: "autres-composants",
              link:
                "/r/informatique-bureau/composants-et-stockage/autres-composants"
            }
          ]
        }
      ]
    },
    {
      id: "N59",
      name: "Culture et jeux vidÃ©os",
      type: "category",
      link: "/r/culture-et-jeux-videos",
      icon: "/images/icons/main-navigation/N59.svg",
      children: [
        {
          id: "N59F02",
          type: "category",
          name: "Jeux et Consoles",
          link: "/r/culture-et-jeux-videos/jeux-et-consoles",
          visual:
            "https://crf.media-rdc.com/medias/b0f682f5d64033c4bf42260aa17672d6/p_195x195/r2-jeux-et-console.png",
          children: [
            {
              name: "Consoles",
              id: "N59F02SF04",
              slug: "consoles",
              link: "/r/culture-et-jeux-videos/jeux-et-consoles/consoles"
            },
            {
              name: "Jeux de consoles",
              id: "N59F02SF07",
              slug: "jeux-de-consoles",
              link:
                "/r/culture-et-jeux-videos/jeux-et-consoles/jeux-de-consoles"
            },
            {
              name: "Accessoires pour consoles",
              id: "N59F02SF05",
              slug: "accessoires-pour-consoles",
              link:
                "/r/culture-et-jeux-videos/jeux-et-consoles/accessoires-pour-consoles"
            },
            {
              name: "Goodies",
              id: "N59F02SF02",
              slug: "goodies",
              link: "/r/culture-et-jeux-videos/jeux-et-consoles/goodies"
            },
            {
              name: "Accessoires Universels",
              id: "N59F02SF01",
              slug: "accessoires-universels",
              link:
                "/r/culture-et-jeux-videos/jeux-et-consoles/accessoires-universels"
            }
          ]
        }
      ]
    },
    {
      id: "N62",
      name: "Jeux et Jouets",
      type: "category",
      link: "/r/jeux-et-jouets",
      icon: "/images/icons/main-navigation/N62.svg",
      children: [
        {
          id: "N62F03",
          type: "category",
          name: "Figurines",
          link: "/r/jeux-et-jouets/figurines",
          visual:
            "https://crf.media-rdc.com/medias/dc77c8b2362e382a9c1414749b9a0198/p_195x195/r2-figurine.jpg",
          children: []
        },
        {
          id: "N62F04",
          type: "category",
          name: "Jeux artistiques",
          link: "/r/jeux-et-jouets/jeux-artistiques",
          visual:
            "https://crf.media-rdc.com/medias/8d5005179616388cb31c08582238e98d/p_195x195/r2-jeux-artistique.jpg",
          children: []
        },
        {
          id: "N62F08",
          type: "category",
          name: "Jeux de sociÃ©tÃ©",
          link: "/r/jeux-et-jouets/jeux-de-societe",
          visual:
            "https://crf.media-rdc.com/medias/9940f3a43dea3f9f989a3673fe9b55de/p_195x195/r2-jeux-de-societe.jpg",
          children: []
        },
        {
          id: "N62F09",
          type: "category",
          name: "Jeux d'imitation",
          link: "/r/jeux-et-jouets/jeux-d-imitation",
          visual:
            "https://crf.media-rdc.com/medias/a9282e8b5cf7315f9faad381ff63b145/p_195x195/r2-jeux-d-imitation.png",
          children: []
        },
        {
          id: "N62F14",
          type: "category",
          name: "MultimÃ©dia",
          link: "/r/jeux-et-jouets/multimedia",
          visual:
            "https://crf.media-rdc.com/medias/9e270fafb63037c7997a1a3e5a29d7a6/p_195x195/multimedia.png",
          children: []
        }
      ]
    },
    {
      id: "N64",
      name: "PuÃ©riculture",
      type: "category",
      link: "/r/puericulture",
      icon: "/images/icons/main-navigation/N64.svg",
      children: [
        {
          id: "N64F01",
          type: "category",
          name: "Chambre bÃ©bÃ©",
          link: "/r/puericulture/chambre-bebe",
          visual:
            "https://crf.media-rdc.com/medias/e57fda9e8c3c38319d8e832e8b4d2a4c/p_195x195/r2-chambre-du-bebe.png",
          children: []
        },
        {
          id: "N64F02",
          type: "category",
          name: "La sÃ©curitÃ©",
          link: "/r/puericulture/la-securite",
          visual:
            "https://crf.media-rdc.com/medias/1e975006e43b38e9862cdc9b0e74fcd0/p_195x195/r2-securite.jpg",
          children: []
        }
      ]
    }
  ]
};

export default data;
