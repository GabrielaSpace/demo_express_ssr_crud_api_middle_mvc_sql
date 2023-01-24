const queries = {
    getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,
    getAllEntries: `SELECT * FROM entries;`,
    createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    deleteEntry:`FROM entries AS e
    WHERE e.title=$1,`,
    updateEntry:`UPDATE titles
    SET title = 'Nuevo titulo'
    WHERE title=$1,`,
    getAuthors:`SELECT a.id_author,a.name,a.surname,a.email,a.image
    FROM authors AS a
    ORDER BY a.id_author`
}
module.exports = queries;
DELETE 

