const headerUtil = () => {

    return {
        method: "GET",
        mode: 'cors',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImllbTVQQXlWVXUxQ19uc1hfamJvRFZWZTA4ND0iLCJ0eXBlIjoyLCJncmFudFR5cGUiOjQsInJvbGVUeXBlIjoyLCJleHAiOjE1NjkxNDE3NjIsImlhdCI6MTU2OTE0MTQ2Mn0.bXN2K6CefonKPnNP9uqUlRNjfRS7eGmL0xm2ZuFGlOveQZzp4tRfoPNMigCkGNk8qbE5zTqbtkuyzbZ74TLHnQXTZpXlAeYQhHj8NkHW0GkPXBel5pj0pAl28A0hT7KIgQdZCHQkt-R2cgiz6fBNu_RwlFUqguupYcZTd43eiu0'
        },
        body:null,
    };
};

export default headerUtil;