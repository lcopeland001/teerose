
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "blog" (
	"id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
	"author_first_name" VARCHAR(80) NOT NULL,
	"author_last_name" VARCHAR(80) NOT NULL,
	"date" DATE,
    "title" VARCHAR (80) NOT NULL,
	"post" VARCHAR(80) NULL
);