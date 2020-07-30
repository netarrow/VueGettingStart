 const MyDemoLocalComponent = {
    data: function() {
        return {
            first_name: 'Name',
            last_name: 'LastName'
        }
    },
    template: `
        <p>Hi my name is {{first_name}} {{last_name}}</p>
    `
}