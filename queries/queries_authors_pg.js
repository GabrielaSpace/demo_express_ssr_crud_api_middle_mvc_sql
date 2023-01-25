const queries_authors = {
    
    getAuthors:`SELECT a.id_author,a.name,a.surname,a.email,a.image
    FROM authors AS a
    ORDER BY a.id_author`,
    getAllAuthors: `SELECT a.name, a.surname, a.email, a.image
    FROM authors AS a
    ORDER BY a.name;`,
    createAuthors:`INSERT INTO authors(name,surname,email,image) 
    VALUES ($1,$2,$3,$4);`,
    deleteAuthors:`DELETE FROM authors 
    WHERE authors.email=$1`,
    updateAuthors:`UPDATE authors
    SET  email =$1, image =$2
    WHERE email =$3;`

}

module.exports = queries_authors;