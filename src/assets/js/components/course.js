export default {
    name: 'Course',

    methods: {
        initFilters() {
            document.querySelectorAll('.pfl-course__btn-filter').forEach(btn => {
                if (btn.classList.contains('grey')) {
                    btn.classList.remove('grey')
                    btn.classList.remove('darken-1')
                    btn.classList.add('black')
                }
            })
            document.querySelectorAll('.pfl-course__item').forEach(item => {
                if (item.classList.contains('d-none')) {
                    item.classList.remove('d-none')
                }
            })
        },

        filterCourse(type) {
            this.initFilters()

            const $btnFilter = document.querySelector('.pfl-course__btn-filter[data-filter-type="'+type+'"]')
            $btnFilter.classList.remove('black')
            $btnFilter.classList.add('grey')
            $btnFilter.classList.add('darken-1')

            if (type === 'all') {
                return
            }

            document.querySelectorAll('.pfl-course__item:not([data-course-type="'+type+'"])').forEach(item => {
                item.classList.add('d-none')
            })
        },
    },

    data: () => ({
        title: 'Mon parcours',
        timelines: [
            {
                type: 'work',
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
            {
                type: 'work',
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
                type: 'work',
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
                type: 'school',
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
                type: 'school',
                icon: 'mdi-school',
                title: 'Licence LLCER Chinois, parcours Traitement Numérique Multilingue',
                infos: {
                    date: 'Septembre 2013 - Juin 2016',
                },
                texts: {
                    place: 'INALCO - Langues O\' (Paris XIIIe)',
                },
            },
        ],
    }),
}