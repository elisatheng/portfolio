export default {
    name: 'Course',

    data: () => ({
        title: 'Mon parcours',
        timelines: [
            {
                icon: 'mdi-school',
                title: 'Licence LLCER Chinois, parcours Traitement Numérique Multilingue',
                infos: {
                    date: 'Septembre 2013 - Juin 2016',
                },
                texts: {
                    place: 'INALCO - Langues O\' (Paris XIIIe)',
                },
            },
            {
                icon: 'mdi-school',
                title: 'Titre d\'Intégrateur / Développeur web',
                infos: {
                    date: 'Novembre 2016 - Septembre 2018',
                },
                texts: {
                    place: 'Web@cademie - Ambition Féminine (by Epitech) (Paris IIIe)',
                },
            },
            {
                icon: 'mdi-briefcase',
                title: 'Développeuse web junior',
                infos: {
                    date: 'Septembre 2017 - Septembre 2018',
                    type: '[alternance]',
                },
                texts: {
                    place: 'IONIS Education Group (Paris IIIe)',
                    stack: 'C# / ASP.NET MVC / AngularJS / WordPress / Plugin WordPress / Salesforce / Apex',
                },
            },
            {
                icon: 'mdi-briefcase',
                title: 'Développeuse PHP Symfony',
                infos: {
                    date: 'Decembre 2018 - Juin 2019',
                    type: '[CDI]',
                },
                texts: {
                    place: 'ALIECOM (Paris XVe)',
                    stack: 'PHP / Symfony / Bootstrap / jQuery / SQL / Plugin WordPress / Unix Shell',
                },
            },
            {
                icon: 'mdi-briefcase',
                title: 'Développeuse back-end',
                infos: {
                    date: 'Octobre 2019 - Aujourd\'hui',
                    type: '[CDI]',
                },
                texts: {
                    place: 'Meero (Paris IIe)',
                    stack: 'PHP / Symfony / Messenger component / Elasticsearch / PHPUnit / SQL / Docker',
                },
            },
        ],
    }),
}