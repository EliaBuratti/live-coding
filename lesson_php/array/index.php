<?php

$words = explode(' ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos amet ullam, dolorum repudiandae dolore libero consectetur tempora, expedita ab tenetur iure sint placeat commodi maxime, assumenda molestiae? Repellendus, odit?
');

var_dump($words);

var_dump(in_array($_GET['word'], $words));

?>

<!-- LIVE COding
1. Inserire delle parole all’interno di un array
2. controllare se la parola passata dall’utente tramite un form è presente nell'array. -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>word check</title>
</head>

<body>
    <?php if (isset($_GET['word']) && in_array($_GET['word'], $words)) : ?>

        <p>word founded</p>

    <?php else : ?>

        <p>word not found</p>


    <?php endif; ?>
    <form action="" method="get">
        <input type="text" placeholder="scrivi una parola da cercare" name="word" id="word">
        <button>controlla</button>
    </form>

</body>

</html>