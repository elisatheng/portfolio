export default {
    name: 'Course',

    data: () => ({
        isMobile: window.innerWidth <= 960,
        title: 'Parcours',
        timelines: [
            {
                type: 'work',
                icon: 'mdi-briefcase',
                title: 'Développeuse Back-End',
                period: 'Mai 2021 — Aujourd\'hui',
                duration: '~5 ans',
                contract: 'CDI',
                place: 'Kls - Paris 8e',
                texts: {
                    stack: 'PHP - Symfony - API Platform - PHPUnit - SQL - Docker - Ansible - Terraform - Claude Code',
                },
            },
            {
                type: 'work',
                icon: 'mdi-briefcase',
                title: 'Développeuse Back-End',
                period: 'Oct. 2019 — Fév. 2021',
                duration: '1 an 4 mois',
                contract: 'CDI',
                place: 'Meero - Paris 2e',
                texts: {
                    stack: 'PHP - Symfony - Messenger - Elasticsearch - PHPUnit - SQL - Docker',
                },
            },
            {
                type: 'work',
                icon: 'mdi-briefcase',
                title: 'Développeuse PHP Symfony',
                period: 'Déc. 2018 — Juin 2019',
                duration: '7 mois',
                contract: 'CDI',
                place: 'Aliecom - Paris 15e',
                texts: {
                    stack: 'PHP - Symfony - Bootstrap - jQuery - SQL - WordPress',
                },
            },
            {
                type: 'work',
                icon: 'mdi-briefcase',
                title: 'Développeuse web junior',
                period: 'Sept. 2017 — Sept. 2018',
                duration: '1 an',
                contract: 'Alternance',
                place: 'IONIS Education Group - Paris 3e',
                texts: {
                    stack: 'C# - ASP.NET MVC - AngularJS - WordPress - Salesforce - Apex',
                },
            },
            {
                type: 'school',
                icon: 'mdi-school',
                title: 'Certificat Développeur Intégrateur Web',
                period: 'Oct. 2016 — Sept. 2018',
                duration: '2 ans',
                contract: null,
                place: 'Web@cadémie by Epitech - Paris 3e',
                texts: {},
            },
            {
                type: 'school',
                icon: 'mdi-school',
                title: 'Licence LLCER Chinois,\nparcours Traitement Numérique Multilingue',
                period: 'Sept. 2013 — Juin 2016',
                duration: '3 ans',
                contract: null,
                place: 'INALCO Langues O\' - Paris 13e',
                texts: {},
            },
        ],
    }),

    mounted() {
        this._onResize = () => { this.isMobile = window.innerWidth <= 960 }
        window.addEventListener('resize', this._onResize)
    },

    beforeUnmount() {
        window.removeEventListener('resize', this._onResize)
    },
}
