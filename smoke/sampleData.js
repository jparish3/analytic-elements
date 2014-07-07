(function () {

    window.dashboards = [
        {
            name: 'Solr Dashboard',
            id: 'food',
            theme: 'green',
            analytics: [
                {
                    type: 'solr',
                    name: 'By Category',
                    baseUrl: 'http://localhost:8983/solr/',
                    chartType: 'Bar',
                    limit: 8,
                    query: {
                        select: [{expr:'cat'}],
                        from: 'collection1'
                    }
                },
                {
                    type: 'solr',
                    name: 'By Manufacturer',
                    baseUrl: 'http://localhost:8983/solr/',
                    chartType: 'Doughnut',
                    limit: 8,
                    query: {
                        select: [{expr:'manu_id_s'}],
                        from: 'collection1'
                    }
                }
            ]
        },
        {
            name: 'Dashboard 1',
            id: 'knowledge',
            theme: 'lightgrey',
            analytics: []
        },
        {
            name: 'Dashboard 2',
            id: 'history',
            theme: "blue",
            analytics: []
        },
        {
            name: 'Dashboard 3',
            id: "geography",
            theme: "grey",
            analytics: []
        },
        {
            name: 'Dashboard 4',
            id: "science",
            theme: "green",
            analytics: []
        },
        {
            name: 'Dashboard 5',
            id: "tvmovies",
            theme: "grey",
            analytics: []
        },
        {
            name: 'Dashboard 6',
            id: "music",
            theme: "blue",
            analytics: []
        },
        {
            name: 'Dashboard 7',
            id: "entertainment",
            theme: "grey",
            analytics: []
        },
        {
            name: 'Dashboard Z',
            id: "sports",
            theme: "blue",
            analytics: []
        }
    ];

})();
