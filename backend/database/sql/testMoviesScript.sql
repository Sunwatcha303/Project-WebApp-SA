DROP TABLE score_movies;
DROP TABLE movies;

-- Create the movies table
CREATE TABLE movies (
    hash_id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    release_date DATE,
    duration INT,
    cover_url VARCHAR(255),
    rate_age VARCHAR(5)
);

CREATE TABLE score_movies (
    hash_id VARCHAR(36) PRIMARY KEY,
    score  DECIMAL(3,2),
    FOREIGN KEY (hash_id) REFERENCES movies(hash_id)
);

-- Insert data into the movies table
INSERT INTO movies (hash_id, name, description, release_date, duration, cover_url, rate_age) VALUES
('032c4046-74b6-4b8d-b7b7-283eb7d5c56a', 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.', '2004-06-04', 142, 'https://media.harrypotterfanzone.com/prisoner-of-azkaban-theatrical-poster-3.jpg', '16+'),
('06a9662e-e2a3-4e03-96d8-122202635656', 'Harry Potter and the Deathly Hallows: Part 2', 'Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.', '2011-07-15', 130, 'https://media.harrypotterfanzone.com/deathly-hallows-part-2-theatrical-poster-1050x0-c-default.jpg', '16+'),
('2d72c61d-2bd1-44dd-a7aa-719bf300dcfc', 'Harry Potter and the Deathly Hallows: Part 1', 'As Harry races against time and evil to destroy the Horcruxes, he uncovers the existence of three most powerful objects in the wizarding world: the Deathly Hallows.', '2010-11-19', 146, 'https://media.harrypotterfanzone.com/deathly-hallows-part-1-theatrical-poster-1050x0-c-default.jpg', '16+'),
('4e15bd5b-8bef-4e63-b178-c6799e69421c', 'Harry Potter and the Chamber of Secrets', 'An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic.', '2002-11-15', 161, 'https://media.harrypotterfanzone.com/chamber-of-secrets-theatrical-poster-1050x0-c-default.jpg', '18+'),
('7d2dbfc2-d0a4-4196-b8fa-6dfadfb7a588', 'Harry Potter and the Goblet of Fire', 'Harry finds himself mysteriously selected as an under-aged competitor in a dangerous tournament between three schools of magic.', '2005-11-18', 157, 'https://media.harrypotterfanzone.com/goblet-of-fire-theatrical-poster-2-1050x0-c-default.jpg', '18+'),
('a99c4782-55f8-4610-b562-e3ccbe25aad8', 'Harry Potter and the Order of the Phoenix', 'With their warning about Lord Voldemort\'s return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.', '2007-07-11', 138, 'https://media.harrypotterfanzone.com/order-of-the-phoenix-theatrical-poster-1050x0-c-default.jpg', '16+'),
('b62dbfe3-58de-4d78-ae86-50c2bcd46675', 'Harry Potter and the Philosopher\'s Stone', 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.', '2001-11-16', 152, 'https://media.harrypotterfanzone.com/sorcerers-stone-one-sheet-1050x0-c-default.jpg', '16+'),
('b93dc449-0d9f-4359-87cf-15188fd4bbae', 'Harry Potter and the Half-Blood Prince', 'As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as \'the property of the Half-Blood Prince\' and begins to learn more about Lord Voldemort\'s dark past.', '2009-07-15', 153, 'https://media.harrypotterfanzone.com/half-blood-prince-theatrical-poster-1050x0-c-default.jpg', '16+');

-- Insert score
INSERT INTO score_movies (hash_id, score)
SELECT
    m.hash_id,
    CASE
        WHEN YEAR(m.release_date) >= 2000 AND YEAR(m.release_date) < 2010 THEN 4.0
        WHEN YEAR(m.release_date) >= 2010 AND YEAR(m.release_date) < 2020 THEN 4.5
        ELSE 5.0
    END AS score
FROM
    movies m;
