INSERT INTO users (name, riskScore, portfolioReturn, literacy, eduScores, eduIsAnswered, isNew)
VALUES
    ('bob', 0, 1, 0, '{"1":0, "2":0, "3":0, "4":0, "5":1}', '{"1":0, "2":0, "3":0, "4":0, "5":1}', false),
    ('joe', 0, 1, 0, '{"1":0, "2":0, "3":0, "4":0, "5":0}', '{"1":0, "2":0, "3":0, "4":0, "5":0}', false);


SET datestyle = "ISO, MDY";

INSERT INTO expenses (name, user_id, amount, type, date)
VALUES
    -- ('Coffee', 1, 333, 'food', '2020-01-28'),
    -- ('Burger King', 1, 10, 'food', '01/05/2020'),
    -- ('Groceries', 1, 28, 'food', '01/6/2020'),
    -- ('Rotti King', 1, 15, 'food', '01/8/2020'),
    -- ('Sushi', 1, 20, 'food', '01/11/2020'),
    -- ('Coffee', 1, 2, 'food', '01/12/2020'),
    -- ('Groceries', 1, 35, 'food', '01/16/2020'),
    -- ('Coffee', 1, 2, 'food', '01/16/2020'),
    -- ('Mcdonalds', 1, 12, 'food', '01/18/2020'),
    -- ('Coffee', 1, 2, 'food', '01/19/2020'),
    -- ('Coffee', 1, 2, 'food', '01/20/2020'),
    -- ('Groceries', 1, 50, 'food', '01/20/2020'),
    -- ('Coffee', 1, 2, 'food', '01/21/2020'),
    -- ('Groceries', 1, 30.5, 'food', '01/25/2020'),
    -- ('Rent', 1, 1200, 'home', '01/1/2020'),
    ('Home Insurance', 1, 150, 'home', '01/3/2020'),
    -- ('Hydro', 1, 200, 'home', '01/11/2020'),
    -- ('Gas', 1, 50, 'home', '01/20/2020'),
    -- ('Auto Insurance', 1, 200, 'transporation', '01/5/2020'),
    ('Hydro', 1, 250, 'utilities', '01/5/2020'),
    -- ('Movies', 1, 550, 'entertainment', '01/11/2020'),
    -- ('Viagara', 1, 1000, 'medical', '01/5/2020'),
    -- ('Debt', 1, 666, 'debt', '01/5/2020'),
    -- ('Flying Pony', 1, 1250, 'misc', '01/5/2020'),



    ('Auto Lease', 1, 320, 'transporation', '01/5/2020'),
    ('Coffee', 1, 2, 'food', '02/03/2020'),
    ('Burger King', 1, 10, 'food', '02/05/2020'),
    ('Groceries', 1, 28, 'food', '02/6/2020'),
    ('Rotti King', 1, 15, 'food', '02/8/2020'),
    ('Sushi', 1, 20, 'food', '02/11/2020'),
    ('Coffee', 1, 2, 'food', '02/12/2020'),
    ('Groceries', 1, 35, 'food', '02/16/2020'),
    ('Coffee', 1, 2, 'food', '02/16/2020'),
    ('Mcdonalds', 1, 12, 'food', '02/18/2020'),
    ('Coffee', 1, 2, 'food', '02/19/2020'),
    ('Coffee', 1, 2, 'food', '02/20/2020'),
    ('Groceries', 1, 50, 'food', '02/20/2020'),
    ('Coffee', 1, 2, 'food', '02/21/2020'),
    ('Groceries', 1, 30.5, 'food', '02/25/2020'),
    ('Rent', 1, 1500, 'home', '02/1/2020'),
    ('Home Insurance', 1, 150, 'home', '02/3/2020'),
    ('Hydro', 1, 300, 'home', '02/11/2020'),
    ('Gas', 1, 80, 'home', '02/20/2020'),
    ('Auto Insurance', 1, 200, 'transporation', '02/5/2020'),
    ('Auto Lease', 1, 320, 'transporation', '02/5/2020'),
    ('Fancy Sushi', 1, 500, 'food', '02/11/2020'),('Hydro', 1, 250, 'utilities', '02/5/2020'),
    ('Movies', 1, 550, 'entertainment', '02/11/2020'),
    ('Viagara', 1, 1000, 'medical', '02/5/2020'),
    ('Debt', 1, 666, 'debt', '02/5/2020'),
    ('Flying Pony', 1, 1250, 'misc', '02/5/2020'),


    ('Auto Lease', 1, 0, 'transporation', '03/5/2020'),
    ('Fancy Sushi', 1, 0, 'food', '03/11/2020'),
    ('Hydro', 1, 0, 'utilities', '03/5/2020'),
    ('Movies', 1, 0, 'entertainment', '03/11/2020'),
    ('Viagara', 1, 0, 'medical', '03/5/2020'),
    ('Debt', 1, 0, 'debt', '03/5/2020'),
    ('Flying Pony', 1, 0, 'misc', '03/5/2020'),
    ('home', 1, 0, 'home', '03/5/2020');



INSERT INTO budget (user_id, base, income, c_hous, c_tran, c_food, c_util, c_entr, c_medi, c_debt, c_misc)
VALUES (1, 100000, 1000, 10, 20, 30, 40, 50, 60, 70, 80);
  
INSERT INTO goals (name, user_id, type, amount, description, date)
VALUES
    ('goal01 save for purchase', 1, 'SFP', 500000, 'description', '01/5/2027'),
    ('goal02 long name example + save per month -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------',
    1, 'SPM', 500,
    'description description description description description description description description description description description description description description description description description description description description description description description description description description description',
    '01/5/2020'),
    ('goal03 limit expenses', 1, 'LE', 400, 'description', '01/5/2020'),
    ('goal04 limit expenses high value', 1, 'LE', 10000, 'description', '01/5/2020'),
    ('someone elses goal 1', 2, 'LE', 10000, 'description', '01/5/2020'),
    ('someone elses goal 2', 2, 'LE', 10000, 'description', '01/5/2020');

  -- id SERIAL PRIMARY KEY NOT NULL,
  -- name VARCHAR(255) NOT NULL,
  -- user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  -- amount INTEGER NOT NULL,
  -- type VARCHAR(255) NOT NULL,
  -- date DATE NOT NULL